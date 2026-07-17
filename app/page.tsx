"use client";

import { useState } from "react";

import { ActionsPanel } from "./components/actions/actions-panel";
import type { CartItem } from "./components/landing/cart/cart-types";
import { ShoppingCart } from "./components/landing/cart/shopping-cart";
import { HeroSection } from "./components/landing/hero-section";
import { FeaturedMenu } from "./components/landing/menu/featured-menu";

export default function Home() {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCart((currentCart) => [
      ...currentCart,
      item,
    ]);
  };

  return (
    <main className="mx-auto max-w-4xl px-6 py-10">
      <HeroSection />

      <FeaturedMenu addToCart={addToCart} />

      <ShoppingCart cart={cart} />

      <ActionsPanel />
    </main>
  );
}