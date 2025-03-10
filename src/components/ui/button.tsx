import * as React from "react"
import { cn } from "@/utils"
import { Slot } from "@radix-ui/react-slot"
import { type VariantProps, cva } from "class-variance-authority"

const buttonVariants = cva(
    "inline-flex text-center items-center justify-center rounded-md text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground hover:bg-primary/80",
                destructive:
                    "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                outline:
                    "border border-input bg-background hover:bg-accent font-semibold hover:text-accent-foreground",
                secondary:
                    "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                ghost: "hover:bg-accent/80 hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline",
                neutral: "bg-accent/40 text-accent-foreground hover:bg-accent/70",
            },
            size: {
                default: "px-2 py-2",
                sm: "rounded-md px-3",
                lg: "rounded-md px-8 py-3",
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
    ariaLabel?: string // Nouveau prop pour aria-label
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ariaLabel, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                id={ariaLabel}
                aria-label={ariaLabel} // Ajout de aria-label
                name={ariaLabel}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants }
