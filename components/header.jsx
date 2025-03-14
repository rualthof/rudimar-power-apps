import Image from 'next/image';
import Link from 'next/link';
import siteLogo from 'public/site-logo-light.png';
import githubLogo from 'public/images/github-mark-white.svg';
import linkedinLogo from 'public/logos/linkedin-app-white-icon.svg';

const navItems = [
    { linkText: 'Home', href: '/' },
    { linkText: 'Carreer', href: '/carreer' },
    { linkText: 'Contact', href: '/contact' },
    /* Add the following items 
    { linkText: 'Revalidation', href: '/revalidation' },
    { linkText: 'Image CDN', href: '/image-cdn' },
    { linkText: 'Edge Function', href: '/edge' },
    { linkText: 'Blobs', href: '/blobs' },
    { linkText: 'Classics', href: '/classics' }
     */
];

export function Header() {
    return (
        <nav className="flex flex-wrap items-center gap-4 pt-6 pb-12 sm:pt-12">
            <Link href="/">
                <Image src={siteLogo} alt="Netlify logo" className='w-[160px]' />
            </Link>
            {!!navItems?.length && (
                <ul className="flex flex-wrap gap-x-4 gap-y-1">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link
                                href={item.href}
                                className="inline-block px-1.5 py-1 transition hover:opacity-80 sm:px-3 sm:py-2"
                            >
                                {item.linkText}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
            <div className="flex-grow justify-end hidden lg:flex lg:mr-1">
                <Link
                    href="https://www.linkedin.com/in/rudimar/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image src={linkedinLogo} alt="GitHub logo" className="w-7" />
                </Link>
            </div>
        </nav>
    );
}
