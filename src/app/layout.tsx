import { Providers } from '@/components/Providers';
import Header from '@/components/Header'; // Import the new header
import './globals.css';

export const metadata = {
    title: {
        default: 'WPFlow | Modern Insights',
        template: '%s | WPFlow',
    },
    description: 'A high-performance blog built with Next.js and WordPress.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className="antialiased bg-gray-50/30">
        <Providers>
            <Header />
            <main className="min-h-[calc(100vh-64px)]">
                {children}
            </main>
        </Providers>
        </body>
        </html>
    );
}