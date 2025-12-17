// mock.ts

export type WeightVariant = {
    weight: string;
    price: string;
};

export type CoinProduct = {
    id: string;
    title: string;
    isCertificate: boolean;
    priceRange: string;
    variants: WeightVariant[];
    initialWeight: string; // Crucial property for fixing TS2339
    imageUrl: string;
};

// Common variants
export const COMMON_WEIGHT_VARIANTS: WeightVariant[] = [
    { weight: "50mg", price: "Rs. 1,145.00" },
    { weight: "100mg", price: "Rs. 1,910.00" },
    { weight: "200mg", price: "Rs. 3,345.00" },
    { weight: "300mg", price: "Rs. 4,775.00" },
    { weight: "500mg", price: "Rs. 7,710.00" },
    { weight: "1000mg", price: "Rs. 14,970.00" },
    { weight: "2000mg", price: "Rs. 29,080.00" },
];


// --- MOCK DATA ---
export const MOCK_PRODUCTS: CoinProduct[] = [
    {
        id: "1",
        title: "GANESH JI",
        isCertificate: true,
        priceRange: "Rs. 1,910.00 - Rs. 139,800.00",
        initialWeight: "0.1gm",
        variants: [
            { weight: "0.1gm", price: "Rs. 1,910.00" },
            { weight: "0.25gm", price: "Rs. 4,035.00" },
            { weight: "0.5gm", price: "Rs. 7,490.00" },
            { weight: "1gm", price: "Rs. 14,980.00" },
            { weight: "2gm", price: "Rs. 1,19,760.00" },
        ],
        imageUrl: "https://earthmintgold.com/cdn/shop/files/Ganeshjicopy_a784d3da-3a91-4ab3-ac97-bf34e3ead3e6.png?crop=center&height=645&v=1757163802&width=645",
    },
    {
        id: "2",
        title: "LAXMI JI",
        isCertificate: true,
        priceRange: "Rs. 1,910.00 - Rs. 139,800.00",
        initialWeight: "0.1gm",
        variants: [
            { weight: "0.1gm", price: "Rs. 1,910.00" },
            { weight: "0.25gm", price: "Rs. 4,035.00" },
            { weight: "0.5gm", price: "Rs. 7,490.00" },
            { weight: "1gm", price: "Rs. 14,980.00" },
        ],
        imageUrl: "https://earthmintgold.com/cdn/shop/files/Laxmijicopy2.png?crop=center&height=645&v=1757163800&width=645",
    },
    {
        id: "3",
        title: "SARASWATI",
        isCertificate: false,
        priceRange: "Rs. 1,145.00 - Rs. 29,080.00",
        initialWeight: "0.1gm",
        variants: COMMON_WEIGHT_VARIANTS,
        imageUrl: "https://earthmintgold.com/cdn/shop/files/Sarasvaticopy_18bc75fc-09ba-4427-8578-1c9fe71186ec.png?crop=center&height=645&v=1757163803&width=645",
    },
    {
        id: "4",
        title: "KALPAVRIKSHA",
        isCertificate: false,
        priceRange: "Rs. 1,145.00 - Rs. 29,080.00",
        initialWeight: "0.25gm",
        variants: COMMON_WEIGHT_VARIANTS,
        imageUrl: "https://earthmintgold.com/cdn/shop/files/Kalpavrikshacopy.png?crop=center&height=645&v=1757163796&width=645",
    },
    {
        id: "5",
        title: "SITA RAM",
        isCertificate: true,
        priceRange: "Rs. 1,910.00 - Rs. 139,800.00",
        initialWeight: "0.5gm",
        variants: COMMON_WEIGHT_VARIANTS,
        imageUrl: "https://earthmintgold.com/cdn/shop/files/DoMurticopy_1123c7c5-90b3-4426-ac8c-e0fec6d5a20d.png?crop=center&height=645&v=1757163798&width=645",
    },
    {
        id: "6",
        title: "HANUMAN",
        isCertificate: false,
        priceRange: "Rs. 1,145.00 - Rs. 29,080.00",
        initialWeight: "0.1gm",
        variants: COMMON_WEIGHT_VARIANTS,
        imageUrl: "https://earthmintgold.com/cdn/shop/files/Balajicopy_e161958c-0234-4d1f-bc10-86b5b333838e.png?crop=center&height=645&v=1757163792&width=645",
    },
    {
        id: "7",
        title: "OM",
        isCertificate: false,
        priceRange: "Rs. 1,145.00 - Rs. 29,080.00",
        initialWeight: "0.25gm",
        variants: COMMON_WEIGHT_VARIANTS,
        imageUrl: "https://earthmintgold.com/cdn/shop/files/Balajicopy_e161958c-0234-4d1f-bc10-86b5b333838e.png?crop=center&height=645&v=1757163792&width=645",
    },
    {
        id: "8",
        title: "MATA JI",
        isCertificate: true,
        priceRange: "Rs. 1,910.00 - Rs. 139,800.00",
        initialWeight: "0.1gm",
        variants: COMMON_WEIGHT_VARIANTS,
        imageUrl: "https://earthmintgold.com/cdn/shop/files/Balajicopy_e161958c-0234-4d1f-bc10-86b5b333838e.png?crop=center&height=645&v=1757163792&width=645",
    },
    {
        id: "9",
        title: "GANESH JI",
        isCertificate: true,
        priceRange: "Rs. 1,910.00 - Rs. 139,800.00",
        initialWeight: "0.1gm",
        variants: [
            { weight: "0.1gm", price: "Rs. 1,910.00" },
            { weight: "0.25gm", price: "Rs. 4,035.00" },
            { weight: "0.5gm", price: "Rs. 7,490.00" },
            { weight: "1gm", price: "Rs. 14,980.00" },
            { weight: "2gm", price: "Rs. 1,19,760.00" },
        ],
        imageUrl: "https://earthmintgold.com/cdn/shop/files/Balajicopy_e161958c-0234-4d1f-bc10-86b5b333838e.png?crop=center&height=645&v=1757163792&width=645",
    },
    {
        id: "10",
        title: "LAXMI JI",
        isCertificate: true,
        priceRange: "Rs. 1,910.00 - Rs. 139,800.00",
        initialWeight: "0.1gm",
        variants: [
            { weight: "0.1gm", price: "Rs. 1,910.00" },
            { weight: "0.25gm", price: "Rs. 4,035.00" },
            { weight: "0.5gm", price: "Rs. 7,490.00" },
            { weight: "1gm", price: "Rs. 14,980.00" },
        ],
        imageUrl: "https://earthmintgold.com/cdn/shop/files/Balajicopy_e161958c-0234-4d1f-bc10-86b5b333838e.png?crop=center&height=645&v=1757163792&width=645",
    },
    {
        id: "11",
        title: "SARASWATI",
        isCertificate: false,
        priceRange: "Rs. 1,145.00 - Rs. 29,080.00",
        initialWeight: "0.1gm",
        variants: COMMON_WEIGHT_VARIANTS,
        imageUrl: "https://earthmintgold.com/cdn/shop/files/Balajicopy_e161958c-0234-4d1f-bc10-86b5b333838e.png?crop=center&height=645&v=1757163792&width=645",
    },
    {
        id: "12",
        title: "KALPAVRIKSHA",
        isCertificate: false,
        priceRange: "Rs. 1,145.00 - Rs. 29,080.00",
        initialWeight: "0.25gm",
        variants: COMMON_WEIGHT_VARIANTS,
        imageUrl: "https://earthmintgold.com/cdn/shop/files/Balajicopy_e161958c-0234-4d1f-bc10-86b5b333838e.png?crop=center&height=645&v=1757163792&width=645",
    },
];