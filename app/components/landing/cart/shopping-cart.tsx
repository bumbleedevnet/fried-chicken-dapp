import type { CartItem } from "./cart-types";
import { CartSummary } from "./cart-summary";

type ShoppingCartProps = {
  cart: CartItem[];
};

export function ShoppingCart({ cart }: ShoppingCartProps) {
  return (
    <section className="mt-20 rounded-xl border p-6">
      <h2 className="text-2xl font-black">
        🛒 Shopping Cart
      </h2>

      {cart.length === 0 ? (
        <p className="mt-6 text-foreground/60">
          Your cart is empty.
        </p>
      ) : (
        <div className="mt-6 space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between rounded-lg border p-4"
            >
              <div>
                <h3 className="font-bold">
                  {item.name}
                </h3>

                <p className="text-sm text-foreground/60">
                  Qty: {item.quantity}
                </p>
              </div>

              <span className="font-semibold">
                Rp {item.price.toLocaleString("id-ID")}
              </span>
            </div>
          ))}
        </div>
      )}

      <CartSummary />
    </section>
  );
}