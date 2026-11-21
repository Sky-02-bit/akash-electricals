import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function ProductsPage() {
    return (
        <main>
            {/* Page Header */}
            <section className="border-b border-border bg-surface">
                <div className="container-x py-14 sm:py-18">
                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-muted">
                        Our Products
                    </p>

                    <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-fg sm:text-5xl">
                        Electrical Products
                    </h1>

                    <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
                        Explore electrical products from trusted brands for your home,
                        business, and everyday requirements.
                    </p>
                </div>
            </section>

            {/* Product Grid */}
            <section className="py-14 sm:py-18">
                <div className="container-x">
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {products.map((product) => (
                            <ProductCard key={product.slug} product={product} />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}