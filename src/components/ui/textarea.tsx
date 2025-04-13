import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-lt-input placeholder:text-lt-muted-foreground focus-visible:border-lt-ring focus-visible:ring-lt-ring/50 aria-invalid:ring-lt-destructive/20 dark:aria-invalid:ring-dk-destructive/40 aria-invalid:border-lt-destructive dark:bg-dk-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
