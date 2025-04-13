import { ITransaction } from "@/entities/transaction/model/types";

export interface User {
  id: string;
  name: string;
  email: string;
  photo?: string;
  ecoWallet: {
    co2Saved: number;
    treesPlanted: number;
    waterSaved: number;
  };
  achievements: Achievement[];
  backedProjects: string[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  earnedAt: string;
}

export interface UserResponse {
  name: string;
  email: string;
  password: string;
  id: string;
  photo: string;
}
