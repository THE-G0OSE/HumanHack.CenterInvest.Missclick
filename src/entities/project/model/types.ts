export type ProjectCategory = "ecology" | "social" | "governance";

export interface ESGRatingType {
  e: number;
  s: number;
  g: number;
  total: number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  full_description?: string;
  category: ProjectCategory;
  image?: string;
  current_amount: number;
  target_amount: number;
  days_left: number;
  backers: number;
  esg_rating: ESGRatingType;
  created_at: string;
  end_date: string;
  creator_id: string;
  updates?: string[];
  comments?: string[];
}

export interface ProjectItem extends Project {
  featured?: boolean;
}

export interface ProjectUpdate {
  id: string;
  projectId: string;
  title: string;
  content: string;
  date: string;
  author: {
    id: string;
    name: string;
    avatar?: string;
  };
}

export interface ProjectComment {
  id: string;
  projectId: string;
  content: string;
  date: string;
  author: {
    id: string;
    name: string;
    avatar?: string;
  };
}
