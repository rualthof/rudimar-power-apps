import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

export const metadata = {
    title: {
        template: '%s | Netlify',
        default: 'Rudimar - Power Apps'
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="scroll-smooth">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@400;500;600&display=swap" />
            </head>
            <body className="antialiased text-gray-100 font-inter">
                <div className="premium-gradient min-h-screen">
                    <div className="min-h-screen px-6 sm:px-12">
                        <div className="flex flex-col w-full max-w-5xl mx-auto grow">
                            <Header />
                            <div className="grow">{children}</div>
                            <Footer />
                        </div>
                    </div>
                </div>
            </body>
        </html>
    );
}
