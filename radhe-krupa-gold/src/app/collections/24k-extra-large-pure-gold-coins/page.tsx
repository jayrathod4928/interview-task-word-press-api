import React from "react";
import Header from "@/components/Header/Header";
import ProductVariantCard from "@/components/ProductVariantCard/ProductVariantCard";
import styles from "@/app/page.module.scss";

// Use your ProductVariant mock data
import { MOCK_PRODUCTS } from "@/components/ProductVariantCard/Mock";

export default function LargeSolidGoldCoinsPage() {
    return (
        <>
            <main style={{ paddingTop: "2rem" }}>
                <section className={styles.coinSection}>
                    <div className={styles.sectionHeader}>
                        <h1>24k Large Solid Gold Coins</h1>
                        <p>Viewing all {MOCK_PRODUCTS.length} products</p>
                    </div>

                    {/* Show ALL products (no slice) */}
                    <div className={styles.grid}>
                        {MOCK_PRODUCTS.map((product) => (
                            <ProductVariantCard key={product.id} data={product} />
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
}
