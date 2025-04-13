import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";
import { usePostProjectMutation } from "@/entities/project/model/api/projectsApi";

export function CreateProject() {
  const navigate = useNavigate();
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [category, setCategory] = useState<"ecology" | "social" | "governance">(
    "ecology"
  );
  const [targetAmount, setTargetAmount] = useState<number>(0);
  const [endDate, setEndDate] = useState("");
  const [fullDescription, setFullDescription] = useState<string>("");

  const [postProject] = usePostProjectMutation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    postProject({
      body: {
        title,
        description,
        category,
        target_amount: targetAmount,
        end_date: endDate,
        full_description: fullDescription,
      },
      token: window.localStorage.getItem("token")!,
    });
    navigate("/projects");
  };

  return (
    <main className="container absolute -translate-x-[50%] left-[50%] py-8">
      <div onClick={() => navigate("/dashboard/projects")}>
        <Button variant="ghost" className="mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Назад к проектам
        </Button>
      </div>

      <h1 className="text-3xl font-bold mb-2">Создание проекта</h1>
      <p className="text-lt-muted-foreground dark:text-dk-muted-foreground mb-8">
        Заполните информацию о вашем проекте. После модерации и ESG-оценки он
        будет опубликован на платформе.
      </p>

      <Tabs defaultValue="details" className="space-y-6">
        <TabsList>
          <TabsTrigger value="details">Основная информация</TabsTrigger>
          <TabsTrigger value="funding">Финансирование</TabsTrigger>
          <TabsTrigger value="media">Медиа</TabsTrigger>
        </TabsList>

        <TabsContent value="details">
          <Card>
            <form onSubmit={handleSubmit}>
              <CardHeader>
                <CardTitle>Основная информация</CardTitle>
                <CardDescription>
                  Расскажите о вашем проекте и его целях
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Название проекта</Label>
                  <Input
                    id="title"
                    placeholder="Например: Восстановление лесов в Сибири"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Краткое описание</Label>
                  <Textarea
                    id="description"
                    placeholder="Опишите ваш проект в нескольких предложениях"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                  <p className="text-xs text-lt-muted-foreground dark:text-dk-muted-foreground">
                    Это описание будет отображаться в карточке проекта на
                    главной странице
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="full-description">Полное описание</Label>
                  <Textarea
                    id="full-description"
                    placeholder="Подробно расскажите о вашем проекте, его целях и ожидаемых результатах"
                    className="min-h-[200px]"
                    value={fullDescription}
                    onChange={(e) => setFullDescription(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Категория</Label>
                  <Select value={category} onValueChange={setCategory} required>
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Выберите категорию" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ecology">Экология</SelectItem>
                      <SelectItem value="social">Социальные проекты</SelectItem>
                      <SelectItem value="governance">Управление</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button type="submit">Продолжить</Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>

        <TabsContent value="funding">
          <Card>
            <CardHeader>
              <CardTitle>Финансирование</CardTitle>
              <CardDescription>
                Укажите детали финансирования вашего проекта
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="target-amount">Целевая сумма (₽)</Label>
                <Input
                  id="target-amount"
                  type="number"
                  min="10000"
                  placeholder="Например: 500000"
                  value={targetAmount}
                  onChange={(e) => setTargetAmount(Number(e.target.value))}
                />
                <p className="text-xs text-lt-muted-foreground dark:text-dk-muted-foreground">
                  Минимальная сумма: 10 000 ₽
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="end-date">Дата окончания сбора</Label>
                <Input
                  id="end-date"
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button type="submit">Продолжить</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="media">
          <Card>
            <CardHeader>
              <CardTitle>Медиа</CardTitle>
              <CardDescription>
                Добавьте изображения и видео для вашего проекта
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Обложка проекта</Label>
                <div className="border-2 border-dashed rounded-lg p-12 text-center">
                  <p className="text-lt-muted-foreground dark:text-dk-muted-foreground mb-2">
                    Перетащите изображение сюда или
                  </p>
                  <Button variant="outline">Выбрать файл</Button>
                  <p className="text-xs text-lt-muted-foreground dark:text-dk-muted-foreground mt-2">
                    PNG, JPG или GIF. Максимальный размер 5MB.
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button type="submit">Продолжить</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  );
}
