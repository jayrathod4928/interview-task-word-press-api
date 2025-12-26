'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Blog', href: '/blogs' },
        { name: 'About', href: '/about' },
    ];

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">

                {/* Logo Section */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold group-hover:rotate-6 transition-transform">
                        W
                    </div>
                    <span className="text-xl font-bold tracking-tight text-gray-900">
                        WP<span className="text-blue-600">Flow</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                                    isActive ? 'text-blue-600' : 'text-gray-600'
                                }`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>

                {/* Mobile Menu Button (Hamburger) */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={toggleMenu}
                        className="p-2 text-gray-600 hover:text-blue-600 focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isMenuOpen && (
                <nav className="md:hidden bg-white border-b border-gray-100 animate-in slide-in-from-top duration-300">
                    <div className="flex flex-col p-4 space-y-4">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`text-base font-semibold transition-colors ${
                                        isActive ? 'text-blue-600' : 'text-gray-600'
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </div>
                </nav>
            )}
        </header>
    );
}