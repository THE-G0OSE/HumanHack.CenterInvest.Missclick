import type React from "react";

import { useAppSelector } from "@/shared/lib/hooks";
import { selectProjectById } from "@/entities/project/model/selectors";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
    // In a real app, this would dispatch an action to add the comment
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
          {project.comments.map((comment) => (
            <div key={comment.id} className="flex gap-4">
              <Avatar>
                <AvatarImage src={comment.author.avatar} />
                <AvatarFallback>{comment.author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">{comment.author.name}</span>
                  <span className="text-xs text-lt-muted-foreground dark:text-dk-muted-foreground">
                    {new Date(comment.date).toLocaleDateString()}
                  </span>
                </div>
                <p className="mt-1">{comment.content}</p>
              </div>
            </div>
          ))}
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
