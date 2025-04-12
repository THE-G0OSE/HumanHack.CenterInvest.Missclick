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
          <TabsTrigger value="team">Команда</TabsTrigger>
          <TabsTrigger value="updates">Обновления</TabsTrigger>
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

                <div className="space-y-2">
                  <Label htmlFor="tags">Теги</Label>
                  <Input
                    id="tags"
                    placeholder="Например: образование, дети, экология"
                    defaultValue="образование, дети, экология, устойчивое развитие"
                  />
                  <p className="text-xs text-lt-muted-foreground dark:text-dk-muted-foreground">
                    Разделяйте теги запятыми
                  </p>
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
                      <Input
                        placeholder="Статья расходов"
                        defaultValue="Разработка учебных материалов"
                      />
                    </div>
                    <div>
                      <Input
                        type="number"
                        min="0"
                        placeholder="Сумма (₽)"
                        defaultValue="150000"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-2">
                      <Input
                        placeholder="Статья расходов"
                        defaultValue="Оборудование для занятий"
                      />
                    </div>
                    <div>
                      <Input
                        type="number"
                        min="0"
                        placeholder="Сумма (₽)"
                        defaultValue="200000"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-2">
                      <Input
                        placeholder="Статья расходов"
                        defaultValue="Аренда помещения"
                      />
                    </div>
                    <div>
                      <Input
                        type="number"
                        min="0"
                        placeholder="Сумма (₽)"
                        defaultValue="100000"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-2">
                      <Input
                        placeholder="Статья расходов"
                        defaultValue="Зарплата преподавателям"
                      />
                    </div>
                    <div>
                      <Input
                        type="number"
                        min="0"
                        placeholder="Сумма (₽)"
                        defaultValue="50000"
                      />
                    </div>
                  </div>

                  <Button variant="outline" className="w-full">
                    Добавить статью расходов
                  </Button>
                </div>
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

              <div className="space-y-2">
                <Label>Галерея проекта</Label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="relative h-[100px] overflow-hidden rounded-lg">
                    <img
                      src="/placeholder.svg?height=200&width=200"
                      alt="Изображение проекта"
                      className="h-full w-full object-cover"
                    />
                    <Button
                      variant="destructive"
                      size="icon"
                      className="absolute top-1 right-1 h-6 w-6"
                    >
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                  <div className="relative h-[100px] overflow-hidden rounded-lg">
                    <img
                      src="/placeholder.svg?height=200&width=200"
                      alt="Изображение проекта"
                      className="h-full w-full object-cover"
                    />
                    <Button
                      variant="destructive"
                      size="icon"
                      className="absolute top-1 right-1 h-6 w-6"
                    >
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                  <div className="relative h-[100px] overflow-hidden rounded-lg">
                    <img
                      src="/placeholder.svg?height=200&width=200"
                      alt="Изображение проекта"
                      className="h-full w-full object-cover"
                    />
                    <Button
                      variant="destructive"
                      size="icon"
                      className="absolute top-1 right-1 h-6 w-6"
                    >
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                  <div className="border-2 border-dashed rounded-lg flex items-center justify-center h-[100px]">
                    <Button variant="ghost">Добавить</Button>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="video">Ссылка на видео (YouTube, Vimeo)</Label>
                <Input
                  id="video"
                  placeholder="https://youtube.com/watch?v=..."
                  defaultValue="https://youtube.com/watch?v=example"
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Отмена</Button>
              <Button>Сохранить изменения</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="team">
          <Card>
            <CardHeader>
              <CardTitle>Команда проекта</CardTitle>
              <CardDescription>
                Редактируйте информацию о команде проекта
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="team-description">О команде</Label>
                <Textarea
                  id="team-description"
                  placeholder="Расскажите о вашей команде, опыте и квалификации"
                  className="min-h-[150px]"
                  defaultValue="Наша команда состоит из опытных педагогов и экологов, которые более 5 лет занимаются экологическим образованием. Мы разработали уникальную методику, которая делает обучение интересным и эффективным."
                />
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4">Участники команды</h3>
                <div className="space-y-4">
                  <div className="border p-4 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Имя</Label>
                        <Input
                          placeholder="Имя участника"
                          defaultValue="Анна Иванова"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Должность</Label>
                        <Input
                          placeholder="Должность в проекте"
                          defaultValue="Руководитель проекта"
                        />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <Label>Описание</Label>
                        <Textarea
                          placeholder="Опыт и роль в проекте"
                          defaultValue="Педагог с 10-летним стажем, автор методических пособий по экологическому образованию. Отвечает за разработку образовательной программы."
                        />
                      </div>
                    </div>
                    <div className="flex justify-end mt-4">
                      <Button variant="destructive" size="sm">
                        Удалить
                      </Button>
                    </div>
                  </div>

                  <div className="border p-4 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Имя</Label>
                        <Input
                          placeholder="Имя участника"
                          defaultValue="Сергей Петров"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Должность</Label>
                        <Input
                          placeholder="Должность в проекте"
                          defaultValue="Эколог-консультант"
                        />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <Label>Описание</Label>
                        <Textarea
                          placeholder="Опыт и роль в проекте"
                          defaultValue="Кандидат биологических наук, специалист по экосистемам. Отвечает за научную достоверность материалов."
                        />
                      </div>
                    </div>
                    <div className="flex justify-end mt-4">
                      <Button variant="destructive" size="sm">
                        Удалить
                      </Button>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full">
                    Добавить участника
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Отмена</Button>
              <Button>Сохранить изменения</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="updates">
          <Card>
            <CardHeader>
              <CardTitle>Обновления проекта</CardTitle>
              <CardDescription>
                Добавляйте обновления о ходе реализации проекта
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="border p-4 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-medium">
                        Начало работы над проектом
                      </h3>
                      <p className="text-sm text-lt-muted-foreground dark:text-dk-muted-foreground">
                        Опубликовано: 15.03.2024
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Редактировать
                      </Button>
                      <Button variant="destructive" size="sm">
                        Удалить
                      </Button>
                    </div>
                  </div>
                  <p className="text-sm">
                    Мы рады сообщить, что начали работу над проектом! Уже
                    сформирована команда преподавателей и разрабатываются первые
                    учебные материалы.
                  </p>
                </div>

                <div className="border p-4 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-medium">Первые результаты</h3>
                      <p className="text-sm text-lt-muted-foreground dark:text-dk-muted-foreground">
                        Опубликовано: 02.04.2024
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Редактировать
                      </Button>
                      <Button variant="destructive" size="sm">
                        Удалить
                      </Button>
                    </div>
                  </div>
                  <p className="text-sm">
                    Завершена разработка первого модуля образовательной
                    программы. Проведено тестовое занятие с группой детей,
                    получены положительные отзывы.
                  </p>
                </div>
              </div>

              <div className="border p-4 rounded-lg">
                <h3 className="font-medium mb-4">Добавить новое обновление</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="update-title">Заголовок</Label>
                    <Input
                      id="update-title"
                      placeholder="Например: Важное обновление проекта"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="update-content">Содержание</Label>
                    <Textarea
                      id="update-content"
                      placeholder="Расскажите о прогрессе в реализации проекта"
                      className="min-h-[150px]"
                    />
                  </div>
                  <Button>Опубликовать обновление</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  );
}
