type MenuCardProps = {
  name: string;
  price: number;
};

export function MenuCard({ name, price }: MenuCardProps) {
  return (
    <div className="rounded-xl border border-border-low bg-card p-4 shadow-sm">
      <div className="mb-4 flex h-40 items-center justify-center rounded-lg bg-cream">
        🍗 Image
      </div>

      <h3 className="text-lg font-bold">{name}</h3>

      <p className="mt-2 text-sm text-foreground/60">
        Crispy fried chicken with authentic flavor.
      </p>

      <div className="mt-4 flex items-center justify-between">
        <span className="font-semibold">
          Rp {price.toLocaleString("id-ID")}
        </span>

        <button className="rounded-lg bg-primary px-3 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90">
          Order
        </button>
      </div>
    </div>
  );
}