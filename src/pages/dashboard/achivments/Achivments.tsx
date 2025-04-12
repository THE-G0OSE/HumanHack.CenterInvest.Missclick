import { UserAchievements } from "@/widgets";
import { Progress } from "@/components/ui/progress";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function Achievements() {
  return (
    <main className="container absolute left-[50%] -translate-x-[50%] py-8">
      <h1 className="text-3xl font-bold mb-2">Мои достижения</h1>
      <p className="text-lt-muted-foreground dark:text-dk-muted-foreground mb-8">
        Ваш вклад в устойчивое развитие и полученные награды
      </p>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Прогресс достижений</CardTitle>
          <CardDescription>
            Ваш общий прогресс по категориям достижений
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium">
                  Экологические достижения
                </span>
                <span className="text-sm text-lt-muted-foreground dark:text-dk-muted-foreground">
                  2/8
                </span>
              </div>
              <Progress value={25} className="h-2" />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium">
                  Социальные достижения
                </span>
                <span className="text-sm text-lt-muted-foreground dark:text-dk-muted-foreground">
                  1/6
                </span>
              </div>
              <Progress value={16.7} className="h-2" />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium">
                  Управленческие достижения
                </span>
                <span className="text-sm text-lt-muted-foreground dark:text-dk-muted-foreground">
                  0/5
                </span>
              </div>
              <Progress value={0} className="h-2" />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium">Общий прогресс</span>
                <span className="text-sm text-lt-muted-foreground dark:text-dk-muted-foreground">
                  3/19
                </span>
              </div>
              <Progress value={15.8} className="h-2" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="all">
        <TabsList className="mb-6">
          <TabsTrigger value="all">Все</TabsTrigger>
          <TabsTrigger value="ecology">Экологические</TabsTrigger>
          <TabsTrigger value="social">Социальные</TabsTrigger>
          <TabsTrigger value="governance">Управленческие</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <UserAchievements />
        </TabsContent>
        <TabsContent value="ecology">
          <UserAchievements />
        </TabsContent>
        <TabsContent value="social">
          <UserAchievements />
        </TabsContent>
        <TabsContent value="governance">
          <div className="bg-lt-muted/50 dark:bg-dk-muted/50 rounded-lg p-8 text-center">
            <p className="text-lt-muted-foreground dark:text-dk-muted-foreground">
              У вас пока нет достижений в этой категории
            </p>
            <p className="text-lt-muted-foreground dark:text-dk-muted-foreground">
              Поддержите проекты с высоким G-рейтингом, чтобы получить награды
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </main>
  );
}
