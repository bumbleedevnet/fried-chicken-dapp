"use client";

import { ThemeToggle } from "./theme-toggle";
import { ClusterSelect } from "./cluster-select";

export function AppHeader() {
  return (
    <header className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-3 px-6 py-4">
      <span className="text-sm font-semibold tracking-tight">
        Waroenk Mandala
      </span>

      <div className="flex items-center gap-3">
        <ThemeToggle />
        <ClusterSelect />
      </div>
    </header>
  );
}