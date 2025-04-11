export interface User {
  id: string
  name: string
  email: string
  avatar?: string
  ecoWallet: {
    co2Saved: number
    treesPlanted: number
    waterSaved: number
  }
  achievements: Achievement[]
  transactions: Transaction[]
  backedProjects: string[] // IDs of projects backed by the user
}

export interface Achievement {
  id: string
  title: string
  description: string
  icon: string
  earnedAt: string
}

export interface Transaction {
  id: string
  projectId: string
  projectTitle: string
  amount: number
  date: string
  status: "completed" | "pending" | "failed"
}
