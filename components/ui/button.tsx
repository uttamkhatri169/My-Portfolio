import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 active:scale-95",
  {
    variants: {
      variant: {
        default:
          "bg-white text-black shadow-lg shadow-white/10 hover:bg-neutral-100 hover:shadow-white/20 font-semibold",
        red:
          "bg-[#FF3B2E] text-white shadow-lg shadow-[#FF3B2E]/25 hover:bg-[#D92A1F] hover:shadow-[#FF3B2E]/40 font-semibold",
        glass:
          "bg-white/[0.08] backdrop-blur-md border border-white/[0.16] text-white hover:bg-white/[0.16] hover:border-white/30 font-medium",
        outline:
          "border border-white/30 bg-transparent text-white hover:bg-white/10 hover:border-white/50 font-medium",
        ghost: "hover:bg-white/10 text-white font-medium",
      },
      size: {
        default: "h-11 px-6 py-2.5 text-sm",
        sm: "h-9 px-4 py-2 text-xs",
        lg: "h-12 px-8 text-base",
        icon: "h-10 w-10 p-0 rounded-full",
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
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
