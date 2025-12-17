"use client";
import React, { useState, useEffect } from 'react';
import styles from './TestimonialSlider.module.scss';

interface Testimonial {
    id: number;
    title: string;
    quote: string;
    author: string;
    location: string;
    rating: number;
}

// Four testimonials
const testimonials: Testimonial[] = [
    {
        id: 1,
        title: "Perfect for my daughter’s wedding.",
        quote: "We gave EarthMint gold coins as return gifts at my daughter’s wedding, and everyone loved them. The designs were elegant, and the quality was amazing. It really added a special touch.",
        author: "Meena Agarwal",
        location: "Mumbai",
        rating: 5
    },
    {
        id: 2,
        title: "Felt safe buying gold online.",
        quote: "It was my first time buying gold online, but EarthMint made it easy. The coin came with proper certification and exact weight. I really liked that they offer a 100% buyback guarantee.",
        author: "Priya Deshpande",
        location: "Pune",
        rating: 5
    },
    {
        id: 3,
        title: "Exactly what I was looking for.",
        quote: "I wanted a unique and premium gift for my parents’ anniversary. The gold frame from EarthMint was just perfect - meaningful, and beautifully crafted.",
        author: "Sonal Verma",
        location: "Jaipur",
        rating: 5
    },
    {
        id: 4,
        title: "Felt proud gifting something so meaningful.",
        quote: "I ordered a gold coin from Earth Mint for my father’s 60th birthday. The look on his face when he opened it was priceless. It wasn’t just a gift—it felt like a memory made in gold.",
        author: "Neha Rathi",
        location: "Hyderabad",
        rating: 5
    }
];

const TestimonialSlider: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalSlides = Math.ceil(testimonials.length / 2);

    const nextSlide = () => {
        setCurrentIndex(prev => (prev === totalSlides - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex(prev => (prev === 0 ? totalSlides - 1 : prev - 1));
    };

    // Auto-slide every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000); // 5000ms = 5 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <section className={styles.container}>
            <div className={styles.header}>
                <h2>Testimonials</h2>
                <p>Trusted by Families, Celebrated Across Occasions</p>
            </div>

            <div className={styles.sliderWrapper}>
                <div
                    className={styles.track}
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {[...Array(totalSlides)].map((_, slideIndex) => (
                        <div key={slideIndex} className={styles.slide}>
                            {testimonials
                                .slice(slideIndex * 2, slideIndex * 2 + 2)
                                .map(item => (
                                    <div key={item.id} className={styles.card}>
                                        <h3>{item.title}</h3>
                                        <p className={styles.quote}>{item.quote}</p>
                                        <div className={styles.cardFooter}>
                                            <div className={styles.stars}>
                                                {"★".repeat(item.rating)}
                                            </div>
                                            <span className={styles.author}>
                                                {item.author}, {item.location}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.controls}>
                <button onClick={prevSlide} className={styles.arrow}>&lt;</button>
                <span className={styles.pageNumber}>
                    {currentIndex + 1} / {totalSlides}
                </span>
                <button onClick={nextSlide} className={styles.arrow}>&gt;</button>
            </div>
        </section>
    );
};

export default TestimonialSlider;
