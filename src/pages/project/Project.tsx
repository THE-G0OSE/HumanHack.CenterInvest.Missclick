import {
  ProjectDetails,
  ProjectComments,
  ProjectFundingPanel,
  ProjectUpdates,
} from "@/widgets";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router";
import { useGetProjectQuery } from "@/entities/project/model/api/projectsApi";

export function Project() {
  const { id } = useParams();
  const { data } = useGetProjectQuery(Number(id));
  const navigate = useNavigate();
  return (
    <main className="container absolute -translate-x-[50%] left-[50%] py-8">
      <div onClick={() => navigate("/projects")}>
        <Button variant="ghost" className="mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Назад к проектам
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <ProjectDetails id={id!} />

          <Separator className="my-8" />

          <Tabs defaultValue="updates" className="w-full">
            <TabsList>
              <TabsTrigger value="updates">Обновления</TabsTrigger>
              <TabsTrigger value="comments">Комментарии</TabsTrigger>
            </TabsList>
            <TabsContent value="updates">
              <ProjectUpdates id={id!} />
            </TabsContent>
            <TabsContent value="comments">
              <ProjectComments id={id!} />
            </TabsContent>
          </Tabs>
        </div>

        <div className="lg:col-span-1">
          <ProjectFundingPanel id={id!} />
        </div>
      </div>
    </main>
  );
}
