"use client";

import { ProjectCard } from "@/entities/project/";
import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/shared/lib/hooks";
import { selectLatestProjects } from "@/entities/project/model/selectors";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { useNavigate } from "react-router";

export function ProjectsShowcase() {
  const navigate = useNavigate();

  const latestProjects = useAppSelector(selectLatestProjects);
  const [category, setCategory] = useState("all");

  const filteredProjects =
    category === "all"
      ? latestProjects
      : latestProjects.filter((project) => project.category === category);

  return (
    <section className="py-16 bg-lt-bg dark:bg-dk-bg flex justify-center">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h2 className="text-3xl font-bold mb-2">Последние проекты</h2>
            <p className="text-lt-muted-foreground dark:text-dk-muted-foreground">
              Новые проекты, которые ищут финансирование
            </p>
          </div>
          <button onClick={() => navigate("/projects")}>
            <Button variant="outline" className="mt-4 md:mt-0">
              Смотреть все проекты
            </Button>
          </button>
        </div>

        <Tabs defaultValue="all" className="mb-8" onValueChange={setCategory}>
          <TabsList>
            <TabsTrigger value="all">Все</TabsTrigger>
            <TabsTrigger value="ecology">Экология</TabsTrigger>
            <TabsTrigger value="social">Социальные</TabsTrigger>
            <TabsTrigger value="governance">Управление</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
