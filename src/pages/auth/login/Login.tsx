"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Leaf, KeyRound, AlertCircle } from "lucide-react";
import { toast } from "sonner";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useNavigate } from "react-router";
import {
  useLoginMutation,
  useVerification2FAMutation,
} from "@/features/auth/api/AuthApi";
import { useGetMEQuery } from "@/entities/user/model/usersApi";
import { setUser } from "@/entities/user";

export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [is2FARequired, setIs2FARequired] = useState(false);
  const [twoFactorCode, setTwoFactorCode] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationError, setVerificationError] = useState("");

  const [login] = useLoginMutation();
  const [verify] = useVerification2FAMutation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setVerificationError("");
    login({ email: email.trim(), password: password.trim() });
    setIs2FARequired(true);
    toast("Мы отправили код подтверждения на ваш email");
  };

  const handleVerify2FA = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsVerifying(true);
    setVerificationError("");

    const { data } = await verify({
      code: twoFactorCode.trim(),
      email: email.trim(),
    });
    setTimeout(() => {
      if (data) {
        window.localStorage.setItem("token", data.access_token);
        toast("Добро пожаловать в GreenFinance!");
        window.location.href = "/dashboard";
        setTimeout(() => {
          const { data: userData } = useGetMEQuery(data.access_token);
          setTimeout(() => {
            setUser({
              ...userData!,
              ecoWallet: { co2Saved: 0, treesPlanted: 0, waterSaved: 0 },
              achievements: [],
              backedProjects: [],
            });
          }, 1000);
        }, 1000);
      } else {
        setVerificationError(
          "Неверный код подтверждения. Пожалуйста, попробуйте снова."
        );
        setIsVerifying(false);
      }
    }, 3000);
  };

  const handleCancel = () => {
    setIs2FARequired(false);
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
            {!is2FARequired
              ? "Введите ваш email и пароль для входа в аккаунт"
              : "Введите код подтверждения для завершения входа"}
          </p>
        </div>

        <Card>
          {!is2FARequired ? (
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
          ) : (
            <form onSubmit={handleVerify2FA}>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex justify-center mb-2">
                    <KeyRound className="h-12 w-12 text-green-600" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="twoFactorCode">Код подтверждения</Label>
                    <Input
                      id="twoFactorCode"
                      placeholder="Введите 6-значный код"
                      value={twoFactorCode}
                      onChange={(e) => setTwoFactorCode(e.target.value)}
                      maxLength={6}
                      required
                    />
                    <p className="text-xs text-muted-foreground">
                      Введите 6-значный код, который мы отправили на ваш email
                    </p>
                  </div>

                  {verificationError && (
                    <Alert variant="destructive">
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>{verificationError}</AlertDescription>
                    </Alert>
                  )}
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-4">
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isVerifying || twoFactorCode.length !== 6}
                >
                  {isVerifying ? "Проверка..." : "Подтвердить"}
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  disabled={isVerifying}
                  onClick={handleCancel}
                >
                  отмена
                </Button>
              </CardFooter>
            </form>
          )}
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
