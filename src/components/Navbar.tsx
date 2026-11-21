import Link from "next/link";
const Navbar = () => {
    return (
        <header className="border-b border-border bg-surface">
            <div className="container-x">
                <nav className="flex h-16 items-center justify-between">
                    {/* Logo / Brand */}
                    <Link href="/" className="flex items-center gap-1">
                        <img
                            src="/images/logo/akash-electrical-logo.png"
                            alt="Akash Electricals"
                            className="h-16 w-16 object-contain "
                        />

                        <span className="text-xl font-extrabold tracking-tight text-fg">
                            Akash Electricals
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden items-center gap-8 md:flex">
                        <Link
                            href="/"
                            className="text-sm font-medium text-muted transition hover:text-fg"
                        >
                            Home
                        </Link>

                        <Link
                            href="/products"
                            className="text-sm font-medium text-muted transition hover:text-fg"
                        >
                            Products
                        </Link>

                        <Link
                            href="/brands"
                            className="text-sm font-medium text-muted transition hover:text-fg"
                        >
                            Brands
                        </Link>

                        <Link
                            href="/services"
                            className="text-sm font-medium text-muted transition hover:text-fg"
                        >
                            Services
                        </Link>

                        <Link
                            href="/contact"
                            className="text-sm font-medium text-muted transition hover:text-fg"
                        >
                            Contact
                        </Link>
                    </div>

                    {/* CTA */}
                    <Link
                        href="/contact"
                        className="btn btn-accent hidden md:inline-flex"
                    >
                        Get in Touch
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        type="button"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-fg md:hidden"
                        aria-label="Open menu"
                    >
                        <span className="text-lg">☰</span>
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;