"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./SampleDesigns.module.scss";

// Replace these with your actual image paths
import maroonCard from "@/components/Images/Maroon-Card.jpg";
import goldCard from "@/components/Images/Gold-Card.jpg";

type Slide = {
    id: number;
    front: StaticImageData | string;
    back: StaticImageData | string;
};

const slides: Slide[] = [
    { id: 1, front: maroonCard, back: goldCard }, // Example paths from your video
    { id: 2, front: goldCard, back: maroonCard },
    { id: 3, front: maroonCard, back: goldCard },
    { id: 4, front: goldCard, back: maroonCard },
];


export default function SampleDesigns() {
    const [[page, direction], setPage] = useState([0, 0]);
    const index = Math.abs(page % slides.length);

    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection]);
    };

    // Variants for the slide animation
    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 200 : -200,
            opacity: 0,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 200 : -200,
            opacity: 0,
        }),
    };

    return (
        <section className={styles.wrapper}>
            <h2 className={styles.title}>Sample Designs</h2>

            <div className={styles.sliderContainer}>
                <button className={styles.navButton} onClick={() => paginate(-1)}>‹</button>

                <div className={styles.viewport}>
                    <AnimatePresence initial={false} custom={direction} mode="wait">
                        <motion.div
                            key={page}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: 'keyframes', stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 },
                            }}
                            className={styles.slidePair}
                        >
                            <div className={styles.card}>
                                <Image src={slides[index].front} alt="Front" fill className={styles.image} />
                            </div>
                            <div className={styles.card}>
                                <Image src={slides[index].back} alt="Back" fill className={styles.image} />
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <button className={styles.navButton} onClick={() => paginate(1)}>›</button>
            </div>

            <div className={styles.pagination}>
                {slides.map((_, i) => (
                    <button
                        key={i}
                        className={`${styles.dot} ${i === index ? styles.active : ""}`}
                        onClick={() => {
                            const dir = i > index ? 1 : -1;
                            setPage([i, dir]);
                        }}
                    >
                        {String(i + 1).padStart(2, "0")}
                    </button>
                ))}
            </div>
        </section>
    );
}