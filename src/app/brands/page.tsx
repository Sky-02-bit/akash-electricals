import Image from "next/image";
import Link from "next/link";
import { brands } from "@/data/brands";

export default function BrandsPage() {
    return (
        <main>
            {/* Page Header */}
            <section className="border-b border-border bg-surface">
                <div className="container-x py-14 sm:py-18">
                    <div className="flex flex-wrap items-center gap-2 text-sm text-muted">
                        <Link href="/" className="hover:text-fg">
                            Home
                        </Link>

                        <span>/</span>

                        <span className="text-fg">Brands</span>
                    </div>

                    <div className="mt-10 max-w-3xl">
                        <p className="text-sm font-bold uppercase tracking-[0.18em] text-muted">
                            Our Brands
                        </p>

                        <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-fg sm:text-6xl">
                            Trusted Brands{" "}
                            <span className="inline-block rounded-lg bg-accent px-2 text-accent-fg">
                                We Work With.
                            </span>
                        </h1>

                        <p className="mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg">
                            Explore electrical products from trusted brands known
                            for quality, reliability, and everyday performance.
                        </p>
                    </div>
                </div>
            </section>

            {/* Brand Grid */}
            <section className="py-14 sm:py-20">
                <div className="container-x">
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {brands.map((brand) => (
                            <Link
                                key={brand.id}
                                href={`/brands/${brand.slug}`}
                                className="group overflow-hidden rounded-2xl border border-border bg-surface transition duration-200 hover:-translate-y-1 hover:shadow-card"
                            >
                                <div className="relative aspect-[16/9] overflow-hidden bg-surface2">
                                    <Image
                                        src={brand.image}
                                        alt={`${brand.name} logo`}
                                        fill
                                        className="object-contain p-4 transition duration-300 group-hover:scale-105"
                                    />
                                </div>

                                <div className="p-5">
                                    <div className="flex items-center justify-between gap-4">
                                        <div>
                                            <h2 className="text-xl font-bold text-fg">
                                                {brand.name}
                                            </h2>

                                            <p className="mt-1 text-sm leading-6 text-muted">
                                                Explore products from {brand.name}.
                                            </p>
                                        </div>

                                        <span className="shrink-0 text-lg text-fg transition-transform duration-200 group-hover:translate-x-1">
                                            →
                                        </span>
                                    </div>

                                    <span className="mt-4 inline-block text-sm font-semibold text-fg">
                                        View Products
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}