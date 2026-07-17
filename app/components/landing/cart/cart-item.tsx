export function CartSummary() {
  return (
    <>
      <div className="mt-8 flex items-center justify-between border-t pt-6">
        <span className="font-semibold">
          Subtotal
        </span>

        <span className="font-bold">
          Rp0
        </span>
      </div>

      <button className="mt-6 w-full rounded-lg bg-primary py-3 font-semibold text-primary-foreground transition hover:opacity-90">
        Checkout
      </button>
    </>
  );
}