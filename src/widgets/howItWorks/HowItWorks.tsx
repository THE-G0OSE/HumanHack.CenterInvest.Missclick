import type React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Search, CreditCard, Award, BarChart } from "lucide-react";

export function HowItWorks() {
  return (
    <section className="py-16 bg-lt-bg dark:bg-dk-bg flex justify-center">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-4">
          Как это работает
        </h2>
        <p className="text-lt-muted-foreground dark:text-dk-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Присоединяйтесь к GreenFinance и начните инвестировать в устойчивое
          будущее всего за несколько шагов
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StepCard
            icon={<Search className="h-10 w-10 text-green-500" />}
            title="Найдите проект"
            description="Выберите ESG-проект, который соответствует вашим ценностям и интересам"
            step={1}
          />
          <StepCard
            icon={<CreditCard className="h-10 w-10 text-green-500" />}
            title="Сделайте вклад"
            description="Инвестируйте любую сумму от 100 рублей в выбранный проект"
            step={2}
          />
          <StepCard
            icon={<BarChart className="h-10 w-10 text-green-500" />}
            title="Отслеживайте прогресс"
            description="Наблюдайте за развитием проекта и вашим экологическим следом"
            step={3}
          />
          <StepCard
            icon={<Award className="h-10 w-10 text-green-500" />}
            title="Получайте награды"
            description="Зарабатывайте достижения и делитесь своим вкладом в устойчивое развитие"
            step={4}
          />
        </div>
      </div>
    </section>
  );
}

interface StepCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  step: number;
}

function StepCard({ icon, title, description, step }: StepCardProps) {
  return (
    <Card className="relative">
      <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center text-green-700 dark:text-green-300 font-medium">
        {step}
      </div>
      <CardContent className="pt-6 pb-4">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
