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
    setCart((currentCart) => {
      const existingItem = currentCart.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        return currentCart.map((cartItem) =>
          cartItem.id === item.id
            ? {
                ...cartItem,
                quantity: cartItem.quantity + 1,
              }
            : cartItem
        );
      }

      return [...currentCart, item];
    });
  };

  const increaseQuantity = (id: string) => {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  const decreaseQuantity = (id: string) => {
    setCart((currentCart) => {
      const item = currentCart.find((item) => item.id === id);

      if (!item) {
        return currentCart;
      }

      if (item.quantity === 1) {
        return currentCart.filter((item) => item.id !== id);
      }

      return currentCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item
      );
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <main className="mx-auto max-w-4xl px-6 py-10">
      <HeroSection />

      <FeaturedMenu addToCart={addToCart} />

      <ShoppingCart
        cart={cart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        clearCart={clearCart}
      />

      <ActionsPanel />
    </main>
  );
}