"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { motion, AnimatePresence } from "framer-motion";

import styles from "./Header.module.scss";

import Logo from "@/components/Images/Radhe-Krupa-Gold.png";
import MenuIcon from "@/components/Icons/MenuIcon";
import CloseIcon from "@/components/Icons/CloseIcon";
import SearchIcon from "@/components/Icons/SearchIcon";
import UserIcon from "@/components/Icons/UserIcon";
import CartIcon from "@/components/Icons/CartIcon";

// Import your SearchBar component and mock data
import SearchBar from "@/components/SearchBar/SearchBar";
import { MOCK_PRODUCTS } from "@/data/mock";

export default function Header() {
    const pathname = usePathname();
    const { items } = useCart();
    const cartCount = items.reduce((sum, i) => sum + i.quantity, 0);

    const [menuOpen, setMenuOpen] = useState(false);
    const [productsOpen, setProductsOpen] = useState(false);

    // State to toggle the Search Component
    const [searchOpen, setSearchOpen] = useState(false);

    // Disable body scroll when search is open to maintain focus
    useEffect(() => {
        if (searchOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [searchOpen]);

    return (
        <>
            {/* ================= SEARCH COMPONENT (WITH BLUR) ================= */}
            <AnimatePresence>
                {searchOpen && (
                    <SearchBar
                        products={MOCK_PRODUCTS}
                        onClose={() => setSearchOpen(false)}
                    />
                )}
            </AnimatePresence>

            {/* ================= TOP BAR (SCROLLS AWAY) ================= */}
            <header className={styles.topHeader}>
                <div className={styles.topBar}>
                    <div className={styles.leftIcons}>
                        <button
                            className={styles.menuToggle}
                            onClick={() => setMenuOpen(true)}
                            aria-label="Open menu"
                        >
                            <MenuIcon />
                        </button>

                        {/* Search Icon triggers the overlay */}
                        <button
                            className={styles.iconBtn}
                            onClick={() => setSearchOpen(true)}
                            aria-label="Search"
                        >
                            <SearchIcon width={20} height={20} />
                        </button>
                    </div>

                    <div className={styles.logo}>
                        <Link href="/">
                            <Image src={Logo} alt="Radhe Krupa" width={60} height={60} />
                        </Link>
                        <Link href="/">
                            <span>Radhe Krupa</span>
                        </Link>
                    </div>

                    <div className={styles.rightIcons}>
                        <Link href="/signin" className={styles.iconLink}>
                            <UserIcon width={25} height={25} />
                        </Link>

                        <Link href="/cart" className={styles.iconLink}>
                            <motion.div whileTap={{ scale: 1 }}>
                                <CartIcon width={25} height={25} />

                                <AnimatePresence>
                                    {cartCount > 0 && (
                                        <motion.span
                                            key={cartCount}
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            exit={{ scale: 0 }}
                                            className={styles.cartBadge}
                                        >
                                            {cartCount}
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </Link>
                    </div>
                </div>
            </header>

            {/* ================= DESKTOP NAV (STICKY) ================= */}
            <nav className={styles.desktopNav}>
                <Link href="/" className={pathname === "/" ? styles.active : ""}>
                    Home
                </Link>

                <div
                    className={`${styles.dropdown} ${
                        pathname.startsWith("/products") ? styles.active : ""
                    }`}
                >
                    <span>
                        Products <span className={styles.arrow}>▼</span>
                    </span>

                    <div className={styles.dropdownContent}>
                        <Link href="/collections/24k-extra-large-pure-gold-coins">Large Gold Coin</Link>
                        <Link href="/collections/24k-large-solid-pure-gold-coins">Extra-Large Slim Gold Coin</Link>
                        <Link href="/collections/24k-large-solid-pure-gold-coins">All Items</Link>
                    </div>
                </div>

                <Link href="/bulk-orders" className={pathname === "/bulk-orders" ? styles.active : ""}>
                    Bulk Orders
                </Link>

                <Link href="/jewellery-store-tie-ups" className={pathname === "/jewellery-store-tie-ups" ? styles.active : ""}>
                    Jewellery Store Tie-ups
                </Link>

                <Link href="/about-us" className={pathname === "/about-us" ? styles.active : ""}>
                    About Us
                </Link>

                <Link href="/contact-us" className={pathname === "/contact-us" ? styles.active : ""}>
                    Contact Us
                </Link>
            </nav>

            {/* ================= MOBILE OVERLAY ================= */}
            {menuOpen && (
                <div className={styles.overlay} onClick={() => setMenuOpen(false)} />
            )}

            {/* ================= MOBILE SIDE NAV ================= */}
            <nav className={`${styles.sideNav} ${menuOpen ? styles.open : ""}`}>
                <button
                    className={styles.closeBtn}
                    onClick={() => setMenuOpen(false)}
                >
                    <CloseIcon width={24} height={24} />
                </button>

                <Link href="/" onClick={() => setMenuOpen(false)}>
                    Home
                </Link>

                <div className={styles.sideNavItem}>
                    <button onClick={() => setProductsOpen(!productsOpen)}>
                        Products <span>{productsOpen ? "▼" : "▶"}</span>
                    </button>

                    <div
                        className={`${styles.sideDropdown} ${
                            productsOpen ? styles.open : ""
                        }`}
                    >
                        <Link href="#">Large Gold Coin</Link>
                        <Link href="#">Extra-Large Slim Gold Coin</Link>
                        <Link href="/products">All Items</Link>
                    </div>
                </div>

                <Link href="/bulk-orders" className={pathname === "/bulk-orders" ? styles.active : ""} onClick={() => setMenuOpen(false)}>
                    Bulk Orders
                </Link>

                <Link href="/jewellery-store-tie-ups" className={pathname === "/jewellery-store-tie-ups" ? styles.active : ""} onClick={() => setMenuOpen(false)}>
                    Jewellery Store Tie-ups
                </Link>

                <Link href="/about-us" className={pathname === "/about" ? styles.active : ""} onClick={() => setMenuOpen(false)}>
                    About Us
                </Link>

                <Link href="/contact-us" className={pathname === "/contact-us" ? styles.active : ""} onClick={() => setMenuOpen(false)}>
                    Contact Us
                </Link>
            </nav>
        </>
    );
}