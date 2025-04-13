export interface IJWTRequest<body> {
  body: body;
  token: string;
}

export interface IPatchProject {
  id: string;
  title: string;
  description: string;
  full_description?: string;
  category: "ecology" | "social" | "governance";
  image?: string;
  target_amount: number;
  end_date: string;
}

export interface IPostProject {
  title: string;
  description: string;
  full_description?: string;
  category: "ecology" | "social" | "governance";
  image?: string;
  target_amount: number;
  end_date: string;
}
