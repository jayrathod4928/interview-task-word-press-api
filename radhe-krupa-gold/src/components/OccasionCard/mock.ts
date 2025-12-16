// mock.ts

// 🛑 Import the image files as modules (Next.js automatically handles this)
import Wedding from "../Images/Wedding.png";
import Corporate from "../Images/Corporate.png";
import Festival from "../Images/Fesitval.png"; // Note the spelling in your file structure
import Birthday from "../Images/Birthday.png";

// 🛑 FIX: Change the type of imageUrl to handle the imported image module type
// We use 'any' here as the module type is complex, but in a real project,
// you might use import type { StaticImageData } from 'next/image'.
export type OccasionCardData = {
    id: number;
    title: string;
    // FIX: Type must be compatible with the imported image object
    imageUrl: any;
    linkUrl: string;
};

export const OCCASION_MOCK_DATA: OccasionCardData[] = [
    {
        id: 1,
        title: "Weddings & Anniversaries",
        // ✅ FIX: Use the imported image module instead of the string path
        imageUrl: Wedding,
        linkUrl: "/collections/weddings",
    },
    {
        id: 2,
        title: "Birthday parties & Graduation",
        // ✅ FIX: Use the imported image module
        imageUrl: Birthday,
        linkUrl: "/collections/birthdays",
    },
    {
        id: 3,
        title: "Diwali, Rakshabandhan & Festivals",
        // ✅ FIX: Use the imported image module
        imageUrl: Festival,
        linkUrl: "/collections/festivals",
    },
    {
        id: 4,
        title: "Corporate & Employee Rewards",
        // ✅ FIX: Use the imported image module
        imageUrl: Corporate,
        linkUrl: "/collections/corporate",
    },
];