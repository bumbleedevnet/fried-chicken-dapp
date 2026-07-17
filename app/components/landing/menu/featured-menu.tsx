import type { CartItem } from "../cart/cart-types";
import { MenuCard } from "./menu-card";

type FeaturedMenuProps = {
  addToCart: (item: CartItem) => void;
};

const menus = [
  {
    id: 1,
    name: "Ayam Original",
    price: 25000,
  },
  {
    id: 2,
    name: "Ayam Geprek",
    price: 28000,
  },
  {
    id: 3,
    name: "Ayam BBQ",
    price: 30000,
  },
];

export function FeaturedMenu({
  addToCart,
}: FeaturedMenuProps) {
  return (
    <section className="mt-20">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-orange-500">
          Featured Menu
        </p>

        <h2 className="mt-2 text-3xl font-black">
          Our Best Seller
        </h2>

        <p className="mt-4 text-foreground/60">
          Freshly prepared and loved by our customers.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {menus.map((menu) => (
          <MenuCard
            key={menu.id}
            name={menu.name}
            price={menu.price}
            addToCart={addToCart}
          />
        ))}
      </div>
    </section>
  );
}