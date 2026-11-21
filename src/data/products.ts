import type { Product } from "@/types";

export const products: Product[] = [
    {
        slug: "goldmedal-switch",
        name: "Goldmedal Switch",
        brandSlug: "goldmedal",
        categorySlug: "switches",
        description:
            "Premium modular switches and cover plates suitable for residential and commercial electrical installations.",
        image: "/images/products/goldmedal-sparkle-switch.jpg",
        featured: true,
        keywords: ["switch", "modular switch", "goldmedal","plates"],
        specs: [
            { label: "Brand", value: "Goldmedal" },
            { label: "Type", value: "Modular Switch" },
        ],
    },
    {
        slug: "havells-mcb",
        name: "Havells MCB",
        brandSlug: "havells",
        categorySlug: "circuit-protection",
        description:
            "MCB designed for reliable circuit protection in residential and commercial applications.",
        image: "/images/products/havells-mcb.jpg",
        featured: true,
        keywords: ["mcb", "circuit protection", "havells"],
        specs: [
            { label: "Brand", value: "Havells" },
            { label: "Type", value: "MCB" },
        ],
    },
];