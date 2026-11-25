import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import { brands } from "@/data/brands";
import { brandProducts } from "@/data/brand-products";

interface BrandDetailPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function BrandDetailPage({
    params,
}: BrandDetailPageProps) {
    const { slug } = await params;

    const brand = brands.find((item) => item.slug === slug);

    if (!brand) {
        notFound();
    }

    const productsForBrand = brandProducts.filter(
        (product) => product.brandSlug === brand.slug
    );

    const categorySlug = productsForBrand[0]?.categorySlug;

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

                        {categorySlug ? (
                            <Link
                                href={`/products?category=${categorySlug}`}
                                className="hover:text-fg"
                            >
                                {categorySlug === "switches"
                                    ? "Brand Category"
                                    : categorySlug}
                            </Link>
                        ) : (
                            <span className="text-fg">
                                Products
                            </span>
                        )}

                        <span>/</span>

                        <span className="text-fg">{brand.name}</span>
                    </div>
                </div>
            </section>

            {/* Brand Hero */}
            <section className="py-14 sm:py-20">
                <div className="container-x">
                    <div className="grid gap-8 overflow-hidden rounded-2xl border border-border bg-surface sm:grid-cols-2 sm:items-center">
                        <div className="p-8 sm:p-10">
                            <p className="text-sm font-bold uppercase tracking-[0.18em] text-muted">
                                Brand
                            </p>

                            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-fg sm:text-5xl">
                                {brand.name}
                            </h1>

                            <p className="mt-4 max-w-xl text-base leading-7 text-muted">
                                Explore electrical products from {brand.name},
                                available through Akash Electricals.
                            </p>

                            <Link
                                href="/products"
                                className="btn btn-primary mt-6"
                            >
                                Browse All Products
                            </Link>
                        </div>

                        <div className="relative aspect-[16/9] bg-surface2">
                            <Image
                                src={brand.image}
                                alt={`${brand.name} logo`}
                                fill
                                className="object-contain p-4"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Brand Products */}
            <section className="border-t border-border py-14 sm:py-20">
                <div className="container-x">
                    <div className="mb-8">
                        <p className="text-sm font-bold uppercase tracking-[0.18em] text-muted">
                            {brand.name}
                        </p>

                        <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-fg sm:text-4xl">
                            Products by {brand.name}
                        </h2>

                        <p className="mt-3 max-w-2xl text-sm leading-6 text-muted sm:text-base">
                            Explore products from this brand available in our
                            electrical catalogue.
                        </p>
                    </div>

                    {productsForBrand.length > 0 ? (
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {productsForBrand.map((product) => (
                                <ProductCard
                                    key={product.slug}
                                    product={product}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="rounded-2xl border border-border bg-surface2 px-6 py-10 text-center">
                            <p className="text-sm text-muted">
                                Products from {brand.name} will be added soon.
                            </p>
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}