import type { Product } from "@/types";
import Image from "next/image";
interface ProductCardProps {
    product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
    return (
        <article className="group overflow-hidden rounded-2xl border border-border bg-surface transition duration-200 hover:-translate-y-1 hover:shadow-card">
            {/* Product Image */}
            <div className="relative aspect-[4/3] overflow-hidden bg-surface2">
                {product.image ? (
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition duration-300 group-hover:scale-105"
                    />
                ) : (
                    <div className="flex h-full items-center justify-center text-sm text-muted">
                        Product Image
                    </div>
                )}
            </div>

            {/* Product Content */}
            <div className="p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                    {product.brandSlug}
                </p>

                <h3 className="mt-1 text-base font-bold text-fg">
                    {product.name}
                </h3>

                <p className="mt-2 line-clamp-2 text-sm leading-5 text-muted">
                    {product.description}
                </p>

                <a
                    href={`/products/${product.slug}`}
                    className="mt-4 inline-block text-sm font-semibold text-fg underline-offset-4 hover:underline"
                >
                    View Product →
                </a>
            </div>
        </article>
    );
};

export default ProductCard;