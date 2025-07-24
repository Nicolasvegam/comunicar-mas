import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-comunicar-lavender/100 text-white hover:bg-[#9c89c9] shadow-md", // Much darker color for contrast
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/100 shadow-md", // Full opacity hover
        outline:
          "border-2 border-comunicar-lavender bg-background text-comunicar-lavender hover:bg-comunicar-lavender/30 hover:text-comunicar-lavender", // More noticeable hover
        secondary:
          "bg-[#7c9dcf] text-white hover:bg-[#5c7db0] shadow-md", // Completely different blue shade
        ghost: "hover:bg-accent/90 hover:text-accent-foreground", // Stronger hover
        link: "text-[#8d6eb3] underline-offset-4 font-semibold hover:underline hover:text-[#6d4e93]", // Much darker colors
      },
      size: {
        default: "h-10 px-5 py-2.5",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8 py-3", // Added vertical padding
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
