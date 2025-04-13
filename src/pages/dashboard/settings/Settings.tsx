import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useAppSelector } from "@/shared/lib/hooks";
import { selectUser } from "@/entities/user/model/selectors";
import { toast } from 'sonner'

export function Settings() {
  const user = useAppSelector(selectUser);
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [bio, setBio] = useState("");
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [marketingEmails, setMarketingEmails] = useState(false);

  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, bio });
    toast('Ваши изменения успешно сохранены')
  };

  const handleNotificationsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ emailNotifications, pushNotifications, marketingEmails });
    toast('Ваши настройки уведомлений сохранены')
  };

  return (
    <main className="container absolute -translate-x-[50%] left-[50%] py-8">
      <h1 className="text-3xl font-bold mb-2">Настройки</h1>
      <p className="text-lt-muted-foreground dark:text-dk-muted-foreground mb-8">
        Управляйте вашим профилем и настройками аккаунта
      </p>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList>
          <TabsTrigger value="profile">Профиль</TabsTrigger>
          <TabsTrigger value="notifications">Уведомления</TabsTrigger>
          <TabsTrigger value="security">Безопасность</TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="md:col-span-2">
              <form onSubmit={handleProfileSubmit}>
                <CardHeader>
                  <CardTitle>Профиль</CardTitle>
                  <CardDescription>
                    Обновите информацию о вашем профиле
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Имя</Label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="bio">О себе</Label>
                    <Textarea
                      id="bio"
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                    />
                  </div>
                </CardContent>
                <CardFooter className="mt-2">
                  <Button type="submit">Сохранить изменения</Button>
                </CardFooter>
              </form>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Аватар</CardTitle>
                <CardDescription>Изменить фото профиля</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center space-y-4">
                <Avatar className="h-24 w-24">
                  <AvatarFallback>{user?.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <Button variant="outline">Загрузить новое фото</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="notifications">
          <Card>
            <form onSubmit={handleNotificationsSubmit}>
              <CardHeader>
                <CardTitle>Уведомления</CardTitle>
                <CardDescription>
                  Настройте, какие уведомления вы хотите получать
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="font-medium">Email-уведомления</p>
                    <p className="text-sm text-lt-muted-foreground dark:text-dk-muted-foreground">
                      Получать уведомления о новых обновлениях проектов по email
                    </p>
                  </div>
                  <Switch
                    checked={emailNotifications}
                    onCheckedChange={setEmailNotifications}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="font-medium">Push-уведомления</p>
                    <p className="text-sm text-lt-muted-foreground dark:text-dk-muted-foreground">
                      Получать push-уведомления о новых обновлениях проектов
                    </p>
                  </div>
                  <Switch
                    checked={pushNotifications}
                    onCheckedChange={setPushNotifications}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="font-medium">Маркетинговые рассылки</p>
                    <p className="text-sm text-lt-muted-foreground dark:text-dk-muted-foreground">
                      Получать информацию о новых проектах и специальных
                      предложениях
                    </p>
                  </div>
                  <Switch
                    checked={marketingEmails}
                    onCheckedChange={setMarketingEmails}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit">Сохранить настройки</Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>

        <TabsContent value="security">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Изменить пароль</CardTitle>
                <CardDescription>
                  Обновите ваш пароль для повышения безопасности
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="current-password">Текущий пароль</Label>
                  <Input id="current-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new-password">Новый пароль</Label>
                  <Input id="new-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">
                    Подтвердите новый пароль
                  </Label>
                  <Input id="confirm-password" type="password" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Изменить пароль</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Двухфакторная аутентификация</CardTitle>
                <CardDescription>
                  Добавьте дополнительный уровень защиты для вашего аккаунта
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="font-medium">Двухфакторная аутентификация</p>
                    <p className="text-sm text-lt-muted-foreground dark:text-dk-muted-foreground">
                      Защитите ваш аккаунт с помощью дополнительного кода
                      подтверждения
                    </p>
                  </div>
                  <Switch />
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline">Настроить 2FA</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </main>
  );
}