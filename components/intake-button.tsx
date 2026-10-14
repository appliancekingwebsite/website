"use client";

import type { ReactNode } from "react";
import type { IntakeMode } from "@/lib/intake";

export const INTAKE_EVENT = "ak:intake";

/** Opens the site-wide intake wizard (mounted once in the layout). */
export function IntakeButton({
  mode,
  className,
  children,
  onClick,
}: {
  mode: IntakeMode;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      className={className}
      data-intake={mode}
      onClick={() => {
        onClick?.();
        window.dispatchEvent(new CustomEvent(INTAKE_EVENT, { detail: { mode } }));
      }}
    >
      {children}
    </button>
  );
}
