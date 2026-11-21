import { Image } from 'next/image';
export type Brand = {
    id: string;
    name: string;
    slug: string;
    logo: string;
    image: string;
};

export const brands: Brand[] = [
    {
        id: "goldmedal",
        name: "Goldmedal",
        slug: "goldmedal",
        logo: "/images/brands/goldmedal(1).jpeg",
        image: "/images/brands/goldmedal-switch-to-the-amazing.png",
    },

    {
        id: "havells",
        name: "Havells",
        slug: "havells",
        logo: "/images/brands/Havells-1.jpeg",
        image: "/images/brands/havells.jpg",
    },

    {
        id: "anchor",
        name: "Anchor",
        slug: "anchor",
        logo: "/images/brands/Anchor.jpeg",
        image: "/images/brands/Anchor_Electricals_Pvt._Ltd.-Logo.wine.png",
    },
    {
        id: "bajaj",
        name: "Bajaj",
        slug: "bajaj",
        logo: "/images/brands/bajaj.jpeg",
        image: "/images/brands/images (1).png",
    },
    {
        id: "halonix",
        name: "Halonix",
        slug: "halonix",
        logo: "/images/brands/halonix.jpeg",
        image: "/images/brands/halonix.png",
    },
    {
        id: "tmt",
        name: "Tmt",
        slug: "tmt",
        logo: "/images/brands/images.png",
        image: "/images/brands/tmt-logo-.png",
    },
];