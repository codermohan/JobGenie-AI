
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      heroRef.current.classList.add("opacity-0", "transition-opacity", "duration-1000");
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
    };
  }, []);

  return (
    <div ref={heroRef} className="fancy-blur-bg pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8 md:space-y-12">
          <div className="space-y-2">
            <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary mb-4 animate-fade-in">
              Your AI Career Assistant
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight animate-fade-up">
              Elevate Your Job Search with{" "}
              <span className="text-primary">AI-Powered</span> Precision
            </h1>
            <p className="max-w-[700px] mx-auto mt-4 text-lg text-foreground/80 animate-fade-up animate-stagger-1">
              Leverage AI to perfect your resume, ace your interviews, and track your job applications—all in one seamless platform.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up animate-stagger-2">
            <Button size="lg" asChild>
              <Link to="/chat" className="group">
                Try AI Chat
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/dashboard">
                View Dashboard
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 w-full max-w-3xl mx-auto animate-fade-up animate-stagger-3">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 md:mt-24 relative animate-fade-up animate-stagger-4">
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10 h-20 bottom-0 top-auto"></div>
          <div className="rounded-xl overflow-hidden border shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
              alt="AI Career Assistant Dashboard" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const features = [
  "Resume Analysis",
  "Interview Preparation",
  "Job Tracking",
  "AI Chat Assistant",
  "Networking Tips",
  "Career Guidance"
];

export default Hero;
