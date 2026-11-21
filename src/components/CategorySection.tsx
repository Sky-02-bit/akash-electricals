import { categories } from "@/data/categories";

const CategorySection = () => {
    return (
        <section className="py-16 sm:py-20">
            <div className="container-x">
                {/* Section heading */}
                <div className="mb-8 flex items-end justify-between gap-4">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-[0.18em] text-muted">
                            Shop by Category
                        </p>

                        <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-fg sm:text-4xl">
                            Find What You Need
                        </h2>

                        <p className="mt-3 max-w-2xl text-sm leading-6 text-muted sm:text-base">
                            Explore electrical products across everyday home, shop, and
                            wiring requirements.
                        </p>
                    </div>

                    <a
                        href="/products"
                        className="hidden shrink-0 text-sm font-semibold text-fg underline-offset-4 hover:underline sm:block"
                    >
                        View All
                    </a>
                </div>

                {/* Category grid */}
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                    {categories.map((category) => (
                        <a
                            key={category.slug}
                            href={`/products?category=${category.slug}`}
                            className="group overflow-hidden rounded-2xl border border-border bg-surface transition duration-200 hover:-translate-y-1 hover:shadow-card"
                        >
                            {/* Image */}
                            <div className="aspect-[4/3] overflow-hidden bg-surface2">
                                <img
                                    src={category.image}
                                    alt={category.name}
                                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-4">
                                <h3 className="text-base font-bold text-fg">
                                    {category.name}
                                </h3>

                                <p className="mt-1 line-clamp-2 text-xs leading-5 text-muted">
                                    {category.blurb}
                                </p>

                                <span className="mt-3 inline-block text-xs font-semibold text-fg">
                                    Explore →
                                </span>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Mobile View All */}
                <div className="mt-6 sm:hidden">
                    <a
                        href="/products"
                        className="text-sm font-semibold text-fg underline underline-offset-4"
                    >
                        View All Categories →
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CategorySection;