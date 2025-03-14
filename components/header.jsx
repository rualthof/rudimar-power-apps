'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import siteLogo from 'public/site-logo-light.png';
import linkedinLogo from 'public/logos/linkedin-app-white-icon.svg';

const navItems = [
    { linkText: 'Home', href: '/' },
    { linkText: 'Carreer', href: '/carreer' },
    { linkText: 'Contact', href: '/contact' },
];

export function Header() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="relative z-50 mt-4 md:mt-8">
            <div className="flex items-center justify-between px-4 py-4 md:px-6">
                <Link href="/" className="hover:opacity-90 transition-duration-300">
                    <Image 
                        src={siteLogo} 
                        alt="Site logo" 
                        className="w-[120px] md:w-[140px]" 
                        priority 
                    />
                </Link>

                {/* Mobile Menu Button */}
                <button
                    className="p-2 md:hidden text-gold hover:text-gold/80 transition-colors"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? '✕' : '☰'}
                </button>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    <ul className="flex gap-x-6">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <Link
                                    href={item.href}
                                    className={`px-3 py-2 no-underline text-gray-200 transition-colors relative group ${
                                        pathname === item.href ? 'text-gold' : 'hover:text-gold'
                                    }`}
                                >
                                    {item.linkText}
                                    <span className={`absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-gold/0 via-gold/50 to-gold/0 transform ${
                                        pathname === item.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                                    } transition-transform duration-300`} />
                                </Link>
                            </li>
                        ))}
                    </ul>
                    
                    <Link
                        href="https://www.linkedin.com/in/rudimar/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="premium-social-link"
                    >
                        <Image 
                            src={linkedinLogo} 
                            alt="LinkedIn" 
                            className="w-6 opacity-80 hover:opacity-100 transition-opacity" 
                        />
                    </Link>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="absolute inset-x-0 top-full premium-card md:hidden">
                    <ul className="py-4 px-6 space-y-4">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <Link
                                    href={item.href}
                                    className={`block px-3 py-2 text-gray-200 transition-colors ${
                                        pathname === item.href ? 'text-gold' : 'hover:text-gold'
                                    }`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.linkText}
                                </Link>
                            </li>
                        ))}
                        <li className="pt-4 border-t border-gold/10">
                            <Link
                                href="https://www.linkedin.com/in/rudimar/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="premium-social-link inline-flex items-center gap-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <Image 
                                    src={linkedinLogo} 
                                    alt="LinkedIn" 
                                    className="w-5" 
                                />
                                <span>LinkedIn</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}
