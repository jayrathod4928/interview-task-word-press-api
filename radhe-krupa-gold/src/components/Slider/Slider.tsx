"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Slider.module.scss";

interface SliderProps {
    children: React.ReactNode[];
    autoplay?: boolean;
    interval?: number;
    showDots?: boolean;
    showArrows?: boolean;
}

export default function Slider({
                                   children,
                                   autoplay = true,
                                   interval = 5000,
                                   showDots = true,
                                   showArrows = true,
                               }: SliderProps) {
    const slides = [
        children[children.length - 1], // clone last
        ...children,
        children[0], // clone first
    ];

    const [index, setIndex] = useState(1);
    const [transition, setTransition] = useState(true);
    const trackRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!autoplay) return;

        const timer = setInterval(() => {
            setIndex((prev) => prev + 1);
        }, interval);

        return () => clearInterval(timer);
    }, [autoplay, interval]);

    useEffect(() => {
        if (index === slides.length - 1) {
            setTimeout(() => {
                setTransition(false);
                setIndex(1);
            }, 500);
        }

        if (index === 0) {
            setTimeout(() => {
                setTransition(false);
                setIndex(slides.length - 2);
            }, 500);
        }

        setTimeout(() => setTransition(true), 600);
    }, [index, slides.length]);

    return (
        <div className={styles.slider}>
            <div
                ref={trackRef}
                className={styles.track}
                style={{
                    transform: `translateX(-${index * 100}%)`,
                    transition: transition ? "transform 0.5s ease-in-out" : "none",
                }}
            >
                {slides.map((slide, i) => (
                    <div className={styles.slide} key={i}>
                        {slide}
                    </div>
                ))}
            </div>

            {showArrows && (
                <>
                    <button
                        className={`${styles.arrow} ${styles.left}`}
                        onClick={() => setIndex((prev) => prev - 1)}
                    >
                        ‹
                    </button>
                    <button
                        className={`${styles.arrow} ${styles.right}`}
                        onClick={() => setIndex((prev) => prev + 1)}
                    >
                        ›
                    </button>
                </>
            )}

            {showDots && (
                <div className={styles.dots}>
                    {children.map((_, i) => (
                        <span
                            key={i}
                            className={`${styles.dot} ${
                                index - 1 === i ? styles.active : ""
                            }`}
                            onClick={() => setIndex(i + 1)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
