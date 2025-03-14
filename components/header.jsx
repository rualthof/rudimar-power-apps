'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import siteLogo from 'public/site-logo-light.png';
import linkedinLogo from 'public/logos/linkedin-app-white-icon.svg';
import { use } from 'react';

const navItems = [
    { linkText: 'Home', href: '/' },
    { linkText: 'Carreer', href: '/carreer' },
    { linkText: 'Contact', href: '/contact' },
];

export function Header() {
    const pathname = usePathname();

    return (
        <nav className="flex flex-wrap items-center justify-between gap-4 pt-6 pb-12 sm:pt-12">
            <Link 
                href="/" 
                className="p-2 rounded-xl hover:scale-105 transition-all duration-300"
            >
                <Image 
                    src={siteLogo} 
                    alt="Site logo" 
                    className="w-[140px]" 
                    priority 
                />
            </Link>
            
            <div className="flex items-center gap-8">
                {!!navItems?.length && (
                    <ul className="flex flex-wrap gap-x-6 gap-y-2">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <Link
                                    href={item.href}
                                    className={`inline-block no-underline px-4 py-2 text-gray-200 transition-all duration-300 relative group ${
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
                )}
                
                <div className="flex items-center gap-4">
                    <Link
                        href="https://www.linkedin.com/in/rudimar/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="premium-social-link group"
                    >
                        <Image 
                            src={linkedinLogo} 
                            alt="LinkedIn" 
                            className="w-6 opacity-80 group-hover:opacity-100 transition-opacity" 
                        />
                    </Link>
                </div>
            </div>
        </nav>
    );
}
