
import React from "react";
import { FileText, MessageSquare, Briefcase, Search, ChartBar, Calendar, Wand2 } from "lucide-react";
import { Feature } from "@/types";

const Features = () => {
  const features: Feature[] = [
    {
      title: "Magical Resume Analysis",
      description: "Our AI wizardry reveals how to transform your resume to captivate hiring managers and outsmart ATS systems.",
      icon: FileText
    },
    {
      title: "Enchanted Career Chat",
      description: "Consult with our AI wizard for spellbinding career advice, job search strategies, and personalized guidance.",
      icon: MessageSquare
    },
    {
      title: "Spell-Bound Job Tracker",
      description: "Keep your job hunt organized with magical tracking of applications, interviews, and follow-ups in one enchanted space.",
      icon: Briefcase
    },
    {
      title: "Mystical Job Matching",
      description: "Our crystal ball algorithm discovers the perfect job opportunities that align with your unique skills and aspirations.",
      icon: Search
    },
    {
      title: "Interview Wizardry",
      description: "Master the art of interviews with AI-conjured questions tailored to your dream roles and industries.",
      icon: ChartBar
    },
    {
      title: "Enchanted Reminders",
      description: "Our magical timekeepers ensure you never miss important follow-ups for your job applications.",
      icon: Calendar
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-background to-accent/5">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Wand2 className="h-6 w-6 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-display text-gradient-orange">
              JobWizard's Magical Toolkit
            </h2>
          </div>
          <p className="text-lg text-foreground/80 font-light">
            Discover our enchanting features designed to cast away job search struggles
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="relative flex flex-col p-6 neo-card rounded-xl hover:border-primary/30 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="h-12 w-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 relative overflow-hidden group-hover:bg-primary/30 transition-colors">
                <feature.icon className="h-6 w-6 text-primary" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 opacity-0 group-hover:opacity-100 animate-pulse"></div>
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
