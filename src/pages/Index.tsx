
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, FileText, MessageSquare, Briefcase, UserCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Features Section */}
      <Features />
      
      {/* How It Works */}
      <section className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <UserCircle className="h-6 w-6 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 font-display">
                How Your AI Assistant Works
              </h2>
            </div>
            <p className="text-lg text-foreground/80">
              Our smart technology simplifies your job search journey in just three simple steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="absolute top-8 -right-full h-0.5 w-full bg-primary/20 hidden md:block"></div>
                </div>
                <h3 className="text-xl font-medium mb-2 font-display">Step {index + 1}: {step.title}</h3>
                <p className="text-foreground/80">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto">
            <div className="md:w-1/2">
              <div className="flex items-center gap-2 mb-4">
                <UserCircle className="h-6 w-6 text-primary" />
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-display">
                  Ready To Find Your Perfect Match?
                </h2>
              </div>
              <p className="text-lg text-foreground/80 mb-6">
                Start using our intelligent AI tools today and let TalentHunt AI help match your talent with the right job opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link to="/chat" className="group">
                    Start Your Journey
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/features">
                    Explore Features
                  </Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" 
                alt="Happy job seekers using TalentHunt AI" 
                className="rounded-xl shadow-lg border border-white/10 w-full max-w-md h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center">
              <span className="bg-primary text-primary-foreground px-2 py-1 rounded mr-1 flex items-center">
                <UserCircle className="h-4 w-4 mr-1" />TH
              </span>
              <span className="text-xl font-semibold font-display">TalentHunt AI</span>
            </div>
            
            <nav className="flex flex-wrap gap-8 justify-center">
              <Link to="/" className="text-sm hover:text-primary">Home</Link>
              <Link to="/features" className="text-sm hover:text-primary">Features</Link>
              <Link to="/chat" className="text-sm hover:text-primary">AI Chat</Link>
              <Link to="/dashboard" className="text-sm hover:text-primary">Dashboard</Link>
            </nav>
            
            <div className="text-sm text-foreground/60">
              © {new Date().getFullYear()} TalentHunt AI. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const steps = [
  {
    title: "Upload Your Resume",
    description: "Submit your resume to our intelligent AI analyzer for personalized improvements and suggestions.",
    icon: FileText
  },
  {
    title: "Chat With Your Buddy",
    description: "Talk with our AI companion to receive practical guidance for all your job search questions.",
    icon: MessageSquare
  },
  {
    title: "Track Your Progress",
    description: "Use our smart tools to organize your job applications and receive timely reminders.",
    icon: Briefcase
  }
];

export default Index;
