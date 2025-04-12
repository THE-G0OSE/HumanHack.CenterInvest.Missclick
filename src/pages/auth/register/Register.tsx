import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Leaf } from "lucide-react"
import { useNavigate } from "react-router"

export function Register() {
  const navigate= useNavigate()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [acceptTerms, setAcceptTerms] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ name, email, password, confirmPassword, acceptTerms })
  }

  return (
    <div className="container absolute -translate-x-[50%] left-[50%] flex h-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <div className="flex justify-center">
            <Leaf className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="text-2xl font-semibold tracking-tight">Создание аккаунта</h1>
          <p className="text-sm text-lt-muted-foreground dark:text-dk-muted-foreground">
            Зарегистрируйтесь, чтобы начать инвестировать в устойчивое будущее
          </p>
        </div>

        <Card>
          <form onSubmit={handleSubmit}>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Имя</Label>
                  <Input
                    id="name"
                    placeholder="Иван Петров"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
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
                  <Label htmlFor="password">Пароль</Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Подтверждение пароля</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms"
                    checked={acceptTerms}
                    onCheckedChange={(checked) => setAcceptTerms(!!checked)}
                    required
                  />
                  <Label htmlFor="terms" className="text-sm font-normal">
                    Я принимаю условия использования и политику конфиденциальности
                  </Label>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col mt-3">
              <Button type="submit" className="w-full" disabled={!acceptTerms}>
                Зарегистрироваться
              </Button>
            </CardFooter>
          </form>
        </Card>

        <p className="text-center text-sm text-lt-muted-foreground dark:text-dk-muted-foreground">
          Уже есть аккаунт?{" "}
          <button onClick={() => navigate('/auth/login')} className="text-lt-primary dark:text-dk-primary hover:underline">
            Войти
          </button>
        </p>
      </div>
    </div>
  )
}
