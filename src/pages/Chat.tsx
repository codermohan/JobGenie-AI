
import { useState } from "react";
import Navbar from "@/components/Navbar";
import ChatInterface from "@/components/ChatInterface";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Chat = () => {
  const [activeTab, setActiveTab] = useState("chat");
  
  return (
    <div className="min-h-screen bg-secondary/30">
      <Navbar />
      
      <div className="container px-4 md:px-6 pt-32 pb-16 mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Button variant="ghost" size="icon" asChild>
            <Link to="/">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <h1 className="text-3xl font-bold">AI Career Assistant</h1>
        </div>
        
        <Tabs defaultValue="chat" className="max-w-3xl mx-auto" onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="chat">Chat</TabsTrigger>
            <TabsTrigger value="resume">Resume Analysis</TabsTrigger>
            <TabsTrigger value="interview">Interview Prep</TabsTrigger>
          </TabsList>
          
          <TabsContent value="chat" className="space-y-4">
            <div className="text-center mb-8 max-w-xl mx-auto">
              <p className="text-foreground/80">
                Ask me anything about your job search, resume optimization, 
                interview preparation, or career guidance.
              </p>
            </div>
            
            <ChatInterface />
          </TabsContent>
          
          <TabsContent value="resume" className="space-y-8">
            <div className="text-center mb-8 max-w-xl mx-auto">
              <h2 className="text-2xl font-bold mb-2">Resume Analysis</h2>
              <p className="text-foreground/80">
                Upload your resume for personalized AI feedback. Get detailed suggestions to make 
                your resume stand out and pass through ATS systems.
              </p>
            </div>
            
            <div className="flex justify-center">
              <Button variant="outline" onClick={() => setActiveTab("chat")}>
                Coming Soon! Chat with AI for resume tips instead
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="interview" className="space-y-8">
            <div className="text-center mb-8 max-w-xl mx-auto">
              <h2 className="text-2xl font-bold mb-2">Interview Preparation</h2>
              <p className="text-foreground/80">
                Practice with AI-generated interview questions specific to your industry and role. 
                Get instant feedback on your answers.
              </p>
            </div>
            
            <div className="flex justify-center">
              <Button variant="outline" onClick={() => setActiveTab("chat")}>
                Coming Soon! Chat with AI for interview preparation
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Chat;
