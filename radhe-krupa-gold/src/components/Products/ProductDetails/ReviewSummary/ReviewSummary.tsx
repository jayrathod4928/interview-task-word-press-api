"use client";

import React, { useState } from "react";
import { FaStar, FaRegStar, FaUpload } from "react-icons/fa";
import styles from "./ReviewSummary.module.scss";

const ReviewSummary = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [ratings, setRatings] = useState({ quality: 5, packaging: 5, delivery: 5 });

    const ratingCategories = [
        { key: "quality", label: "Product Quality" },
        { key: "packaging", label: "Packaging" },
        { key: "delivery", label: "Delivery Speed" },
    ];

    const handleStarClick = (category: string, value: number) => {
        setRatings((prev) => ({ ...prev, [category]: value }));
    };

    return (
        <div className={styles.reviewContainer}>
            <h2 className={styles.mainHeading}>Customer Reviews</h2>

            {/* SUMMARY VIEW - ALWAYS VISIBLE */}
            <div className={styles.summaryGrid}>
                <div className={styles.averageSection}>
                    <div className={styles.starsRow}>
                        {[...Array(5)].map((_, i) => <FaRegStar key={i} />)}
                    </div>
                    <p className={styles.scoreText}>0 out of 5</p>
                    <p className={styles.basedOn}>Based on 0 reviews</p>
                    <a href="#" className={styles.easyReviews}>Collected by EasyReviews</a>
                </div>

                <div className={styles.barsSection}>
                    {[5, 4, 3, 2, 1].map((stars) => (
                        <div key={stars} className={styles.barRow}>
                            <div className={styles.starIcons}>
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} className={i < stars ? styles.filledStar : styles.fadedStar} />
                                ))}
                            </div>
                            <div className={styles.track}>
                                <div className={styles.filler} style={{ width: '0%' }}></div>
                            </div>
                            <span className={styles.count}>0</span>
                        </div>
                    ))}
                </div>

                <div className={styles.actionSection}>
                    <button
                        className={styles.toggleBtn}
                        onClick={() => setIsFormOpen(!isFormOpen)}
                    >
                        {isFormOpen ? "Cancel review" : "Write a review"}
                    </button>
                </div>
            </div>

            {/* CONDITIONAL FORM - OPENS BELOW SUMMARY */}
            {isFormOpen && (
                <div className={styles.formContainer}>
                    <hr className={styles.divider} />
                    <h3 className={styles.formTitle}>Write a review</h3>

                    <div className={styles.ratingSection}>
                        <h4>Rating</h4>
                        {ratingCategories.map((cat) => (
                            <div key={cat.key} className={styles.ratingRow}>
                                <span>{cat.label}</span>
                                <div className={styles.interactiveStars}>
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <FaStar
                                            key={star}
                                            className={star <= (ratings as never)[cat.key] ? styles.filledStar : styles.fadedStar}
                                            onClick={() => handleStarClick(cat.key, star)}
                                        />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className={styles.inputGroup}>
                        <label>Review</label>
                        <textarea placeholder="Share details of your experience" rows={5} />
                    </div>

                    <div className={styles.inputGroup}>
                        <label>Review Title</label>
                        <input type="text" placeholder="Give your review a title" />
                    </div>

                    <div className={styles.inputGroup}>
                        <label>Photo (optional)</label>
                        <label className={styles.uploadBox}>
                            <FaUpload />
                            <input type="file" hidden />
                        </label>
                    </div>

                    <div className={styles.inputGroup}>
                        <label>Your Name</label>
                        <input type="text" placeholder="Enter your name" />
                    </div>

                    <div className={styles.inputGroup}>
                        <label>Your Email</label>
                        <input type="email" placeholder="Enter your email address (not shown to public)" />
                    </div>

                    <div className={styles.formActions}>
                        <button className={styles.cancelFormBtn} onClick={() => setIsFormOpen(false)}>
                            Cancel review
                        </button>
                        <button className={styles.submitBtn}>
                            Submit review
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ReviewSummary;