"use client";

import { useAppSelector } from "@/shared/lib/hooks";
import { selectProjectById } from "@/entities/project/model/selectors";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ProjectUpdatesProps {
  id: string;
}

export function ProjectUpdates({ id }: ProjectUpdatesProps) {
  const project = useAppSelector(selectProjectById(id));

  if (!project || !project.updates || project.updates.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-lt-muted-foreground dark:text-dk-muted-foreground">
          У этого проекта пока нет обновлений
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6 py-4">
      {project.updates.map((update) => (
        <Card key={update.id}>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl">{update.title}</CardTitle>
              <span className="text-sm text-lt-muted-foreground dark:text-dk-muted-foreground">
                {new Date(update.date).toLocaleDateString()}
              </span>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <Avatar className="h-6 w-6">
                <AvatarImage src={update.author.avatar} />
                <AvatarFallback>{update.author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <span className="text-sm text-lt-muted-foreground dark:text-dk-muted-foreground">
                {update.author.name}
              </span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="prose dark:prose-invert max-w-none">
              <div dangerouslySetInnerHTML={{ __html: update.content }} />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
