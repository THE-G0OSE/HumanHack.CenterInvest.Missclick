import {
  UserStats,
  UserAchievements,
  UserProjects,
  UserTransactions,
} from "@/widgets";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function Dashboard() {
  return (
    <main className="container absolute left-[50%] -translate-x-[50%] py-8">
      <h1 className="text-3xl font-bold mb-6">Личный кабинет</h1>

      <UserStats />

      <Tabs defaultValue="projects" className="mt-8">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="projects">Мои проекты</TabsTrigger>
          <TabsTrigger value="achievements">Достижения</TabsTrigger>
          <TabsTrigger value="transactions">История транзакций</TabsTrigger>
        </TabsList>
        <TabsContent value="projects">
          <UserProjects />
        </TabsContent>
        <TabsContent value="achievements">
          <UserAchievements />
        </TabsContent>
        <TabsContent value="transactions">
          <UserTransactions />
        </TabsContent>
      </Tabs>
    </main>
  );
}
