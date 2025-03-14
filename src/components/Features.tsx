
import { useRef } from "react";
import { 
  FileText, 
  MessageSquare, 
  Briefcase, 
  UserCheck,
  Calendar,
  TrendingUp
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { Feature } from "@/types";

const Features = () => {
  const featuresRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={featuresRef}
      className="py-20 md:py-32 bg-secondary/50"
      id="features"
    >
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Comprehensive AI-Powered Features
          </h2>
          <p className="text-lg text-foreground/80">
            Everything you need to excel in your job search and career development journey, 
            powered by advanced artificial intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              feature={feature}
              className={cn(
                "animate-fade-up",
                index === 1 && "animate-stagger-1",
                index === 2 && "animate-stagger-2",
                index === 3 && "animate-stagger-3",
                index === 4 && "animate-stagger-4",
                index === 5 && "animate-stagger-5"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ 
  feature, 
  className 
}: { 
  feature: Feature;
  className?: string;
}) => {
  return (
    <Card className={cn("h-full transition-all duration-300 hover:shadow-md", className)}>
      <CardHeader>
        <feature.icon className="h-10 w-10 text-primary mb-4" />
        <CardTitle>{feature.title}</CardTitle>
        <CardDescription>{feature.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {feature.bullets?.map((bullet, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2 h-5 w-5 text-primary flex-shrink-0">•</span>
              <span className="text-sm text-foreground/80">{bullet}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

const features: (Feature & { bullets?: string[] })[] = [
  {
    title: "Resume Analysis",
    description: "Get AI-powered feedback on your resume",
    icon: FileText,
    bullets: [
      "Industry-specific suggestions",
      "ATS compatibility check",
      "Format and content optimization",
    ],
  },
  {
    title: "AI Chat Assistant",
    description: "Instant answers to all your career questions",
    icon: MessageSquare,
    bullets: [
      "24/7 job search guidance",
      "Resume writing tips",
      "Career path recommendations",
    ],
  },
  {
    title: "Job Application Tracking",
    description: "Manage your entire job search in one place",
    icon: Briefcase,
    bullets: [
      "Automatic status updates",
      "Application deadlines",
      "Follow-up reminders",
    ],
  },
  {
    title: "Interview Preparation",
    description: "Practice with AI-generated interview questions",
    icon: UserCheck,
    bullets: [
      "Industry-specific questions",
      "Answer feedback",
      "Confidence building",
    ],
  },
  {
    title: "Networking Assistant",
    description: "Maximize your professional connections",
    icon: Calendar,
    bullets: [
      "LinkedIn outreach templates",
      "Follow-up suggestions",
      "Relationship management",
    ],
  },
  {
    title: "Career Development",
    description: "Long-term career growth strategies",
    icon: TrendingUp,
    bullets: [
      "Skill gap analysis",
      "Learning recommendations",
      "Promotion preparation",
    ],
  },
];

export default Features;
