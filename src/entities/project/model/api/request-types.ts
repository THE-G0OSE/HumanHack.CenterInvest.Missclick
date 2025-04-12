export interface IPatchProject {
  id: string;
  title: string;
  description: string;
  fullDescription?: string;
  category: "ecology" | "social" | "governance";
  image?: string;
  targetAmount: number;
  endDate: string;
}

export interface IPostProject {
  title: string;
  description: string;
  fullDescription?: string;
  category: "ecology" | "social" | "governance";
  image?: string;
  targetAmount: number;
  endDate: string;
}
