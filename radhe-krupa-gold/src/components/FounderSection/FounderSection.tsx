import React from "react";
import Image from "next/image";
import styles from "./FounderSection.module.scss";
import founderImage from "@/components/Images/founder-image.jpg";


const FounderSection: React.FC = () => {
    return (
        <section className={styles.wrapper}>
            {/* Image Section */}
            <div className={styles.imageWrapper}>
                <div className={styles.imageFrame}>
                    <Image
                        src={founderImage} // place image in public/founder.png
                        alt="Chirag Mehta - Founder, Radhe Krupa"
                        fill
                        priority
                    />
                </div>
            </div>

            {/* Text Section */}
            <div className={styles.textSection}>
                <h2>Radhe Krupa</h2>
                <span className={styles.designation}>Founder, Radhe Krupa</span>

                <p>
                    Radhe Krupa brings over 13 years of expertise in the jewelry industry,
                    with a distinguished career that began at Mehta Art Jewellers. As
                    Director, he led the business to new heights, specializing in the
                    trading and manufacturing of premium Kolkata Gold Jewellery.
                </p>

                <p>
                    Chirag founded Sumeru Gold, marking a significant milestone in his
                    professional journey. Radhe Krupa is a testament to his vision—to blend
                    heritage with innovation and deliver gold products that are as
                    trustworthy as they are beautiful.
                </p>

                <div className={styles.links}>
                    <a href="http://linkedin.com/">LinkedIn →</a>
                    <a href="http://gmail.com/">Email →</a>
                </div>
            </div>
        </section>
    );
};

export default FounderSection;
