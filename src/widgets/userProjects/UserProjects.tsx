import { useAppSelector } from "@/shared/lib/hooks";
import { selectUserBackedProjects } from "@/entities/user/model/selectors";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ESGRating } from "@/entities/project";
import { useNavigate } from "react-router";

export function UserProjects() {
  const navigate = useNavigate();
  const backedProjects = useAppSelector(selectUserBackedProjects);

  if (backedProjects.length === 0) {
    return (
      <Card>
        <CardContent className="flex flex-col items-center justify-center py-12">
          <p className="text-lt-muted-foreground dark:text-dk-muted-foreground mb-4">
            Вы еще не поддержали ни один проект
          </p>
          <div onClick={() => navigate("/projects")}>
            <Button>Найти проекты</Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {backedProjects.map((project) => {
        const progress = Math.min(
          Math.round((project.current_amount / project.target_amount) * 100),
          100
        );

        return (
          <Card key={project.id}>
            <CardHeader className="pb-2">
              <div className="flex justify-between">
                <div>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>
                    {project.days_left > 0
                      ? `Осталось ${project.days_left} дней`
                      : "Проект завершен"}
                  </CardDescription>
                </div>
                <ESGRating rating={project.esg_rating} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium">
                      {project.current_amount.toLocaleString()} ₽
                    </span>
                    <span className="text-lt-muted-foreground dark:text-dk-muted-foreground">
                      из {project.target_amount.toLocaleString()} ₽
                    </span>
                  </div>
                  <Progress value={progress} className="h-2" />
                </div>

                <div className="flex justify-between items-center">
                  <Badge variant="outline">{project.backers} спонсоров</Badge>
                  <div onClick={() => navigate("/projects/" + project.id)}>
                    <Button variant="outline" size="sm">
                      Перейти к проекту
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
