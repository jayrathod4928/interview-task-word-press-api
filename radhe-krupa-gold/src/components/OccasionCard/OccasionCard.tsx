// OccasionCard.tsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./OccasionCard.module.scss";
import { OccasionCardData } from "./mock";

export default function OccasionCard({ data }: { data: OccasionCardData }) {

    // We wrap the entire card in a Next.js Link for navigation
    return (
        <Link href={data.linkUrl} className={styles.cardLink}>
            <div className={styles.card}>

                {/* Image Container with onClick functionality and cursor pointer */}
                <div
                    className={styles.imageContainer}
                    // The Link component handles navigation, but cursor is set in SCSS
                >
                    <Image
                        src={data.imageUrl}
                        alt={data.title}
                        // These sizes and priority help Next.js optimize the image loading
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        style={{ objectFit: "cover" }}
                        priority={data.id === 1} // Prioritize the first image
                    />
                    {/* Dark overlay to ensure text visibility */}
                    <div className={styles.overlay}></div>
                </div>

                {/* Title below the image */}
                <h3 className={styles.title}>{data.title}</h3>
            </div>
        </Link>
    );
}

