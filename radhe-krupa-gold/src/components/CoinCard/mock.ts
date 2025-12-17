// src/data/mock.ts

export interface WeightVariant {
    weight: string;
    price: string;
}

export interface CoinProduct {
    id: string;
    title: string;
    imageUrl: string;
    isCertificate: boolean;
    priceRange: string; // Added this back for the default state
    variants: WeightVariant[];
}

export const WEIGHT_VARIANTS: WeightVariant[] = [
    { weight: "50mg", price: "Rs. 1,145.00" },
    { weight: "100mg", price: "Rs. 1,910.00" },
    { weight: "200mg", price: "Rs. 3,345.00" },
    { weight: "300mg", price: "Rs. 4,775.00" },
    { weight: "500mg", price: "Rs. 7,710.00" },
    { weight: "1000mg", price: "Rs. 14,970.00" },
    { weight: "2000mg", price: "Rs. 29,080.00" },
];

export const MOCK_PRODUCTS: CoinProduct[] = [
    {
        id: "1",
        title: "GANESH JI",
        // This is the string shown BEFORE selection
        priceRange: "Rs. 1,145.00 - Rs. 29,080.00",
        imageUrl: "https://earthmintgold.com/cdn/shop/files/24k_Laxmi_Ganesh_Gold_Coin.png?crop=center&height=645&v=1758634770&width=645",
        isCertificate: true,
        variants: WEIGHT_VARIANTS,
    },
    {
        id: "2",
        title: "LAXMI JI",
        priceRange: "Rs. 1,145.00 - Rs. 29,080.00",
        imageUrl: "https://earthmintgold.com/cdn/shop/files/9_88d566e8-f2fa-4dcd-acfe-05e8e548dba6.png?crop=center&height=645&v=1757163818&width=645",
        isCertificate: false,
        variants: WEIGHT_VARIANTS,
    },
    {
        id: "3",
        title: "DO MURTI",
        priceRange: "Rs. 1,145.00 - Rs. 29,080.00",
        imageUrl: "https://earthmintgold.com/cdn/shop/files/7_0f066055-cd3a-4525-89a9-f901747544d4.png?crop=center&height=645&v=1757163816&width=645",
        isCertificate: false,
        variants: WEIGHT_VARIANTS,
    },
    {
        id: "4",
        title: "KALPAVRIKSHA",
        priceRange: "Rs. 1,145.00 - Rs. 29,080.00",
        imageUrl: "https://earthmintgold.com/cdn/shop/files/7_0f066055-cd3a-4525-89a9-f901747544d4.png?crop=center&height=645&v=1757163816&width=645",
        isCertificate: false,
        variants: WEIGHT_VARIANTS,
    },
    {
        id: "5",
        title: "GANESH JI",
        // This is the string shown BEFORE selection
        priceRange: "Rs. 1,145.00 - Rs. 29,080.00",
        imageUrl: "https://earthmintgold.com/cdn/shop/files/7_0f066055-cd3a-4525-89a9-f901747544d4.png?crop=center&height=645&v=1757163816&width=645",
        isCertificate: true,
        variants: WEIGHT_VARIANTS,
    },
    {
        id: "6",
        title: "LAXMI JI",
        priceRange: "Rs. 1,145.00 - Rs. 29,080.00",
        imageUrl: "https://earthmintgold.com/cdn/shop/files/7_0f066055-cd3a-4525-89a9-f901747544d4.png?crop=center&height=645&v=1757163816&width=645",
        isCertificate: false,
        variants: WEIGHT_VARIANTS,
    },
    {
        id: "7",
        title: "DO MURTI",
        priceRange: "Rs. 1,145.00 - Rs. 29,080.00",
        imageUrl: "https://earthmintgold.com/cdn/shop/files/7_0f066055-cd3a-4525-89a9-f901747544d4.png?crop=center&height=645&v=1757163816&width=645",
        isCertificate: false,
        variants: WEIGHT_VARIANTS,
    },
    {
        id: "8",
        title: "KALPAVRIKSHA",
        priceRange: "Rs. 1,145.00 - Rs. 29,080.00",
        imageUrl: "https://earthmintgold.com/cdn/shop/files/7_0f066055-cd3a-4525-89a9-f901747544d4.png?crop=center&height=645&v=1757163816&width=645",
        isCertificate: false,
        variants: WEIGHT_VARIANTS,
    },
    {
        id: "9",
        title: "GANESH JI",
        // This is the string shown BEFORE selection
        priceRange: "Rs. 1,145.00 - Rs. 29,080.00",
        imageUrl: "https://earthmintgold.com/cdn/shop/files/9_88d566e8-f2fa-4dcd-acfe-05e8e548dba6.png?crop=center&height=645&v=1757163818&width=645",
        isCertificate: true,
        variants: WEIGHT_VARIANTS,
    },
    {
        id: "10",
        title: "LAXMI JI",
        priceRange: "Rs. 1,145.00 - Rs. 29,080.00",
        imageUrl: "https://earthmintgold.com/cdn/shop/files/9_88d566e8-f2fa-4dcd-acfe-05e8e548dba6.png?crop=center&height=645&v=1757163818&width=645",
        isCertificate: false,
        variants: WEIGHT_VARIANTS,
    },
    {
        id: "11",
        title: "DO MURTI",
        priceRange: "Rs. 1,145.00 - Rs. 29,080.00",
        imageUrl: "https://earthmintgold.com/cdn/shop/files/9_88d566e8-f2fa-4dcd-acfe-05e8e548dba6.png?crop=center&height=645&v=1757163818&width=645",
        isCertificate: false,
        variants: WEIGHT_VARIANTS,
    },
    {
        id: "12",
        title: "KALPAVRIKSHA",
        priceRange: "Rs. 1,145.00 - Rs. 29,080.00",
        imageUrl: "https://earthmintgold.com/cdn/shop/files/9_88d566e8-f2fa-4dcd-acfe-05e8e548dba6.png?crop=center&height=645&v=1757163818&width=645",
        isCertificate: false,
        variants: WEIGHT_VARIANTS,
    },
];