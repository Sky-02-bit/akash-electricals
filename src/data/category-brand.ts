export interface CategoryBrand {
    slug: string;
    name: string;
    brandSlug: string;
    categorySlug: string;
    image: string;
    description: string;
}

export const categoryBrands: CategoryBrand[] = [
    {
        slug: "goldmedal-switch",
        name: "Goldmedal Switch",
        brandSlug: "goldmedal",
        categorySlug: "switches",
        image: "/images/products/goldmedal-sparkle-switch.jpg",
        description:
            "Premium modular switches and cover plates suitable for residential and commercial electrical installations.",
    },
    {
        slug: "havells-switch",
        name: "Havells Switch",
        brandSlug: "havells",
        categorySlug: "switches",
        image: "/images/brands/havells.jpg",
        description:
            "Explore Havells switches and electrical products available in the Switches & Plates category.",
    },
    {
        slug: "anchor-switch",
        name: "Anchor Switch",
        brandSlug: "anchor",
        categorySlug: "switches",
        image: "/images/brands/Anchor.jpeg",
        description:
            "Explore Anchor switches and electrical products available in the Switches & Plates category.",
    },
];