const Navbar = () => {
    return (
        <header className="border-b border-border bg-surface">
            <div className="container-x">
                <nav className="flex h-16 items-center justify-between">
                    {/* Logo / Brand */}
                    <a href="/" className="flex items-center gap-3">
                        <img
                            src="/images/logo/akash-electricals-logo.png"
                            alt="Akash Electricals"
                            className="h-16 w-16 object-contain "
                        />

                        <span className="text-xl font-extrabold tracking-tight text-fg">
                            Akash Electricals
                        </span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden items-center gap-8 md:flex">
                        <a
                            href="/"
                            className="text-sm font-medium text-muted transition hover:text-fg"
                        >
                            Home
                        </a>

                        <a
                            href="/products"
                            className="text-sm font-medium text-muted transition hover:text-fg"
                        >
                            Products
                        </a>

                        <a
                            href="/brands"
                            className="text-sm font-medium text-muted transition hover:text-fg"
                        >
                            Brands
                        </a>

                        <a
                            href="/services"
                            className="text-sm font-medium text-muted transition hover:text-fg"
                        >
                            Services
                        </a>

                        <a
                            href="/contact"
                            className="text-sm font-medium text-muted transition hover:text-fg"
                        >
                            Contact
                        </a>
                    </div>

                    {/* CTA */}
                    <a
                        href="/contact"
                        className="btn btn-accent hidden md:inline-flex"
                    >
                        Get in Touch
                    </a>

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