import { useAppSelector } from "@/shared/lib/hooks";
import { selectProjectById, ESGRating } from "@/entities/project";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Leaf, Users, Building, Calendar, Clock } from "lucide-react";

interface ProjectDetailsProps {
  id: string;
}

export function ProjectDetails({ id }: ProjectDetailsProps) {
  const project = useAppSelector(selectProjectById(id));

  if (!project) {
    return <div>Проект не найден</div>;
  }

  const getCategoryIcon = () => {
    switch (project.category) {
      case "ecology":
        return <Leaf className="h-4 w-4" />;
      case "social":
        return <Users className="h-4 w-4" />;
      case "governance":
        return <Building className="h-4 w-4" />;
      default:
        return <Leaf className="h-4 w-4" />;
    }
  };

  const getCategoryLabel = () => {
    switch (project.category) {
      case "ecology":
        return "Экология";
      case "social":
        return "Социальные проекты";
      case "governance":
        return "Управление";
      default:
        return "Другое";
    }
  };

  return (
    <div className="space-y-6">
      <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-lg">
        <img
          src={project.image || "/placeholder.svg?height=800&width=1200"}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">{project.title}</h1>
          <div className="flex items-center gap-2 mt-2">
            <Badge className="flex items-center gap-1">
              {getCategoryIcon()}
              {getCategoryLabel()}
            </Badge>
            <div className="flex items-center gap-1 text-sm text-lt-muted-foreground dark:text-dk-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>Создан {project.created_at}</span>
            </div>
            <div className="flex items-center gap-1 text-sm text-lt-muted-foreground dark:text-dk-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>Осталось {project.days_left} дней</span>
            </div>
          </div>
        </div>

        <ESGRating rating={project.esg_rating} size="lg" />
      </div>

      <div className="flex items-center gap-2">
        <Avatar>
          <AvatarImage src={""} />
          <AvatarFallback>{"N"}</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-medium">Автор проекта</p>
          <p className="text-sm text-lt-muted-foreground dark:text-dk-muted-foreground">
            {"me"}
          </p>
        </div>
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg">{project.description}</p>
        <div
          dangerouslySetInnerHTML={{ __html: project.full_description || "" }}
        />
      </div>
    </div>
  );
}
