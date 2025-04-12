import { UserProjects } from "@/widgets";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { useNavigate } from "react-router";

export function MyProjects() {
  const navigate = useNavigate();
  return (
    <main className="container absolute -translate-x-[50%] left-[50%] py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Мои проекты</h1>
          <p className="text-lt-muted-foreground dark:text-dk-muted-foreground">
            Проекты, которые вы поддержали и создали
          </p>
        </div>
        <div onClick={() => navigate("/dashboard/projects/create")}>
          <Button className="mt-4 md:mt-0">
            <PlusCircle className="mr-2 h-4 w-4" />
            Создать проект
          </Button>
        </div>
      </div>

      <div className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Поддержанные проекты</h2>
          <UserProjects />
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Созданные проекты</h2>
          <div className="bg-lt-muted/50 dark:bg-dk-muted rounded-lg p-8 text-center">
            <p className="text-lt-muted-foreground dark:text-dk-muted-foreground mb-4">
              У вас пока нет созданных проектов
            </p>
            <div onClick={() => navigate("/dashboard/projects/create")}>
              <Button>Создать первый проект</Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
