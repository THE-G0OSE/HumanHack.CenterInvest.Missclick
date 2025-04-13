import type React from "react";

import { useAppSelector } from "@/shared/lib/hooks";
import { selectProjectById } from "@/entities/project/model/selectors";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

interface ProjectCommentsProps {
  id: string;
}

export function ProjectComments({ id }: ProjectCommentsProps) {
  const project = useAppSelector(selectProjectById(id));
  const [comment, setComment] = useState("");

  if (!project) {
    return null;
  }

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    setComment("");
  };

  return (
    <div className="space-y-6 py-4">
      <form onSubmit={handleSubmitComment} className="space-y-4">
        <Textarea
          placeholder="Оставьте комментарий..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <Button type="submit" disabled={!comment.trim()}>
          Отправить
        </Button>
      </form>

      {project.comments && project.comments.length > 0 ? (
        <div className="space-y-6">
              <div>
                  <span className="text-xs text-lt-muted-foreground dark:text-dk-muted-foreground">
                  </span>
            </div>
        </div>
      ) : (
        <div className="text-center py-8">
          <p className="text-lt-muted-foreground dark:text-dk-muted-foreground">
            У этого проекта пока нет комментариев
          </p>
        </div>
      )}
    </div>
  );
}
