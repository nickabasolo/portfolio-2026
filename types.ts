
export interface CaseStudySummary {
  problem: string;
  solution: string;
  outcome: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  duration: string;
  company: string;
  image: string;
  tags: string[];
  overview: string;
  problem: string;
  solution: string;
  impact: string[];
  summary: CaseStudySummary;
}

export interface SideProject {
  id: string;
  title: string;
  subtitle?: string; // Added for detail headers
  description: string;
  link?: string;
  image: string;
  category: string;
  summary?: CaseStudySummary; // Added to support detail view
  role?: string;
  duration?: string;
  company?: string;
  tags?: string[];
}
