
import React from "react";
import { FileText, MessageSquare, Briefcase, Search, ChartBar, Calendar } from "lucide-react";
import { Feature } from "@/types";

const Features = () => {
  const features: Feature[] = [
    {
      title: "Resume Analysis",
      description: "Get AI-powered feedback on your resume to stand out from the crowd and pass ATS systems.",
      icon: FileText
    },
    {
      title: "Career Chat Assistant",
      description: "Chat with our AI to get personalized career advice, job search strategies, and more.",
      icon: MessageSquare
    },
    {
      title: "Job Application Tracker",
      description: "Stay organized by tracking all your job applications, interviews, and follow-ups in one place.",
      icon: Briefcase
    },
    {
      title: "Tailored Job Matching",
      description: "Discover job opportunities that match your skills, experience, and career goals.",
      icon: Search
    },
    {
      title: "Interview Preparation",
      description: "Practice with AI-generated interview questions specific to your target roles and industries.",
      icon: ChartBar
    },
    {
      title: "Application Reminders",
      description: "Never miss a follow-up with automated reminders for your job applications.",
      icon: Calendar
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-background to-accent/5">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 font-display text-gradient-orange">
            AI-Powered Career Tools
          </h2>
          <p className="text-lg text-foreground/80 font-light">
            Our platform offers powerful features to help you land your dream job faster
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="relative flex flex-col p-6 neo-card rounded-xl"
            >
              <div className="h-12 w-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 font-display text-white">{feature.title}</h3>
              <p className="text-foreground/80 mb-4 font-light">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
