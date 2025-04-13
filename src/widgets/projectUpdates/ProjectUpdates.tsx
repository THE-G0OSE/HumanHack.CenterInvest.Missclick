"use client";

import { useAppSelector } from "@/shared/lib/hooks";
import { selectProjectById } from "@/entities/project/model/selectors";

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
    </div>
  );
}
