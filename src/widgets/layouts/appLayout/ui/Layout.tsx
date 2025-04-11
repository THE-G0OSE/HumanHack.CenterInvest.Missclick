import { Toaster } from "@/components/ui/sonner";
import React from "react";
import { Header } from "./components";

interface IProps {
  children: React.ReactNode;
}

export const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Toaster />
    </>
  );
};
