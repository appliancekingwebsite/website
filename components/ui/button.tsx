import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline" | "quiet";
};

export function Button({ className, variant = "primary", ...props }: Props) {
  return <button className={cn("button", `button--${variant}`, className)} {...props} />;
}
