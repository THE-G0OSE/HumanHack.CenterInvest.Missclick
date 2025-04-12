import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Leaf, Users, Building, Award, Globe } from "lucide-react";

export function About() {
  return (
    <main className="container absolute left-[50%] -translate-x-[50%] py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">О платформе</h1>
        <p className="text-xl text-lt-muted-foreground dark:text-dk-muted-foreground mb-12">
          GreenFinance — это краудфандинговая ESG-платформа, где даже небольшие
          взносы объединяются для реализации масштабных экологических и
          социальных инициатив.
        </p>

        <Separator className="my-12" />

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Наша миссия</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-green-100 dark:bg-green-900 p-4 rounded-full mb-4">
                    <Leaf className="h-8 w-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Экология</h3>
                  <p className="text-lt-muted-foreground dark:text-dk-muted-foreground">
                    Поддержка проектов, направленных на сохранение окружающей
                    среды, борьбу с изменением климата и защиту биоразнообразия.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-full mb-4">
                    <Users className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    Социальная ответственность
                  </h3>
                  <p className="text-lt-muted-foreground dark:text-lt-muted-foreground">
                    Развитие проектов, улучшающих качество жизни людей,
                    поддерживающих образование, здравоохранение и социальную
                    инклюзивность.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-purple-100 dark:bg-purple-900 p-4 rounded-full mb-4">
                    <Building className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Управление</h3>
                  <p className="text-lt-muted-foreground dark:text-dk-muted-foreground">
                    Продвижение прозрачности, этичности и ответственного
                    управления в бизнесе и некоммерческих организациях.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Как работает GreenFinance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Для инвесторов</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="bg-green-100 dark:bg-green-900 h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    1
                  </span>
                  <div>
                    <p className="font-medium">Выберите проект</p>
                    <p className="text-lt-muted-foreground dark:text-dk-muted-foreground">
                      Просмотрите каталог проектов с ESG-рейтингами и выберите
                      тот, который соответствует вашим ценностям.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="bg-green-100 dark:bg-green-900 h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    2
                  </span>
                  <div>
                    <p className="font-medium">Сделайте вклад</p>
                    <p className="text-lt-muted-foreground dark:text-dk-muted-foreground">
                      Инвестируйте любую сумму от 100 рублей. Каждый вклад имеет
                      значение!
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="bg-green-100 dark:bg-green-900 h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    3
                  </span>
                  <div>
                    <p className="font-medium">Отслеживайте прогресс</p>
                    <p className="text-lt-muted-foreground dark:text-dk-muted-foreground">
                      Следите за развитием проекта и своим вкладом в устойчивое
                      развитие через личный кабинет.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="bg-green-100 dark:bg-green-900 h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    4
                  </span>
                  <div>
                    <p className="font-medium">Получайте награды</p>
                    <p className="text-lt-muted-foreground dark:text-dk-muted-foreground">
                      Зарабатывайте достижения и бейджи за ваш вклад в
                      устойчивое развитие.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">
                Для авторов проектов
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="bg-green-100 dark:bg-green-900 h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    1
                  </span>
                  <div>
                    <p className="font-medium">Создайте проект</p>
                    <p className="text-lt-muted-foreground dark:text-dk-muted-foreground">
                      Опишите ваш ESG-проект, установите цель финансирования и
                      сроки реализации.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="bg-green-100 dark:bg-green-900 h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    2
                  </span>
                  <div>
                    <p className="font-medium">Пройдите ESG-оценку</p>
                    <p className="text-lt-muted-foreground dark:text-dk-muted-foreground">
                      Ваш проект будет оценен по экологическим, социальным и
                      управленческим критериям.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="bg-green-100 dark:bg-green-900 h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    3
                  </span>
                  <div>
                    <p className="font-medium">Привлекайте инвесторов</p>
                    <p className="text-lt-muted-foreground dark:text-dk-muted-foreground">
                      После одобрения ваш проект появится на платформе, где его
                      смогут поддержать тысячи людей.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="bg-green-100 dark:bg-green-900 h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    4
                  </span>
                  <div>
                    <p className="font-medium">Реализуйте проект</p>
                    <p className="text-lt-muted-foreground dark:text-dk-muted-foreground">
                      Получите финансирование и реализуйте ваш проект, регулярно
                      публикуя обновления о прогрессе.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Наши ценности</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 dark:bg-amber-900 p-3 rounded-full">
                    <Award className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Прозрачность</h3>
                    <p className="text-lt-muted-foreground dark:text-dk-muted-foreground">
                      Мы обеспечиваем полную прозрачность всех проектов и
                      транзакций на платформе. Вы всегда знаете, куда идут ваши
                      деньги и какое влияние они оказывают.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-100 dark:bg-emerald-900 p-3 rounded-full">
                    <Globe className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Устойчивое развитие
                    </h3>
                    <p className="text-lt-muted-foreground dark:text-dk-muted-foreground">
                      Мы верим в баланс между экономическим ростом, социальным
                      благополучием и заботой об окружающей среде. Все проекты
                      на нашей платформе способствуют достижению Целей
                      устойчивого развития ООН.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                    <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Инклюзивность
                    </h3>
                    <p className="text-lt-muted-foreground dark:text-dk-muted-foreground">
                      Мы создаем платформу, доступную для всех. Низкий порог
                      входа позволяет каждому внести свой вклад в устойчивое
                      развитие, независимо от финансовых возможностей.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-full">
                    <Leaf className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Экологическая ответственность
                    </h3>
                    <p className="text-lt-muted-foreground dark:text-dk-muted-foreground">
                      Мы стремимся минимизировать наш собственный экологический
                      след и поощряем проекты, которые вносят позитивный вклад в
                      сохранение планеты для будущих поколений.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8">Присоединяйтесь к нам</h2>
          <p className="text-lg mb-4">
            GreenFinance — это не просто платформа, это сообщество людей,
            которые верят в силу коллективных действий для создания лучшего
            будущего.
          </p>
          <p className="text-lg mb-4">
            Независимо от того, являетесь ли вы инвестором, ищущим способы
            внести свой вклад в устойчивое развитие, или автором проекта,
            стремящимся реализовать свои идеи, — мы приглашаем вас стать частью
            нашего сообщества.
          </p>
          <p className="text-lg">
            Вместе мы можем создать более устойчивый, справедливый и
            процветающий мир для всех.
          </p>
        </section>
      </div>
    </main>
  );
}
