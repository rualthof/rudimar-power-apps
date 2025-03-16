import Link from 'next/link';
import Image from 'next/image';
import { socialLinks } from '../data/social';

export function Footer() {
    return (
        <footer className="pt-16 pb-12 sm:pt-24 sm:pb-16">
            <div className="max-w-4xl mx-auto px-6">
                <div className="flex justify-center gap-6">
                    {socialLinks.map((link, index) => (
                        <Link 
                            key={index}
                            href={link.href}
                            className="premium-social-link group"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image 
                                src={link.icon} 
                                alt={link.name} 
                                width={24} 
                                height={24}
                                className="opacity-80 group-hover:opacity-100 transition-opacity"
                            />
                        </Link>
                    ))}
                </div>
                
                <div className="mt-8 text-center">
                    <p className="text-sm text-gray-400">
                        © {new Date().getFullYear()} Rudimar B. Althof. <br />
                        <span className="text-gold"> Power Platform Developer and Trainer</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
