import type React from "react";

import { useState, useEffect } from "react";
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
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { useNavigate, useParams } from "react-router";

export function EditProject() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [targetAmount, setTargetAmount] = useState("");
  const [endDate, setEndDate] = useState("");
  const {id} = useParams()

  useEffect(() => {
    setTimeout(() => {
      setTitle("Эко-школа для детей");
      setDescription(
        "Образовательный проект для обучения детей экологическим принципам и устойчивому развитию."
      );
      setCategory("social");
      setTargetAmount("500000");
      setEndDate("2024-12-31");
      setLoading(false);
    }, 500);
  }, [id]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      id: id,
      title,
      description,
      category,
      targetAmount,
      endDate,
    });

    toast("Изменения успешно сохранены");
  };

  if (loading) {
    return (
      <main className="container absolute -translate-x-[50%] left-[50%] py-8">
        <h1 className="text-3xl font-bold mb-6">Загрузка проекта...</h1>
        <div className="space-y-4">
          <div className="h-8 w-1/3 bg-lt-muted dark:bg-dk-muted animate-pulse rounded"></div>
          <div className="h-32 w-full bg-lt-muted dark:bg-dk-muted animate-pulse rounded"></div>
        </div>
      </main>
    );
  }

  return (
    <main className="container absolute -translate-x-[50%] left-[50%] py-8">
      <div onClick={() => navigate("/dashboard/projects")}>
        <Button variant="ghost" className="mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Назад к проектам
        </Button>
      </div>

      <h1 className="text-3xl font-bold mb-2">Редактирование проекта</h1>
      <p className="text-lt-muted-foreground dark:text-dk-muted-foreground mb-8">
        Внесите изменения в ваш проект. После сохранения изменения будут
        отправлены на модерацию.
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
                  Редактируйте основную информацию о вашем проекте
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
                    defaultValue="Образовательный проект для обучения детей экологическим принципам и устойчивому развитию. Мы создаем интерактивные программы, которые помогают детям понять важность заботы об окружающей среде и формируют экологическое мышление с раннего возраста."
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
                <Button variant="outline">Отмена</Button>
                <Button type="submit">Сохранить изменения</Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>

        <TabsContent value="funding">
          <Card>
            <CardHeader>
              <CardTitle>Финансирование</CardTitle>
              <CardDescription>
                Редактируйте детали финансирования вашего проекта
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
                  onChange={(e) => setTargetAmount(e.target.value)}
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
              <Button variant="outline">Отмена</Button>
              <Button>Сохранить изменения</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="media">
          <Card>
            <CardHeader>
              <CardTitle>Медиа</CardTitle>
              <CardDescription>
                Редактируйте изображения и видео для вашего проекта
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Текущая обложка проекта</Label>
                <div className="relative h-[200px] w-full overflow-hidden rounded-lg">
                  <img
                    src="/placeholder.svg?height=400&width=800"
                    alt="Обложка проекта"
                    className="h-full w-full object-cover"
                  />
                </div>
                <Button variant="outline" size="sm">
                  Изменить обложку
                </Button>
              </div>

            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Отмена</Button>
              <Button>Сохранить изменения</Button>
            </CardFooter>
          </Card>
        </TabsContent>

      </Tabs>
    </main>
  );
}
