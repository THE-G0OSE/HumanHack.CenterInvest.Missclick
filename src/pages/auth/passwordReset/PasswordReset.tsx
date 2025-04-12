import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Leaf } from "lucide-react";
import { useNavigate } from "react-router";

export function PasswordReset() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email });
    setSubmitted(true);
  };

  return (
    <div className="container absolute -translate-x-[50%] left-[50%] flex h-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <div className="flex justify-center">
            <Leaf className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="text-2xl font-semibold tracking-tight">
            Восстановление пароля
          </h1>
          <p className="text-sm text-lt-muted-foreground dark:text-dk-muted-foreground">
            Введите ваш email, и мы отправим вам ссылку для сброса пароля
          </p>
        </div>

        <Card>
          {!submitted ? (
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
                </div>
              </CardContent>
              <CardFooter className="flex flex-col mt-5">
                <Button type="submit" className="w-full">
                  Отправить ссылку
                </Button>
              </CardFooter>
            </form>
          ) : (
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <p className="text-sm">
                  Если указанный email зарегистрирован в системе, мы отправили
                  на него инструкции по восстановлению пароля.
                </p>
                <p className="text-sm text-lt-muted-foreground dark:text-dk-muted-foreground">
                  Проверьте вашу почту и следуйте инструкциям в письме.
                </p>
              </div>
            </CardContent>
          )}
        </Card>

        <p className="text-center text-sm text-lt-muted-foreground dark:text-dk-muted-foreground">
          <button
            onClick={() => navigate("/auth/login")}
            className="text-lt-primary dark:text-dk-primary hover:underline"
          >
            Вернуться к входу
          </button>
        </p>
      </div>
    </div>
  );
}
