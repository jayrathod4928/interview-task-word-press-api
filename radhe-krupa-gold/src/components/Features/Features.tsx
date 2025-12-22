import Image from "next/image";
import styles from "./Features.module.scss";

const features = [
    {
        icon: "https://earthmintgold.com/cdn/shop/files/1_eb230ea1-e16b-4e66-8e45-405da6bd5cdf.png?v=1749536600&width=1000",
        title: "Bulk Orders",
        description:
            "Planning a grand celebration or corporate event? Make it unforgettable with Earth Mint’s 24K certified gold coins and custom frames—the ultimate symbol of appreciation and prestige.",
    },
    {
        icon: "https://earthmintgold.com/cdn/shop/files/2_4718eed5-7924-4fe1-abe0-3e86dbd299d0.png?v=1749536620&width=620",
        title: "Partner With Us",
        description:
            "Join hands with Earth Mint as a trusted distributor or gifting partner. We’re looking to collaborate with like-minded businesses, Jewellery Stores and event planners who share our passion.",
    },
    {
        icon: "https://earthmintgold.com/cdn/shop/files/3_0f5562c3-6f9d-470b-a465-d1759fb485fd.png?v=1749536639&width=620",
        title: "100% Buyback",
        description:
            "At Earth Mint, we believe that owning gold should come with complete peace of mind. That’s why we offer a 100% Buyback Guarantee on all our 24K (999) gold coins.",
    },
];

const Features = () => {
    return (
        <section className={styles.container}>
            <div className={styles.wrapper}>
                {features.map((item, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.icon}>
                            <Image src={item.icon} alt={item.title} width={280} height={200} />
                        </div>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;
