import { Metadata } from 'next';
import Link from 'next/link';

export const metadata = {
    title: 'Power Platform Blog | Tutorials & Insights',
    description: 'Discover Power Platform tutorials, best practices, and insights. Learn about Power Apps, Power Automate, and real-world business solutions.',
    openGraph: {
        title: 'Power Platform Blog | Rudimar.dev',
        description: 'Power Platform tutorials and insights from a Microsoft expert.',
        images: [{
            url: '/images/blog-og.jpg',
            width: 1200,
            height: 630,
            alt: 'Power Platform Blog by Rudimar'
        }]
    }
};

export default function BlogPage() {
    return (
        <main className="max-w-4xl mx-auto py-16 px-6">
            <div className="text-center max-w-2xl mx-auto">
                <h1 className="text-4xl font-playfair font-bold text-gradient mb-6">
                    Blog Coming Soon
                </h1>
                
                <div className="premium-card p-8 rounded-xl mb-8">
                    <p className="text-lg text-gray-300 mb-6">
                        I'm working on creating valuable content about Power Platform development, 
                        including tutorials, best practices, and real-world solutions.
                    </p>
                    
                    <p className="text-gold">
                        Meanwhile, you can follow me on YouTube for regular Power Platform content.
                    </p>
                </div>

                <Link
                    href="https://www.youtube.com/@powerrudy"
                    className="premium-button inline-flex items-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Visit YouTube Channel
                </Link>
            </div>
        </main>
    );
}