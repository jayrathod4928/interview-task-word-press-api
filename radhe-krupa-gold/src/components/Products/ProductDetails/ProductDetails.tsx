"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { FaChevronDown, FaLock  } from "react-icons/fa";
import {
    ChevronLeft,
    ChevronRight,
    Share2,
} from "lucide-react";
import styles from "./ProductDetails.module.scss";
import { CoinProduct, WeightVariant } from "@/data/mock";
import ReviewSummary from "./ReviewSummary/ReviewSummary";

export default function ProductDetails({ product }: { product: CoinProduct }) {
    const [selectedVariant, setSelectedVariant] = useState<WeightVariant>(
        product.variants[0]
    );
    const [activeIndex, setActiveIndex] = useState(0);
    const [showDesc, setShowDesc] = useState(false);

    const scrollRef = useRef<HTMLDivElement>(null);

    const showThumbNav = product.imageUrls.length > 5;
    const activeImage = product.imageUrls[activeIndex];

    const scroll = (dir: "left" | "right") => {
        scrollRef.current?.scrollBy({
            left: dir === "left" ? -200 : 200,
            behavior: "smooth",
        });
    };

    return (
        <>
        <div className={styles.container}>
            {/* GALLERY */}
            <div className={styles.gallery}>
                <div className={styles.mainImage}>
                    <Image src={activeImage} alt={product.title} fill className={styles.containImg} />
                </div>

                <div className={styles.thumbnailWrapper}>
                    {showThumbNav && (
                        <button className={`${styles.navBtn} ${styles.left}`} onClick={() => scroll("left")}>
                            <ChevronLeft />
                        </button>
                    )}

                    <div className={styles.thumbnailRow} ref={scrollRef}>
                        {product.imageUrls.map((img, i) => (
                            <div
                                key={i}
                                className={`${styles.thumb} ${i === activeIndex ? styles.activeThumb : ""}`}
                                onClick={() => setActiveIndex(i)}
                            >
                                <Image src={img} alt="" fill className={styles.containImgThumb} />
                            </div>
                        ))}
                    </div>

                    {showThumbNav && (
                        <button className={`${styles.navBtn} ${styles.right}`} onClick={() => scroll("right")}>
                            <ChevronRight />
                        </button>
                    )}
                </div>
            </div>

            {/* DETAILS */}
            <div className={styles.details}>
                <h1 className={styles.title}>{product.title}</h1>
                <p className={styles.price}>{selectedVariant.price}</p>

                {/* WEIGHTS */}
                <h5 className={styles.weightTitle}>Weight</h5>
                <div className={styles.weights}>
                    {product.variants.map((v) => (
                        <button
                            key={v.weight}
                            className={`${styles.weightCard} ${
                                v.weight === selectedVariant.weight ? styles.selected : ""
                            }`}
                            onClick={() => setSelectedVariant(v)}
                        >
                            <div className={styles.weightImg}>
                                {v.image && (
                                    <Image
                                        src={v.image}
                                        alt={v.weight}
                                        fill
                                    />
                                )}
                            </div>
                            <span className={styles.weightText}>{v.weight}</span>
                        </button>
                    ))}
                </div>


                {/* CART */}
                <div className={styles.cartRow}>
                    <input type="number" min={1} defaultValue={1} />
                    <button className={styles.addToCartBtn}>Add to cart</button>
                </div>

                <div className={styles.metaRow}>
                    <span>SKU: ES-BL-1</span>
                    <Share2 size={16} />
                </div>

                {/* TRUST IMAGE */}
                <div className={styles.trustImage}>
                    <Image
                        src="https://cdn.shopify.com/s/files/1/0657/9391/7063/files/We_Are_Available_on_580_x_90_px_580_x_110_px_580_x_130_px.png?v=1749038697"
                        alt="Trust Badges"
                        width={580}
                        height={130}
                        className={styles.trustImg}
                        priority
                    />
                </div>


                <div className={styles.description}>
                    <button onClick={() => setShowDesc(!showDesc)}>
                        <span>Description</span>
                        <FaChevronDown
                            className={`${styles.chevron} ${showDesc ? styles.open : ""}`}
                        />
                    </button>

                    {showDesc && (
                        <div className={styles.descContent}>
                            <p><b>Extra-Large Slim Gold Coin</b></p>
                            <p><b>Purity</b> – Made from 24K (999) pure gold.</p>
                            <p><b>Weight Tolerance</b> – ZERO tolerance policy.</p>
                            <p><b>Certified by Earthmined</b> – sealed pack.</p>
                            <p><b>Buyback Guarantee </b> – 100% buyback as per brand policy.</p>
                            <p><b>Ideal for</b>– Perfect for festivals, religious occasions, and gifting.</p>
                        </div>
                    )}
                </div>

                {/* PAYMENT */}
                <div className={styles.payment}>
                    <FaLock className={styles.lockIcon} />
                    <div className={styles.left}>
                        <span>Guaranteed <b>secure & safe</b> checkout</span>
                    </div>
                    <img
                        src="https://earthmintgold.com/cdn/shop/files/Untitled_240_x_240_px.png?v=1749623514&width=145"
                        alt="Razorpay"
                        className={styles.razorpayLogo}
                    />
                </div>
            </div>
        </div>
            <ReviewSummary />
        </>
    );
}
