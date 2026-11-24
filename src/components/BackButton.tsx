"use client";

import { useRouter } from "next/navigation";

const BackButton = () => {
    const router = useRouter();

    return (
        <button
            type="button"
            onClick={() => router.back()}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-fg transition hover:border-fg/40 hover:bg-surface2"
            aria-label="Go back"
        >
            ←
        </button>
    );
};

export default BackButton;