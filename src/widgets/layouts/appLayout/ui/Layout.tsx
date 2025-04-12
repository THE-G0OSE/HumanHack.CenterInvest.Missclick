import { Toaster } from "@/components/ui/sonner";
import React, { useEffect } from "react";
import { Header } from "./components";
import { useAppDispatch } from "@/shared/lib/hooks";
import { useGetMEQuery } from "@/entities/user/model/usersApi";
import { setUser } from "@/entities/user";

interface IProps {
  children: React.ReactNode;
}

export const Layout: React.FC<IProps> = ({ children }) => {
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
    }))}}, 100);
  }, [userData, isSuccess])
  return (
    <>
      <Header />
      {children}
      <Toaster />
    </>
  );
};
