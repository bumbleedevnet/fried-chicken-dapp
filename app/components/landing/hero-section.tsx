export function HeroSection() {
  return (
    <section className="py-16 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-orange-500">
         Welcome to
      </p>

      <h1 className="mt-4 text-5xl font-black tracking-tight">
        Waroenk Mandala
      </h1>

      <p className="mx-auto mt-6 max-w-2xl text-lg text-foreground/70">
        Fresh fried chicken powered by Solana. Order your favorite menu and pay
        instantly using your Phantom Wallet.
      </p>

      <button className="mt-8 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:opacity-90">
         Order Now
      </button>

      <div className="mt-12 flex justify-center gap-8 text-sm text-foreground/60">
        <span>⚡ Instant Payment</span>
        <span>💰 Low Fees</span>
        <span>🔒 Secure</span>
      </div>
    </section>
  );
}