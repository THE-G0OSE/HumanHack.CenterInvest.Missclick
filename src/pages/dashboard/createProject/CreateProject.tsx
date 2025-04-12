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
import { Separator } from "@/components/ui/separator";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";

export function CreateProject() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [targetAmount, setTargetAmount] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would dispatch an action to create a project
    console.log({ title, description, category, targetAmount, endDate });
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
          <TabsTrigger value="team">Команда</TabsTrigger>
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

                <div className="space-y-2">
                  <Label htmlFor="tags">Теги</Label>
                  <Input
                    id="tags"
                    placeholder="Например: лес, экология, сибирь"
                  />
                  <p className="text-xs text-lt-muted-foreground dark:text-dk-muted-foreground">
                    Разделяйте теги запятыми
                  </p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Сохранить черновик</Button>
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

              <Separator />

              <div>
                <h3 className="text-lg font-medium mb-4">Бюджет проекта</h3>
                <p className="text-sm text-lt-muted-foreground dark:text-dk-muted-foreground mb-4">
                  Распишите, на что будут потрачены собранные средства. Это
                  повысит доверие к вашему проекту.
                </p>

                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-2">
                      <Input placeholder="Статья расходов" />
                    </div>
                    <div>
                      <Input type="number" min="0" placeholder="Сумма (₽)" />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-2">
                      <Input placeholder="Статья расходов" />
                    </div>
                    <div>
                      <Input type="number" min="0" placeholder="Сумма (₽)" />
                    </div>
                  </div>

                  <Button variant="outline" className="w-full">
                    Добавить статью расходов
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Сохранить черновик</Button>
              <Button>Продолжить</Button>
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

              <div className="space-y-2">
                <Label>Галерея проекта</Label>
                <div className="border-2 border-dashed rounded-lg p-12 text-center">
                  <p className="text-lt-muted-foreground dark:text-dk-muted-foreground mb-2">
                    Перетащите изображения сюда или
                  </p>
                  <Button variant="outline">Выбрать файлы</Button>
                  <p className="text-xs text-lt-muted-foreground dark:text-dk-muted-foreground mt-2">
                    До 5 изображений. PNG, JPG или GIF. Максимальный размер 5MB
                    каждое.
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="video">Ссылка на видео (YouTube, Vimeo)</Label>
                <Input
                  id="video"
                  placeholder="https://youtube.com/watch?v=..."
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Сохранить черновик</Button>
              <Button>Продолжить</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="team">
          <Card>
            <CardHeader>
              <CardTitle>Команда проекта</CardTitle>
              <CardDescription>
                Расскажите о команде, которая будет реализовывать проект
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="team-description">О команде</Label>
                <Textarea
                  id="team-description"
                  placeholder="Расскажите о вашей команде, опыте и квалификации"
                  className="min-h-[150px]"
                />
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4">Участники команды</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Имя</Label>
                      <Input placeholder="Имя участника" />
                    </div>
                    <div className="space-y-2">
                      <Label>Должность</Label>
                      <Input placeholder="Должность в проекте" />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label>Описание</Label>
                      <Textarea placeholder="Опыт и роль в проекте" />
                    </div>
                  </div>

                  <Button variant="outline" className="w-full">
                    Добавить участника
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Сохранить черновик</Button>
              <Button>Отправить на модерацию</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  );
}
