import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Leaf, Users, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ESGRating } from "./ESGRating";
import type { Project } from "../model/types";
import { useNavigate } from "react-router";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const navigate = useNavigate();

  const {
    id,
    title,
    description,
    category,
    image,
    current_amount,
    target_amount,
    days_left,
    backers,
    esg_rating,
  } = project;

  const progress = Math.min(
    Math.round(target_amount > 0 ? (current_amount / target_amount) * 100 : 0),
    100
  );

  const getCategoryIcon = () => {
    switch (category) {
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
    switch (category) {
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
    <Card className="overflow-hidden flex flex-col h-full">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image || "/placeholder.svg?height=400&width=600"}
          alt={title}
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
        <Badge className="absolute top-3 left-3 flex items-center gap-1">
          {getCategoryIcon()}
          {getCategoryLabel()}
        </Badge>
      </div>

      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-semibold line-clamp-2">{title}</h3>
          <ESGRating rating={esg_rating} />
        </div>
      </CardHeader>

      <CardContent className="flex-grow">
        <p className="text-lt-muted-foreground dark:text-dk-muted-foreground line-clamp-3 mb-4">
          {description}
        </p>

        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="font-medium">
                {current_amount.toLocaleString()} ₽
              </span>
              <span className="text-lt-muted-foreground dark:text-dk-muted-foreground">
                из {target_amount.toLocaleString()} ₽
              </span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <div className="flex justify-between text-sm">
            <span className="text-lt-muted-foreground dark:text-dk-muted-foreground">
              {backers} спонсоров
            </span>
            <span className="text-lt-muted-foreground dark:text-dk-muted-foreground">
              {days_left} дней осталось
            </span>
          </div>
        </div>
      </CardContent>

      <CardFooter>
        <button onClick={() => navigate("/projects/" + id)} className="w-full">
          <Button className="w-full">Поддержать проект</Button>
        </button>
      </CardFooter>
    </Card>
  );
}
