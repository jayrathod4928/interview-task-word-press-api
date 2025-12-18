"use client";

import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, ShoppingBag } from "lucide-react";
import styles from "./ProductVariantCard.module.scss";
import { CoinProduct, WeightVariant } from "./Mock";
import Image from "next/image";

export default function ProductVariantCard({ data }: { data: CoinProduct }) {
    const initialVariant =
        data.variants.find(v => v.weight === data.initialWeight) ||
        data.variants[0];

    const [selectedVariant, setSelectedVariant] = useState<WeightVariant>(initialVariant);
    const [hasSelected, setHasSelected] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

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
                    alt={`${data.title} gold coin`}
                    className={styles.productImage}
                />
            </div>

            {/* ACTIONS */}
            <div className={styles.actions}>
                <div className={styles.dropdownWrapper} ref={dropdownRef}>
                    <button
                        type="button"
                        className={styles.dropdownBtn}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {selectedVariant.weight}
                        <ChevronDown
                            size={16}
                            style={{
                                transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                                transition: "0.2s",
                            }}
                        />
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

            {/* DETAILS */}
            <div className={styles.details}>
                <h3>{data.title}</h3>
                <p className={styles.price}>
                    {hasSelected ? selectedVariant.price : data.priceRange}
                </p>
                <p className={styles.purity}>999.9 Purity</p>
            </div>
        </div>
    );
}
