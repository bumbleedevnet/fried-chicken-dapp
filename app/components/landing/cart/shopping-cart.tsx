import type { CartItem } from "./cart-types";
import { CartSummary } from "./cart-summary";

type ShoppingCartProps = {
  cart: CartItem[];
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  clearCart: () => void;
};

export function ShoppingCart({
  cart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
}: ShoppingCartProps) {
  return (
    <section className="mt-20 rounded-xl border p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-black">
          🛒 Shopping Cart
        </h2>

        {cart.length > 0 && (
          <button
            onClick={clearCart}
            className="rounded border border-red-500 px-3 py-2 text-sm text-red-500 hover:bg-red-500 hover:text-white"
          >
            🗑 Clear Cart
          </button>
        )}
      </div>

      {cart.length === 0 ? (
        <p className="mt-6 text-foreground/60">
          Your cart is empty.
        </p>
      ) : (
        <>
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

                  <div className="mt-2 flex items-center gap-2">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="rounded border px-2 py-1 text-sm hover:bg-gray-100"
                    >
                      -
                    </button>

                    <span className="min-w-6 text-center font-medium">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="rounded border px-2 py-1 text-sm hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                </div>

                <span className="font-semibold">
                  Rp {(item.price * item.quantity).toLocaleString("id-ID")}
                </span>
              </div>
            ))}
          </div>

          <CartSummary cart={cart} />

          <button
            className="mt-6 w-full rounded-lg bg-black px-4 py-3 font-semibold text-white transition hover:opacity-90"
          >
            Checkout
          </button>
        </>
      )}
    </section>
  );
}