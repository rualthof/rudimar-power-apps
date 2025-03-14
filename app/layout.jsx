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
        <html lang="en" data-theme="corporate">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
            </head>
            <body className="antialiased text-gray-100">
                <div className="modern-gradient min-h-screen">
                    <div className="grid-dots min-h-screen px-6 sm:px-12">
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
