import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import type { ESGRatingType } from "../model/types";

interface ESGRatingProps {
  rating: ESGRatingType;
  size?: "sm" | "md" | "lg";
}

export function ESGRating({ rating, size = "md" }: ESGRatingProps) {
  const { e, s, g, total } = rating;

  const getColorClass = (score: number) => {
    if (score >= 4) return "bg-green-500";
    if (score >= 3) return "bg-green-400";
    if (score >= 2) return "bg-yellow-400";
    if (score >= 1) return "bg-orange-400";
    return "bg-red-500";
  };

  const getSizeClass = () => {
    switch (size) {
      case "sm":
        return "text-xs";
      case "lg":
        return "text-base";
      default:
        return "text-sm";
    }
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <div className={cn("flex items-center gap-0.5", getSizeClass())}>
            <div className="flex flex-col items-center">
              <span
                className={cn(
                  "w-6 h-6 rounded-full flex items-center justify-center text-white font-medium",
                  getColorClass(e)
                )}
              >
                E
              </span>
              <span className="text-xs text-lt-muted-foreground dark:text-dk-muted-foreground">
                {e}
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span
                className={cn(
                  "w-6 h-6 rounded-full flex items-center justify-center text-white font-medium",
                  getColorClass(s)
                )}
              >
                S
              </span>
              <span className="text-xs text-lt-muted-foreground dark:text-dk-muted-foreground">
                {s}
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span
                className={cn(
                  "w-6 h-6 rounded-full flex items-center justify-center text-white font-medium",
                  getColorClass(g)
                )}
              >
                G
              </span>
              <span className="text-xs text-lt-muted-foreground dark:text-dk-muted-foreground">
                {g}
              </span>
            </div>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <div className="space-y-2 p-1">
            <p className="font-medium">ESG-рейтинг: {total}/15</p>
            <div className="grid grid-cols-3 gap-2 text-sm">
              <div>
                <p className="font-medium">Экология</p>
                <p className="text-lt-muted-foreground dark:text-dk-muted-foreground">
                  {e}/5
                </p>
              </div>
              <div>
                <p className="font-medium">Социальное</p>
                <p className="text-lt-muted-foreground dark:text-dk-muted-foreground">
                  {s}/5
                </p>
              </div>
              <div>
                <p className="font-medium">Управление</p>
                <p className="text-lt-muted-foreground dark:text-dk-muted-foreground">
                  {g}/5
                </p>
              </div>
            </div>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
