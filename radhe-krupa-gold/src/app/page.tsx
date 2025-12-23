// page.tsx (Final Code with LandingSection)

import Link from "next/link";
import Image from "next/image";
import Slider from "@/components/Slider/Slider";
import CoinCard from "@/components/CoinCard/CoinCard";
import ProductVariantSection from "@/components/ProductVariantCard/ProductVariantSection";
import OccasionGrid from "@/components/OccasionCard/OccasionGrid/OccasionGrid";


// Mock Data Imports
import { OCCASION_MOCK_DATA } from "@/components/OccasionCard/mock";
import { MOCK_PRODUCTS as COIN_PRODUCTS } from "@/data/mock";
import { MOCK_PRODUCTS as VARIANT_PRODUCTS } from "@/data/mock";

import styles from "./page.module.scss";

// Slider images
import slide1 from "@/components/Images/Slide-4.jpg";
import slide2 from "@/components/Images/Slide-5.jpg";
import Hero from "@/components/Hero/Hero";
import LuxuryGoldSection from "@/components/LuxuryGoldSection/LuxuryGoldSection";
import WhyUsSection from "@/components/WhyUsSection/WhyUsSection";
import TestimonialSlider from "@/components/TestimonialSlider/TestimonialSlider";
import MapComponent from "@/components/MapComponent/MapComponent";

export default function Page() {
    /* ===============================
       COIN CARD DATA
       =============================== */
    const COIN_VISIBLE_LIMIT = 8;
    const displayedCoinProducts = COIN_PRODUCTS.slice(0, COIN_VISIBLE_LIMIT);
    const showCoinViewMore = COIN_PRODUCTS.length > COIN_VISIBLE_LIMIT;

    return (
        <>
            <main>
                {/* ===== SLIDER ===== */}
                <Slider autoplay interval={4000}>
                    <Image
                        src={slide1}
                        alt="Slide 1"
                        priority
                        style={{ width: "100%", height: "auto", objectFit: "cover" }}
                    />
                    <Image
                        src={slide2}
                        alt="Slide 2"
                        style={{ width: "100%", height: "auto", objectFit: "cover" }}
                    />
                </Slider>

                {/* ===== COIN CARD SECTION ===== */}
                <section className={styles.coinSection}>
                    <div className={styles.sectionHeader}>
                        <h2>Extra Large Slim Gold Coins</h2>
                        <p>Sleek in Form, Grand in Value</p>
                    </div>

                    <div className={styles.grid}>
                        {displayedCoinProducts.map((product) => (
                            <CoinCard key={product.id} data={product} />
                        ))}
                    </div>


                    {showCoinViewMore && (
                        <div className={styles.viewMoreContainer}>
                            <Link
                                href="/collections/24k-extra-large-pure-gold-coins"
                                className={styles.viewMoreBtn}
                            >
                                View More
                            </Link>
                        </div>
                    )}
                </section>

                {/* 🛑 NEW SECTION: Occasion Grid at the bottom */}
                <section className={styles.occasionSection}>
                    {/* Optionally, you can add a title here if the OccasionGrid component
                       itself doesn't include one, but typically it would. */}
                    <OccasionGrid data={OCCASION_MOCK_DATA} />
                </section>

                {/* 🛑 NEW SECTION: High Finish Product Banner (HighFinishSection) */}
                <section className={"mb-5"}>
                <Hero />
                </section>

                <section>
                    {/* Optionally, you can add a title here if the OccasionGrid component
                       itself doesn't include one, but typically it would. */}
                    <LuxuryGoldSection />
                </section>

                <section>
                    {/* Optionally, you can add a title here if the OccasionGrid component
                       itself doesn't include one, but typically it would. */}
                    <WhyUsSection />
                </section>

                {/* ===== PRODUCT VARIANT CARD SECTION (REUSABLE) ===== */}
                <ProductVariantSection
                    title="Large Solid Gold Coins"
                    subtitle="Make a Statement with Solid Gold"
                    products={VARIANT_PRODUCTS}
                    visibleLimit={8}
                    viewMoreLink="/collections/24k-extra-large-pure-gold-coins"
                />

                <TestimonialSlider />
                <section>

                </section>
                <MapComponent />
                <section>

                </section>
            </main>
        </>
    );
}