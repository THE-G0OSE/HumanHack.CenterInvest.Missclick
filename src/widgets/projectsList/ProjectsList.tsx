import { ProjectCard } from "@/entities/project";
import { useAppSelector } from "@/shared/lib/hooks";
import { selectAllProjects } from "@/entities/project/model/selectors";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

export function ProjectsList() {
  const projects = useAppSelector(selectAllProjects);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("newest");

  const filteredProjects = searchQuery
    ? projects.filter(
        (project) =>
          project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          project.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : projects;

  const sortedProjects = [...filteredProjects].sort((a, b) => {
    switch (sortBy) {
      case "newest":
        return (
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        );
      case "endingSoon":
        return a.days_left - b.days_left;
      case "mostFunded":
        return b.current_amount - a.current_amount;
      case "highestRated":
        return b.esg_rating.total - a.esg_rating.total;
      default:
        return 0;
    }
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4">
        <Input
          placeholder="Поиск проектов..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-grow"
        />
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-full sm:w-[200px]">
            <SelectValue placeholder="Сортировать по" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">Новые</SelectItem>
            <SelectItem value="endingSoon">Скоро завершатся</SelectItem>
            <SelectItem value="mostFunded">Больше всего собрано</SelectItem>
            <SelectItem value="highestRated">Высокий ESG-рейтинг</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {sortedProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sortedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium">Проекты не найдены</h3>
          <p className="text-lt-muted-foreground dark:text-dk-muted-foreground">
            Попробуйте изменить параметры поиска или фильтры
          </p>
        </div>
      )}
    </div>
  );
}
