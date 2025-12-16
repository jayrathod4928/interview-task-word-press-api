// File: `src/components/Header/Header.tsx`
"use client";

import { useState } from "react";
import styles from "./Header.module.scss";
import Image from "next/image";
import Logo from "@/components/Images/Radhe-Krupa-Gold.png";
import MenuIcon from "@/components/Icons/MenuIcon";
import CloseIcon from "@/components/Icons/CloseIcon";
import SearchIcon from "@/components/Icons/SearchIcon";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <header className={styles.header}>
                {/* ===== TOP BAR ===== */}
                <div className={styles.topBar}>
                    <div className={styles.leftIcons}>
                        {/* Mobile menu toggle on left */}
                        <button
                            className={styles.menuToggle}
                            onClick={() => setMenuOpen(true)}
                            aria-label="Open menu"
                        >
                            <MenuIcon />
                        </button>

                        {/* Search Icon */}
                        <button className={styles.iconBtn} aria-label="Search">
                            <SearchIcon width={20} height={20} />
                        </button>
                    </div>

                    {/* Center Logo */}
                    <div className={styles.logo}>
                        <Image
                            src={Logo}
                            alt="Radhe Krupa Logo"
                            width={60}
                            height={60}
                            priority
                        />
                        <span>Radhe Krupa</span>
                    </div>

                    {/* Right */}
                    <div className={styles.rightIcons}>
                        <button className={styles.iconBtn} aria-label="Account">👤</button>
                        <button className={styles.iconBtn} aria-label="Cart">
                            👜
                            <span className={styles.badge}>0</span>
                        </button>
                    </div>
                </div>

                {/* ===== DESKTOP NAV BAR ===== */}
                <nav className={styles.desktopNav}>
                    <a className={styles.active} href="#">Home</a>

                    <div className={styles.dropdown}>
                        <a href="#">
                            Products <span className={styles.arrow}>▼</span>
                        </a>
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
                <a href="#">Products</a>
                <a href="#">Bulk Orders</a>
                <a href="#">Jewellery Store Tie-ups</a>
                <a href="#">About Us</a>
                <a href="#">Contact Us</a>
            </nav>
        </>
    );
}
