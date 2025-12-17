"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, ShoppingBag } from "lucide-react";
import styles from "./CoinCard.module.scss";
import { CoinProduct, WeightVariant } from "./mock";

export default function CoinCard({ data }: { data: CoinProduct }) {
    const [selectedVariant, setSelectedVariant] = useState<WeightVariant>(data.variants[0]);
    const [hasSelected, setHasSelected] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (variant: WeightVariant) => {
        setSelectedVariant(variant);
        setHasSelected(true);
        setIsOpen(false);
    };

    return (
        <div className={styles.card}>
            {/* IMAGE */}
            <div className={styles.imageContainer}>
                <Image
                    src={data.imageUrl}
                    alt={data.title}
                    fill
                    className={styles.productImage}
                    sizes="(max-width: 768px) 100vw, 33vw"
                />

                {/* Optional certificate badge */}
                {data.isCertificate && (
                    <span className={styles.badge}>CERTIFICATE</span>
                )}
            </div>

            <div className={styles.actions}>
                <div className={styles.dropdownWrapper}>
                    <button
                        type="button"
                        className={styles.dropdownBtn}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {selectedVariant.weight}
                        <ChevronDown size={16} />
                    </button>

                    {isOpen && (
                        <ul className={styles.dropdownMenu}>
                            {data.variants.map((variant) => (
                                <li
                                    key={variant.weight}
                                    onClick={() => handleSelect(variant)}
                                >
                                    {variant.weight}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                <button type="button" className={styles.cartBtn}>
                    <ShoppingBag color="white" size={20} />
                </button>
            </div>

            <div className={styles.details}>
                <h3>{data.title}</h3>
                <p className={styles.price}>
                    {hasSelected ? selectedVariant.price : data.priceRange}
                </p>
            </div>
        </div>
    );
}
