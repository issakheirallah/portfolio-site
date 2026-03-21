"use client";

import { ReactNode } from "react";
import { Button } from "react-aria-components";

export function AriaIconButton({
  children,
  onPress,
  ariaLabel,
}: {
  children: ReactNode;
  onPress: () => void;
  ariaLabel: string;
}) {
  return (
    <Button
      onPress={onPress}
      aria-label={ariaLabel}
      className="rounded-full border border-white/15 px-3 py-2 text-sm text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/5"
    >
      {children}
    </Button>
  );
}
