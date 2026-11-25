import Image from "next/image";
import Link from "next/link";
import type { BrandProduct } from "@/data/brand-products";

interface BrandProductCardProps {
    product: BrandProduct;
}

const BrandProductCard = ({
    product,
}: BrandProductCardProps) => {
    return (
        <article className="card overflow-hidden">
            <div className="flex h-52 items-center justify-center bg-surface2 p-6">
                <Image
                    src={product.image}
                    alt={product.name}
                    width={220}
                    height={220}
                    className="h-full w-full object-contain"
                />
            </div>

            <div className="p-5">
                <h2 className="text-base font-bold text-fg">
                    {product.name}
                </h2>

                <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted">
                    {product.description}
                </p>

                <div className="mt-4">
                    <Link
                        href={`/products/${product.id}`}
                        className="btn btn-accent w-full"
                    >
                        Enquire About Product
                    </Link>
                </div>
            </div>
        </article>
    );
};

export default BrandProductCard;
