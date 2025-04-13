"use client";

import { UserProjects } from "@/widgets";
import { Button } from "@/components/ui/button";
import { PlusCircle, Edit, Trash2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import {
  useDeleteProjectMutation,
  useGetProjectsQuery,
} from "@/entities/project/model/api/projectsApi";
import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks";
import { selectAllProjects, setProjects } from "@/entities/project";
import { selectUser } from "@/entities/user";

export function MyProjects() {
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [projectToDelete, setProjectToDelete] = useState<string | null>(null);
  const [deleteProject] = useDeleteProjectMutation();
  const navigate = useNavigate();

  const userId = useAppSelector(selectUser)!.id;
  const dispatch = useAppDispatch();
  const { data: projects, refetch } = useGetProjectsQuery("");

  useEffect(() => {
    if (projects) dispatch(setProjects(projects.projects));
  }, [projects]);

  const createdProjects = useAppSelector(selectAllProjects).filter(
    (project) => project.creator_id === userId
  );

  const handleDeleteProject = (id: string) => {
    deleteProject(id);
    refetch();
    setDeleteDialogOpen(false);
    setProjectToDelete(null);
  };

  const openDeleteDialog = (id: string) => {
    setProjectToDelete(id);
    setDeleteDialogOpen(true);
  };

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

          {createdProjects.length > 0 ? (
            <div className="space-y-4">
              {createdProjects.map((project) => (
                <Card key={project.id}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{project.title}</CardTitle>
                        <CardDescription>
                          Активен • Осталось ${project.days_left} дней
                        </CardDescription>
                      </div>
                      <div className="flex gap-2">
                        <div
                          onClick={() =>
                            navigate(`/dashboard/projects/edit/${project.id}`)
                          }
                        >
                          <Button variant="outline" size="icon">
                            <Edit className="h-4 w-4" />
                            <span className="sr-only">Редактировать</span>
                          </Button>
                        </div>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => openDeleteDialog(project.id)}
                        >
                          <Trash2 className="h-4 w-4 text-lt-destructive dark:text-dk-destructive" />
                          <span className="sr-only">Удалить</span>
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">
                          {project.current_amount.toLocaleString()} ₽
                        </span>
                        <span className="text-lt-muted-foreground dark:text-dk-muted-foreground">
                          из {project.target_amount.toLocaleString()} ₽
                        </span>
                      </div>
                      <div className="h-2 w-full bg-lt-muted dark:bg-dk-muted overflow-hidden rounded-full">
                        <div
                          className="h-full bg-lt-primary dark:bg-dk-primary"
                          style={{
                            width: `${
                              (project.current_amount / project.target_amount) *
                              100
                            }%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <>
                      <Button variant="outline">Обновления</Button>
                      <div onClick={() => navigate(`/projects/${project.id}`)}>
                        <Button>Просмотр проекта</Button>
                      </div>
                    </>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="bg-muted/50 rounded-lg p-8 text-center">
              <p className="text-lt-muted-foreground dark:text-dk-muted-foreground mb-4">
                У вас пока нет созданных проектов
              </p>
              <div onClick={() => navigate("/dashboard/projects/create")}>
                <Button>Создать первый проект</Button>
              </div>
            </div>
          )}
        </div>
      </div>

      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Удаление проекта</DialogTitle>
            <DialogDescription>
              Вы уверены, что хотите удалить этот проект? Это действие нельзя
              отменить.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setDeleteDialogOpen(false)}
            >
              Отмена
            </Button>
            <Button
              variant="destructive"
              onClick={() =>
                projectToDelete && handleDeleteProject(projectToDelete)
              }
            >
              Удалить
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </main>
  );
}
