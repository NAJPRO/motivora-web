import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "inline-flex items-center  justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default:
                    "bg-primary text-primary-foreground shadow-gold hover:bg-primary/80",
                destructive:
                    "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
                outline:
                    "border-2 border-primary/60 bg-transparent text-primary hover:bg-primary/10 hover:border-primary",
                secondary:
                    "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
                ghost: "text-foreground hover:bg-muted hover:text-foreground",
                link: "text-primary underline-offset-4 hover:underline",
                hero: "bg-primary text-primary-foreground font-semibold shadow-gold hover:bg-primary/80 hover:-translate-y-0.5",
                heroOutline: "border-2 border-foreground/30 bg-transparent text-foreground hover:bg-foreground/5 hover:border-foreground/50",
                gold: "bg-gradient-to-r from-primary to-primary/70 text-primary-foreground font-semibold shadow-gold hover:-translate-y-0.5",
            },
            size: {
                default: "h-10 px-5",
                sm: "h-9 px-4 text-xs",
                lg: "h-12 px-8 text-base",
                xl: "h-14 px-10 text-lg",
                icon: "h-10 w-10 p-0",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> { }

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(buttonVariants({ variant, size }), className)}
                {...props}
            />
        );
    }
);

Button.displayName = "Button";

export { Button, buttonVariants };
