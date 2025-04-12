import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

export function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="relative py-20 md:py-32 overflow-hidden flex justify-center">
      <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-950/20 dark:to-teal-950/20" />
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=200')] bg-repeat opacity-5" />

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Инвестируйте в <span className="text-green-600">устойчивое</span>{" "}
            будущее
          </h1>
          <p className="text-xl text-lt-muted-foreground dark:text-dk-muted-foreground mb-8 md:mb-12">
            GreenFinance объединяет людей для финансирования экологических и
            социальных проектов. Начните с малого и создавайте большие перемены
            вместе с нами.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => navigate("/projects")}>
              <Button size="lg" className="w-full sm:w-auto">
                Найти проекты
              </Button>
            </button>
            <button onClick={() => navigate("/about")}>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Узнать больше
              </Button>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
