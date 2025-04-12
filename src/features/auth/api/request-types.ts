export interface ILogin {
  email: string;
  password: string;
}

export interface IRegister {
  name: string;
  email: string;
  password: string;
}

export interface IEmailVerification {
  email: string;
}

export interface IEmailCode {
  email: string;
  confirm_code: string;
}

export interface I2FA {
  email: string;
  code: string;
}

export interface IPasswordRecovery extends IEmailVerification {}

export interface IPatchProject {
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
