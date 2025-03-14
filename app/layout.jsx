import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

export const metadata = {
    title: {
        template: '%s | Rudimar.dev',
        default: 'Rudimar.dev - Power Platform Expert & Developer'
    },
    description: 'Power Platform consultant specializing in Power Apps, Power Automate, and Power BI. Expert training and custom solutions for business efficiency.',
    keywords: ['Power Apps', 'Power Platform', 'Power Automate', 'Power BI', 'Microsoft', 'Low Code', 'Business Solutions'],
    authors: [{ name: 'Rudimar B. Althof' }],
    creator: 'Rudimar B. Althof',
    metadataBase: new URL('https://rudimar.dev'),
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://rudimar.dev',
        siteName: 'Rudimar.dev',
        title: 'Rudimar B. Althof - Power Platform Expert',
        description: 'Expert Power Platform development and training. Transform your business with custom Power Apps solutions.',
        images: [{
            url: '/images/og-image.jpg',
            width: 1200,
            height: 630,
            alt: 'Rudimar.dev - Power Platform Solutions'
        }]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Rudimar.dev - Power Platform Expert',
        description: 'Expert Power Platform development and training',
        images: ['/images/twitter-image.jpg'],
        creator: '@powerappsrudi'
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        }
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="scroll-smooth">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
                <link rel="canonical" href="https://rudimar.dev" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@400;500;600&display=swap" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
            </head>
            <body className="antialiased text-gray-100 font-inter">
                <div className="premium-gradient min-h-screen">
                    <div className="min-h-screen px-6 sm:px-12">
                        <div className="flex flex-col w-full max-w-5xl mx-auto grow">
                            <Header />
                            <main className="grow">{children}</main>
                            <Footer />
                        </div>
                    </div>
                </div>
            </body>
        </html>
    );
}
