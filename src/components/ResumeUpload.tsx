
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Upload, Check, X, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const ResumeUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const droppedFile = e.dataTransfer.files[0];
      if (validateFile(droppedFile)) {
        setFile(droppedFile);
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      if (validateFile(selectedFile)) {
        setFile(selectedFile);
      }
    }
  };

  const validateFile = (file: File): boolean => {
    const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    
    if (!validTypes.includes(file.type)) {
      alert("Please upload a PDF or Word document.");
      return false;
    }
    
    if (file.size > 5 * 1024 * 1024) { // 5MB
      alert("File size should be less than 5MB.");
      return false;
    }
    
    return true;
  };

  const handleUpload = () => {
    if (!file) return;
    
    setIsUploading(true);
    setIsSuccess(false);
    setIsError(false);
    
    // Simulate upload process
    setTimeout(() => {
      const success = Math.random() > 0.2; // 80% success rate for demo
      
      if (success) {
        setIsSuccess(true);
      } else {
        setIsError(true);
      }
      
      setIsUploading(false);
    }, 2000);
  };

  const resetUpload = () => {
    setFile(null);
    setIsSuccess(false);
    setIsError(false);
  };

  return (
    <Card className="w-full max-w-md mx-auto shadow-lg animate-fade-in">
      <CardHeader>
        <CardTitle className="flex items-center">
          <FileText className="mr-2 h-5 w-5 text-primary" />
          Resume Upload
        </CardTitle>
        <CardDescription>
          Upload your resume for AI analysis and feedback
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        {!file && !isSuccess ? (
          <div
            className={cn(
              "border-2 border-dashed rounded-lg p-8 text-center transition-all duration-200",
              isDragging ? "border-primary bg-primary/5" : "border-border",
            )}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <div className="flex flex-col items-center space-y-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Upload className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-medium">Drag and drop your resume</p>
                <p className="text-sm text-muted-foreground mt-1">
                  PDF or Word documents up to 5MB
                </p>
              </div>
              <Button variant="outline" onClick={() => document.getElementById("file-upload")?.click()}>
                Browse files
              </Button>
              <input
                id="file-upload"
                type="file"
                className="hidden"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
              />
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {file && !isSuccess && !isError && (
              <div className="flex items-center justify-between p-3 border rounded-lg bg-secondary/50">
                <div className="flex items-center space-x-3">
                  <FileText className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium truncate max-w-[200px]">{file.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {(file.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" onClick={resetUpload}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
            )}
            
            {isSuccess && (
              <div className="flex flex-col items-center space-y-2 py-4">
                <div className="p-2 rounded-full bg-green-100">
                  <Check className="h-6 w-6 text-green-600" />
                </div>
                <p className="font-medium text-green-600">Resume uploaded successfully!</p>
                <p className="text-sm text-center text-muted-foreground">
                  Your resume is now being analyzed by our AI. You'll receive feedback shortly.
                </p>
              </div>
            )}
            
            {isError && (
              <div className="flex flex-col items-center space-y-2 py-4">
                <div className="p-2 rounded-full bg-red-100">
                  <X className="h-6 w-6 text-red-600" />
                </div>
                <p className="font-medium text-red-600">Upload failed</p>
                <p className="text-sm text-center text-muted-foreground">
                  Something went wrong. Please try again.
                </p>
              </div>
            )}
          </div>
        )}
      </CardContent>
      
      {file && !isSuccess && !isError && (
        <CardFooter>
          <Button 
            className="w-full" 
            onClick={handleUpload}
            disabled={isUploading}
          >
            {isUploading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Uploading...
              </>
            ) : (
              "Upload & Analyze"
            )}
          </Button>
        </CardFooter>
      )}
      
      {(isSuccess || isError) && (
        <CardFooter>
          <Button 
            variant={isSuccess ? "outline" : "default"} 
            className="w-full" 
            onClick={resetUpload}
          >
            {isSuccess ? "Upload Another Resume" : "Try Again"}
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default ResumeUpload;
