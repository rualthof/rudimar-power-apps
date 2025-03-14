import Link from 'next/link';
import Image from 'next/image';

const socialLinks = [
    {
        name: 'LinkedIn',
        href: 'https://linkedin.com/in/rudimar/',
        icon: '/logos/linkedin-app-white-icon.svg'
    },
    {
        name: 'YouTube',
        href: 'https://www.youtube.com/@powerrudy',
        icon: '/logos/youtube-app-white-icon.svg'
    },
    {
        name: 'Instagram',
        href: 'https://www.instagram.com/powerappsrudi',
        icon: '/logos/instagram-white-icon.svg'
    }
];

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
                        <span className="text-gold"> Premium Power Platform Development</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
