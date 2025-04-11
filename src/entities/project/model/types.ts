export type ProjectCategory = "ecology" | "social" | "governance"

export interface ESGRatingType {
  e: number
  s: number
  g: number
  total: number
}

export interface Project {
  id: string
  title: string
  description: string
  fullDescription?: string
  category: ProjectCategory
  image?: string
  currentAmount: number
  targetAmount: number
  daysLeft: number
  backers: number
  esgRating: ESGRatingType
  createdAt: string
  endDate: string
  creator: {
    id: string
    name: string
    avatar?: string
  }
  updates?: ProjectUpdate[]
  comments?: ProjectComment[]
}

export interface ProjectItem extends Project {
    featured?: boolean;
}

export interface ProjectUpdate {
  id: string
  projectId: string
  title: string
  content: string
  date: string
  author: {
    id: string
    name: string
    avatar?: string
  }
}

export interface ProjectComment {
  id: string
  projectId: string
  content: string
  date: string
  author: {
    id: string
    name: string
    avatar?: string
  }
}
