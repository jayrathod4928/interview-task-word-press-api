"use client";

import { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import Image from "next/image";
import Logo from "@/components/Images/Radhe-Krupa-Gold.png";
import MenuIcon from "@/components/Icons/MenuIcon";
import CloseIcon from "@/components/Icons/CloseIcon";
import SearchIcon from "@/components/Icons/SearchIcon";
import UserIcon from "@/components/Icons/UserIcon";
import CartIcon from "@/components/Icons/CartIcon";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [productsOpen, setProductsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // ✅ SCROLL LISTENER
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 80);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header className={styles.header}>
                {/* ===== TOP BAR ===== */}
                <div
                    className={`${styles.topBar} ${
                        scrolled ? styles.hideTopBar : ""
                    }`}
                >
                    <div className={styles.leftIcons}>
                        <button className={styles.menuToggle}>
                            <MenuIcon />
                        </button>

                        <button className={styles.iconBtn}>
                            <SearchIcon width={20} height={20} />
                        </button>
                    </div>

                    <div className={styles.logo}>
                        <Image src={Logo} alt="Logo" width={60} height={60} />
                        <span>Radhe Krupa</span>
                    </div>

                    <div className={styles.rightIcons}>
                        <UserIcon width={20} height={20} />
                        <CartIcon width={20} height={20} />
                    </div>
                </div>

                {/* ===== DESKTOP NAV ===== */}
                <nav
                    className={`${styles.desktopNav} ${
                        scrolled ? styles.desktopNavScrolled : ""
                    }`}
                >
                    <a className={styles.active} href="#">Home</a>

                    <div className={styles.dropdown}>
                        <a href="#">
                            Products <span className={styles.arrow}>▼</span>
                        </a>
                        <div className={styles.dropdownContent}>
                            <a href="#">Large Gold Coin</a>
                            <a href="#">Extra-Large Slim Gold Coin</a>
                            <a href="#">Gold Frames</a>
                            <a href="#">All Items</a>
                        </div>
                    </div>

                    <a href="#">Bulk Orders</a>
                    <a href="#">Jewellery Store Tie-ups</a>
                    <a href="#">About Us</a>
                    <a href="#">Contact Us</a>
                </nav>
            </header>

            {/* ===== OVERLAY ===== */}
            {menuOpen && (
                <div
                    className={styles.overlay}
                    onClick={() => setMenuOpen(false)}
                />
            )}

            {/* ===== MOBILE SIDE NAV ===== */}
            <nav className={`${styles.sideNav} ${menuOpen ? styles.open : ""}`}>
                <button
                    className={styles.closeBtn}
                    onClick={() => setMenuOpen(false)}
                    aria-label="Close menu"
                >
                    <CloseIcon width={24} height={24} />
                </button>

                <a href="#">Home</a>

                {/* Side nav Products with slide-in submenu */}
                <div>
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault(); // prevent navigation
                            setProductsOpen(!productsOpen);
                        }}
                    >
                        Products <span className={styles.arrow}>▶</span>
                    </a>

                    <div className={`${styles.sideDropdown} ${productsOpen ? styles.open : ""}`}>
                        <a href="#">Large Gold Coin</a>
                        <a href="#">Extra-Large Slim Gold Coin</a>
                        <a href="#">Gold Frames</a>
                        <a href="#">All Items</a>
                    </div>
                </div>


                <a href="#">Bulk Orders</a>
                <a href="#">Jewellery Store Tie-ups</a>
                <a href="#">About Us</a>
                <a href="#">Contact Us</a>
            </nav>
        </>
    );
}
