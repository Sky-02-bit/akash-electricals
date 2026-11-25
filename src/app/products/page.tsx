import Image from "next/image";
import Link from "next/link";
import { categoryBrands } from "@/data/category-brand";

interface ProductsPageProps {
    searchParams: Promise<{
        category?: string;
    }>;
}

export default async function ProductsPage({
    searchParams,
}: ProductsPageProps) {
    const { category } = await searchParams;

    const filteredItems = category
        ? categoryBrands.filter(
            (item) => item.categorySlug === category
        )
        : categoryBrands;

    return (
        <main>
            {/* Page Header */}
            <section className="border-b border-border bg-surface">
                <div className="container-x py-14 sm:py-18">
                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-muted">
                        Our Switches Brand Category 
                    </p>

                    <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-fg sm:text-5xl">
                        Electrical Products
                    </h1>

                    <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
                        Explore electrical products from trusted brands for your
                        home, business, and everyday requirements.
                    </p>
                </div>
            </section>

            {/* Product Grid */}
            <section className="py-14 sm:py-18">
                <div className="container-x">
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 all">
                        {filteredItems.map((item) => (
                            <Link
                                key={item.slug}
                                href={`/brands/${item.brandSlug}`}
                                className="group overflow-hidden rounded-2xl border border-border bg-surface transition duration-200 hover:-translate-y-1 hover:shadow-card"
                            >
                                {/* Image */}
                                <div className="relative aspect-[4/3] overflow-hidden bg-surface2">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-cover transition duration-300 group-hover:scale-105"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-4">
                                    <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                                        {item.brandSlug}
                                    </p>

                                    <h3 className="mt-1 text-base font-bold text-fg">
                                        {item.name}
                                    </h3>

                                    <p className="mt-2 line-clamp-2 text-sm leading-5 text-muted">
                                        {item.description}
                                    </p>

                                    <span className="mt-4 inline-block text-sm font-semibold text-fg">
                                        View Product →
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