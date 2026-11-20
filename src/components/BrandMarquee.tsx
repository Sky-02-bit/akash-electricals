import { brands } from "@/data/brands";

const BrandMarquee = () => {
    return (
        <section className="border-y border-border bg-surface py-6">
            <div className="marquee overflow-hidden">
                <div className="marquee-track items-center gap-10">
                    {brands.map((brand) => (
                        <div
                            key={brand.id}
                            className="flex shrink-0 items-center gap-3"
                        >
                            <div className="flex h-10 w-10 items-center justify-center">
                                <img
                                    src={brand.logo}
                                    alt={`${brand.name} logo`}
                                    className="max-h-10 max-w-20 object-contain"
                                />
                            </div>

                            <span className="whitespace-nowrap text-sm font-semibold text-fg">
                                {brand.name}
                            </span>
                        </div>
                    ))}

                    <div className="marquee-dup flex items-center gap-10">
                        {brands.map((brand) => (
                            <div
                                key={`duplicate-${brand.id}`}
                                className="flex shrink-0 items-center gap-3"
                            >
                                <div className="flex h-10 w-10 items-center justify-center">
                                    <img
                                        src={brand.logo}
                                        alt=""
                                        aria-hidden="true"
                                        className="max-h-10 max-w-20 object-contain"
                                    />
                                </div>

                                <span className="whitespace-nowrap text-sm font-semibold text-fg">
                                    {brand.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrandMarquee;