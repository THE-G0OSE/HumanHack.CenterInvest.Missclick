import type { User } from "@/entities/user"

export const mockUser: User = {
  id: "user123",
  name: "Иван Петров",
  email: "ivan@example.com",
  avatar: "/placeholder.svg?height=100&width=100",
  ecoWallet: {
    co2Saved: 250,
    treesPlanted: 15,
    waterSaved: 5000,
  },
  achievements: [
    {
      id: "achievement1",
      title: "Эко-новичок",
      description: "Поддержал первый экологический проект",
      icon: "leaf",
      earnedAt: "2023-12-20T10:00:00Z",
    },
    {
      id: "achievement2",
      title: "Спаситель деревьев",
      description: "Благодаря вам посажено 10+ деревьев",
      icon: "tree",
      earnedAt: "2024-01-15T10:00:00Z",
    },
    {
      id: "achievement3",
      title: "Социальный герой",
      description: "Поддержал 3 социальных проекта",
      icon: "heart",
      earnedAt: "2024-02-05T10:00:00Z",
    },
  ],
  transactions: [
    {
      id: "transaction1",
      projectId: "1",
      projectTitle: "Восстановление лесов в Сибири",
      amount: 1000,
      date: "2023-12-20T10:00:00Z",
      status: "completed",
    },
    {
      id: "transaction2",
      projectId: "3",
      projectTitle: "Инклюзивный детский сад",
      amount: 500,
      date: "2024-01-10T10:00:00Z",
      status: "completed",
    },
    {
      id: "transaction3",
      projectId: "2",
      projectTitle: "Солнечные панели для сельских школ",
      amount: 750,
      date: "2024-02-05T10:00:00Z",
      status: "pending",
    },
  ],
  backedProjects: ["1", "2", "3"],
}
