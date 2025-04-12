import {
  UserStats,
  UserAchievements,
  UserProjects,
  UserTransactions,
} from "@/widgets";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";
import { useGetMEQuery } from "@/entities/user/model/usersApi";
import { setUser } from "@/entities/user";
import { useAppDispatch } from "@/shared/lib/hooks";

export function Dashboard() {
  const dispatch = useAppDispatch()
  const token = window.localStorage.getItem("token");
  const { data: userData, isSuccess } = useGetMEQuery(token ? token : '');
  useEffect(() => {
    setTimeout(() => {if(userData){ dispatch(setUser({
      name: userData!.name,
      email: userData!.email,
      id: "1",
      ecoWallet: { co2Saved: 0, treesPlanted: 0, waterSaved: 0 },
      achievements: [],
      transactions: [],
      backedProjects: [],
    }))}}, 1000);
  }, [userData, isSuccess])

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
