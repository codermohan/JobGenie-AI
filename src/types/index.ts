
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface Resume {
  id: string;
  userId: string;
  fileName: string;
  fileUrl: string;
  uploadedAt: Date;
  feedback?: ResumeFeedback;
}

export interface ResumeFeedback {
  strengths: string[];
  improvements: string[];
  overallScore: number;
  sectionScores: {
    [key: string]: number;
  };
  suggestions: string;
}

export interface JobApplication {
  id: string;
  userId: string;
  company: string;
  position: string;
  status: "saved" | "applied" | "interviewing" | "offer" | "rejected";
  appliedDate?: Date;
  notes?: string;
  url?: string;
}

export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export interface Chat {
  id: string;
  userId: string;
  title: string;
  messages: Message[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}
