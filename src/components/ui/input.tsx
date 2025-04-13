import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-lt-foreground placeholder:text-lt-muted-foreground selection:bg-lt-primary selection:text-lt-primary-foreground dark:bg-lt-input/30 border-lt-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-lt-ring focus-visible:ring-lt-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-lt-destructive/20 dark:aria-invalid:ring-dk-destructive/40 aria-invalid:border-lt-destructive",
        className
      )}
      {...props}
    />
  );
}

export { Input };
