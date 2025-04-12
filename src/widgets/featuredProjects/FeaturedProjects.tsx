import { ProjectCard } from "@/entities/project/";
import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/shared/lib/hooks";
import { selectFeaturedProjects } from "@/entities/project/model/selectors";
import { useNavigate } from "react-router";

export function FeaturedProjects() {
  const navigate = useNavigate();
  const featuredProjects = useAppSelector(selectFeaturedProjects);

  return (
    <section className="py-16 bg-lt-muted/50 dark:bg-dk-muted/50 flex items-center justify-center">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-2">Популярные проекты</h2>
            <p className="text-lt-muted-foreground dark:text-dk-muted-foreground">
              Проекты, которые привлекают наибольшее внимание
            </p>
          </div>
          <button onClick={() => navigate("/projects")}>
            <Button variant="outline" className="mt-4 md:mt-0">
              Смотреть все проекты
            </Button>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
