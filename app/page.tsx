"use client";

import { ActionsPanel } from "./components/actions/actions-panel";
import { HeroSection } from "./components/landing/hero-section";

export default function Home() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-10">
      <HeroSection />

      <ActionsPanel />
    </main>
  );
}