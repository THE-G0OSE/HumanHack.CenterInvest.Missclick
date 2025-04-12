import {
  ESGRatingType,
  ProjectCategory,
  ProjectComment,
  ProjectUpdate,
} from "../types";

export interface IPostProjectResponse {
  id: string;
  title: string;
  description: string;
  fullDescription?: string;
  category: ProjectCategory;
  image?: string;
  currentAmount: number;
  targetAmount: number;
  daysLeft: number;
  backers: number;
  esgRating: ESGRatingType;
  createdAt: string;
  endDate: string;
  creator: {
    id: string;
    name: string;
    avatar?: string;
  };
  updates?: string[];
  comments?: string[];
}

export interface IGetProjectsResponse {
  projects: {
    id: string;
    title: string;
    description: string;
    fullDescription?: string;
    category: ProjectCategory;
    image?: string;
    currentAmount: number;
    targetAmount: number;
    daysLeft: number;
    backers: number;
    esgRating: ESGRatingType;
    createdAt: string;
    endDate: string;
    creator: {
      id: string;
      name: string;
      avatar?: string;
    };
    updates?: string[];
    comments?: string[];
  }[];
}

export interface IGetProjectResponse {
  id: string;
  title: string;
  description: string;
  fullDescription?: string;
  category: ProjectCategory;
  image?: string;
  currentAmount: number;
  targetAmount: number;
  daysLeft: number;
  backers: number;
  esgRating: ESGRatingType;
  createdAt: string;
  endDate: string;
  creator: {
    id: string;
    name: string;
    avatar?: string;
  };
  updates?: string[];
  comments?: string[];
}

export interface IPatchProjectResponse {
  id: string;
  title: string;
  description: string;
  fullDescription?: string;
  category: ProjectCategory;
  image?: string;
  currentAmount: number;
  targetAmount: number;
  daysLeft: number;
  backers: number;
  esgRating: ESGRatingType;
  createdAt: string;
  endDate: string;
  creator: {
    id: string;
    name: string;
    avatar?: string;
  };
  updates?: string[];
  comments?: string[];
}
