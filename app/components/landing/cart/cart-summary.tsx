import type { CartItem } from "./cart-types";

type CartSummaryProps = {
  cart: CartItem[];
};

export function CartSummary({ cart }: CartSummaryProps) {
  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="mt-8 rounded-lg border p-4">
      <h3 className="text-lg font-bold">
        Cart Summary
      </h3>

      <div className="mt-4 space-y-2 text-sm">
        <div className="flex justify-between">
          <span>Items</span>
          <span>{totalItems}</span>
        </div>

        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>
            Rp {subtotal.toLocaleString("id-ID")}
          </span>
        </div>

        <div className="flex justify-between border-t pt-2 text-base font-bold">
          <span>Total</span>
          <span>
            Rp {subtotal.toLocaleString("id-ID")}
          </span>
        </div>
      </div>
    </div>
  );
}