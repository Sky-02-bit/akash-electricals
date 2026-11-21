import Link from "next/link";
const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="container-x py-20 sm:py-24 lg:py-28">
        <div className="max-w-4xl">
          <p className="hero-in text-sm font-bold uppercase tracking-[0.18em] text-muted">
            Your Trusted Electrical Store
          </p>

          <h1
            className="hero-in text-5xl font-extrabold leading-[0.98] tracking-tight text-fg sm:text-7xl"
            style={{ animationDelay: "80ms" }}
          >
            <span className="block">
              Everything Electrical,
            </span>

            <span className="mt-2 inline-block rounded-lg bg-accent px-2 text-accent-fg">
              All in One Place.
            </span>
          </h1>

          <p
            className="hero-in mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg"
            style={{ animationDelay: "160ms" }}
          >
            Explore quality electrical products, trusted brands, and reliable
            solutions for your home, business, and everyday needs.
          </p>

          <div
            className="hero-in mt-8 flex flex-wrap gap-3"
            style={{ animationDelay: "240ms" }}
          >
            <Link href="/products" className="btn btn-primary">
              Explore Products
            </Link>

            <a href="/contact" className="btn btn-outline">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;