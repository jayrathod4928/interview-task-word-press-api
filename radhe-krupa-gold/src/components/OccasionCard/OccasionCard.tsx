// OccasionCard.tsx (FIXED)
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./OccasionCard.module.scss";
import { OccasionCardData } from "./mock";

export default function OccasionCard({ data }: { data: OccasionCardData }) {

    return (
        <Link href={data.linkUrl} className={styles.cardLink}>

            <div className={styles.imageContainer}>

                <Image
                    src={data.imageUrl}
                    alt={data.title}

                    // 🛑 FIX APPLIED: Removed redundant width and height props
                    // width={500}
                    // height={500}

                    fill // <-- KEEP THIS to make the image fill the container
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    style={{ objectFit: "cover" }}
                    priority={data.id === 1}
                />

                <div className={styles.overlay}></div>
            </div>

            <h3 className={styles.title}>{data.title}</h3>

        </Link>
    );
}