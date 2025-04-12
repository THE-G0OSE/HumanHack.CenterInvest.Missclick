import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-lt-primary dark:bg-dk-primary text-lt-primary-foreground dark:text-dk-primary-foreground [a&]:hover:bg-lt-primary/90",
        secondary:
          "border-transparent bg-lt-secondary dark:bg-dk-secondary text-lt-secondary-foreground dark:text-dk-secondary-foreground [a&]:hover:bg-lt-secondary/90",
        destructive:
          "border-transparent bg-lt-destructive dark:bg-dk-destructive text-white [a&]:hover:bg-lt-destructive/90 focus-visible:ring-lt-destructive/20 dark:focus-visible:ring-lt-destructive/40 dark:bg-lt-destructive/60",
        outline:
          "text-lt-foreground dark:text-dk-foreground [a&]:hover:bg-lt-accent [a&]:hover:text-lt-accent-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
