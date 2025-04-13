import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "lucide-react";

import { cn } from "@/lib/utils";

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer border-lt-input dark:bg-dk-input/30 data-[state=checked]:bg-lt-primary data-[state=checked]:text-lt-primary-foreground dark:data-[state=checked]:bg-dk-primary data-[state=checked]:border-lt-primary focus-visible:border-lt-ring focus-visible:ring-lt-ring/50 aria-invalid:ring-lt-destructive/20 dark:aria-invalid:ring-dk-destructive/40 aria-invalid:border-dk-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="flex items-center justify-center text-current transition-none"
      >
        <CheckIcon className="size-3.5" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
