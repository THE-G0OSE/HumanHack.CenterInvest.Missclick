import { ProjectFilters } from "@/features";
import { ProjectsList } from "@/widgets";
import { Separator } from "@/components/ui/separator";

export function Projects() {
  return (
    <main className="container absolute -translate-x-[50%] left-[50%] py-8">
      <h1 className="text-3xl font-bold mb-6">ESG-проекты</h1>
      <p className="text-muted-foreground mb-8 max-w-3xl">
        Выберите проекты, которые соответствуют вашим ценностям и интересам.
        Каждый проект имеет ESG-рейтинг, отражающий его влияние на экологию,
        социальную сферу и корпоративное управление.
      </p>

      <Separator className="my-6" />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <ProjectFilters />
        </div>
        <div className="md:col-span-3">
          <ProjectsList />
        </div>
      </div>
    </main>
  );
}
