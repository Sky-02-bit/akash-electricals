import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { brandProducts } from "@/data/brand-products";
import ProductCard from "@/components/ProductCard";
interface ProductDetailPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function ProductDetailPage({
    params,
}: ProductDetailPageProps) {
    const { slug } = await params;

    const product = brandProducts.find((item) => item.slug === slug);

    if (!product) {
        notFound();
    }

    const relatedProducts = brandProducts.filter(
        (item) =>
            item.categorySlug === product.categorySlug &&
            item.slug !== product.slug
    );

    return (
        <main>
            {/* Breadcrumb */}
            <section className="border-b border-border bg-surface">
                <div className="container-x py-6">
                    <div className="flex flex-wrap items-center gap-2 text-sm text-muted">
                        <Link href="/" className="hover:text-fg">
                            Home
                        </Link>

                        <span>/</span>

                        <Link href="/products" className="hover:text-fg">
                            Products
                        </Link>

                        <span>/</span>

                        <span className="text-fg">{product.name}</span>
                    </div>
                </div>
            </section>

            {/* Product Detail */}
            <section className="py-14 sm:py-20">
                <div className="container-x">
                    <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
                        {/* Image */}
                        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-surface2">
                            {product.image ? (
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover"
                                />
                            ) : (
                                <div className="flex h-full items-center justify-center text-sm text-muted">
                                    Product Image
                                </div>
                            )}
                        </div>

                        {/* Content */}
                        <div>
                            <p className="text-sm font-bold uppercase tracking-[0.18em] text-muted">
                                {product.brandSlug}
                            </p>

                            <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-fg sm:text-5xl">
                                {product.name}
                            </h1>

                            <p className="mt-5 max-w-2xl text-base leading-7 text-muted">
                                {product.description}
                            </p>

                            {/* Specifications */}
                            {product.specs && product.specs.length > 0 && (
                                <div className="mt-8">
                                    <h2 className="text-xl font-bold text-fg">
                                        Specifications
                                    </h2>

                                    <div className="mt-4 overflow-hidden rounded-2xl border border-border">
                                        {product.specs.map((spec) => (
                                            <div
                                                key={spec.label}
                                                className="grid grid-cols-2 border-b border-border last:border-b-0"
                                            >
                                                <div className="bg-surface2 px-4 py-3 text-sm font-semibold text-fg">
                                                    {spec.label}
                                                </div>

                                                <div className="px-4 py-3 text-sm text-muted">
                                                    {spec.value}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* CTA */}
                            <div className="mt-8 flex flex-wrap gap-3">
                                <Link href="/contact" className="btn btn-accent">
                                    Enquire About Product
                                </Link>

                                <Link href="/products" className="btn btn-outline">
                                    Back to Products
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Related Products */}
            {relatedProducts.length > 0 && (
                <section className="border-t border-border py-14 sm:py-20">
                    <div className="container-x">
                        <div className="mb-8">
                            <p className="text-sm font-bold uppercase tracking-[0.18em] text-muted">
                                Related Products
                            </p>

                            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-fg sm:text-4xl">
                                You May Also Like
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {relatedProducts.map((relatedProduct) => (
                                <ProductCard
                                    key={relatedProduct.slug}
                                    product={relatedProduct}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </main>
    );
}