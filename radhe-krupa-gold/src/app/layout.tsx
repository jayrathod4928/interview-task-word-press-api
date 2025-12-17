import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Import your components
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Earth Mint Gold",
    description: "Gold production and development company",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Header appears at the top of every page */}
        <Header />

        {/* Main content of each page is injected here */}
        <main style={{ minHeight: '70vh' }}>
            {children}
        </main>

        {/* Footer appears at the bottom of every page */}
        <Footer />
        </body>
        </html>
    );
}