
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import ResumeUpload from "@/components/ResumeUpload";
import { Link } from "react-router-dom";
import { Briefcase, Calendar, FileText, PlusCircle, User, MessageSquare, ChevronRight, TrendingUp } from "lucide-react";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-secondary/30">
      <Navbar />

      <div className="container px-4 md:px-6 pt-32 pb-16">
        <div className="md:flex md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-foreground/70 mt-1">
              Track your job search progress and improve your career materials
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex flex-col sm:flex-row gap-2">
            <Button size="sm" variant="outline" asChild>
              <Link to="/chat">
                <MessageSquare className="h-4 w-4 mr-2" />
                Chat with AI
              </Link>
            </Button>
            <Button size="sm">
              <PlusCircle className="h-4 w-4 mr-2" />
              Add Application
            </Button>
          </div>
        </div>

        <Tabs defaultValue="overview" className="space-y-8" onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="applications">Applications</TabsTrigger>
            <TabsTrigger value="resume">Resume</TabsTrigger>
            <TabsTrigger value="interviews">Interviews</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <StatCard 
                title="Applications" 
                value="0" 
                description="Total job applications" 
                icon={Briefcase} 
                trend={{ value: "+0%", direction: "none" }}
              />
              <StatCard 
                title="Interviews" 
                value="0" 
                description="Scheduled interviews" 
                icon={Calendar} 
                trend={{ value: "+0%", direction: "none" }}
              />
              <StatCard 
                title="Resume Score" 
                value="N/A" 
                description="Upload resume for AI rating" 
                icon={FileText} 
                trend={{ value: "", direction: "none" }}
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    <span>Recent Applications</span>
                    <Button variant="ghost" size="sm">
                      View all
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8 text-muted-foreground">
                    <p>No job applications added yet</p>
                    <Button variant="outline" size="sm" className="mt-2">
                      <PlusCircle className="h-4 w-4 mr-2" />
                      Add Your First Application
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    <span>Upcoming Interviews</span>
                    <Button variant="ghost" size="sm">
                      View all
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8 text-muted-foreground">
                    <p>No interviews scheduled</p>
                    <Button variant="outline" size="sm" className="mt-2" asChild>
                      <Link to="/chat">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Get Interview Prep Help
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle>AI Suggestions</CardTitle>
                <CardDescription>
                  Personalized recommendations based on your profile
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-accent/50 p-4 rounded-lg">
                    <div className="flex items-start gap-2">
                      <div className="mt-1">
                        <User className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Complete Your Profile</h3>
                        <p className="text-sm text-foreground/70 mt-1">
                          Add your skills, experience, and job preferences to get better recommendations.
                        </p>
                        <Button variant="link" size="sm" className="p-0 h-auto mt-1">
                          Update Profile
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-accent/50 p-4 rounded-lg">
                    <div className="flex items-start gap-2">
                      <div className="mt-1">
                        <FileText className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Upload Your Resume</h3>
                        <p className="text-sm text-foreground/70 mt-1">
                          Get AI-powered feedback and improvement suggestions.
                        </p>
                        <Button variant="link" size="sm" className="p-0 h-auto mt-1" onClick={() => setActiveTab("resume")}>
                          Upload Resume
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="applications" className="space-y-6">
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle>Job Applications</CardTitle>
                <CardDescription>
                  Track and manage all your job applications in one place
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-10 text-muted-foreground">
                  <Briefcase className="h-12 w-12 mx-auto mb-4 text-muted-foreground/50" />
                  <h3 className="text-lg font-medium mb-1">No applications yet</h3>
                  <p className="max-w-md mx-auto mb-4">
                    Start tracking your job applications to get insights and reminders.
                  </p>
                  <Button>
                    <PlusCircle className="h-4 w-4 mr-2" />
                    Add Your First Application
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="resume" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h2 className="text-xl font-semibold mb-4">Resume Analysis</h2>
                <p className="text-foreground/70 mb-6">
                  Upload your resume to get AI-powered feedback and improvement suggestions. 
                  Our system will analyze your resume against industry standards and provide 
                  personalized recommendations.
                </p>
                <ResumeUpload />
              </div>
              
              <Card className="shadow-sm h-full">
                <CardHeader>
                  <CardTitle>Resume Tips</CardTitle>
                  <CardDescription>
                    General tips to improve your resume
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {resumeTips.map((tip, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="mt-1 text-primary">•</div>
                        <p className="text-sm">{tip}</p>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-6">
                    <Button variant="outline" size="sm" asChild>
                      <Link to="/chat">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Get Personalized Resume Help
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="interviews" className="space-y-6">
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle>Interview Preparation</CardTitle>
                <CardDescription>
                  Practice with AI-generated interview questions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-10 text-muted-foreground">
                  <Calendar className="h-12 w-12 mx-auto mb-4 text-muted-foreground/50" />
                  <h3 className="text-lg font-medium mb-1">No interviews scheduled</h3>
                  <p className="max-w-md mx-auto mb-4">
                    Chat with our AI assistant to practice interview questions for your upcoming interviews.
                  </p>
                  <Button asChild>
                    <Link to="/chat">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Practice Interviews
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

interface StatCardProps {
  title: string;
  value: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  trend: {
    value: string;
    direction: "up" | "down" | "none";
  };
}

const StatCard = ({ title, value, description, icon: Icon, trend }: StatCardProps) => {
  return (
    <Card className="shadow-sm">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            {title}
          </CardTitle>
          <Icon className="h-4 w-4 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-end">
          <div>
            <div className="text-2xl font-bold">{value}</div>
            <p className="text-xs text-muted-foreground mt-1">{description}</p>
          </div>
          {trend.value && (
            <div className="flex items-center">
              {trend.direction === "up" && <TrendingUp className="h-3 w-3 text-green-500 mr-1" />}
              <span className={trend.direction === "up" ? "text-xs text-green-500" : "text-xs text-muted-foreground"}>
                {trend.value}
              </span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

const resumeTips = [
  "Tailor your resume to each job application by matching keywords from the job description.",
  "Include quantifiable achievements rather than just listing responsibilities.",
  "Keep your resume concise - one page for early career, two pages maximum for experienced professionals.",
  "Use a clean, professional design with consistent formatting.",
  "Start bullet points with strong action verbs like 'Achieved', 'Implemented', or 'Managed'.",
  "Include a skills section that highlights relevant technical and soft skills.",
  "Ensure your contact information is up-to-date and professional.",
];

export default Dashboard;
