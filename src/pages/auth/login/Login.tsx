"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Leaf } from "lucide-react";
import { useNavigate } from "react-router";

export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would dispatch a login action
    console.log({ email, password, rememberMe });
  };

  return (
    <div className="container absolute -translate-x-[50%] left-[50%] flex h-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <div className="flex justify-center">
            <Leaf className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="text-2xl font-semibold tracking-tight">
            Вход в аккаунт
          </h1>
          <p className="text-sm text-lt-muted-foreground dark:text-dk-muted-foreground">
            Введите ваш email и пароль для входа в аккаунт
          </p>
        </div>

        <Card>
          <form onSubmit={handleSubmit}>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Пароль</Label>
                    <button
                      onClick={() => navigate("/auth/reset")}
                      className="text-xs text-lt-muted-foreground dark:text-dk-muted-foreground hover:text-lt-primary dark:hover:text-dk-primary"
                    >
                      Забыли пароль?
                    </button>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="remember"
                    checked={rememberMe}
                    onCheckedChange={(checked) => setRememberMe(!!checked)}
                  />
                  <Label htmlFor="remember" className="text-sm font-normal">
                    Запомнить меня
                  </Label>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col mt-4">
              <Button type="submit" className="w-full">
                Войти
              </Button>
            </CardFooter>
          </form>
        </Card>

        <p className="text-center text-sm text-lt-muted-foreground dark:text-dk-muted-foreground">
          Нет аккаунта?{" "}
          <button
            onClick={() => navigate("/auth/register")}
            className="text-lt-primary dark:text-dk-primary hover:underline"
          >
            Зарегистрироваться
          </button>
        </p>
      </div>
    </div>
  );
}
