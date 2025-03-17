from fastapi import FastAPI, HTTPException, Depends
from pydantic import BaseModel
from typing import List
import spacy
from auth import get_current_user
import jwt
from datetime import datetime, timedelta
from passlib.context import CryptContext
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm

# Load NLP model for keyword extraction
nlp = spacy.load("en_core_web_sm")

app = FastAPI()

# JWT Secret Key & Algorithm
SECRET_KEY = "your_secret_key"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

# Password Hashing
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

def get_password_hash(password):
    return pwd_context.hash(password)

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/token")

def create_access_token(data: dict, expires_delta: timedelta):
    to_encode = data.copy()
    expire = datetime.utcnow() + expires_delta
    to_encode.update({"exp": expire})
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)

# Dummy User Database
fake_users_db = {
    "testuser": {
        "username": "testuser",
        "full_name": "Test User",
        "email": "test@example.com",
        "hashed_password": get_password_hash("password"),
        "disabled": False,
    }
}

class Token(BaseModel):
    access_token: str
    token_type: str

class User(BaseModel):
    username: str
    full_name: str
    email: str
    disabled: bool = False

class UserInDB(User):
    hashed_password: str

def get_user(username: str):
    if username in fake_users_db:
        user_dict = fake_users_db[username]
        return UserInDB(**user_dict)
    return None

def authenticate_user(username: str, password: str):
    user = get_user(username)
    if not user or not verify_password(password, user.hashed_password):
        return None
    return user

@app.post("/token", response_model=Token)
def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends()):
    user = authenticate_user(form_data.username, form_data.password)
    if not user:
        raise HTTPException(status_code=401, detail="Incorrect username or password")
    access_token = create_access_token({"sub": user.username}, timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES))
    return {"access_token": access_token, "token_type": "bearer"}

@app.get("/user-dashboard")
def user_dashboard(user: dict = Depends(get_current_user)):
    return {"message": "Welcome to your dashboard", "user": user}

# Define Pydantic models
class JobPost(BaseModel):
    title: str
    description: str

class Resume(BaseModel):
    content: str

# Keyword Extraction Function
def extract_keywords(text: str):
    doc = nlp(text)
    return list(set([token.lemma_ for token in doc if token.is_alpha and not token.is_stop]))

# API Endpoint to Extract Keywords from Job Description
@app.post("/extract-job-keywords")
def extract_job_keywords(job: JobPost):
    keywords = extract_keywords(job.description)
    return {"keywords": keywords}

# API Endpoint to Extract Keywords from Resume
@app.post("/extract-resume-keywords")
def extract_resume_keywords(resume: Resume):
    keywords = extract_keywords(resume.content)
    return {"keywords": keywords}
