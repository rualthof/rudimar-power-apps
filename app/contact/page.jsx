import { Metadata } from 'next';
import Link from 'next/link';

const CONTACT_FORM_URL = "https://forms.office.com/Pages/ResponsePage.aspx?id=BUYQf-llWE6ne6YCnfKJ2ZbFPOWjjSpKiy0eYvhqTtxUQkE0TFlBRVRKNFZRQjgwT1lHRUFBRzFEQi4u&embed=true";

export const metadata = {
    title: 'Power Apps Training & Consulting | Expert Mentorship',
    description: 'Get personalized Power Apps training, 1-on-1 mentorship, and expert consulting. Learn from a Microsoft Power Platform specialist with real-world experience.',
    keywords: [
        'Power Apps Training',
        'Power Platform Consulting',
        'Power Apps Mentorship',
        'Power Apps Expert',
        'Microsoft Power Apps Learning',
        'Custom Power Apps Solutions',
        'Power Platform Development',
        'Power Apps Consultant',
        '1-on-1 Power Apps Coaching',
        'Business Process Automation'
    ],
    openGraph: {
        title: 'Power Apps Training & Expert Consulting | Rudimar.dev',
        description: 'Transform your career with personalized Power Apps training and mentorship. Expert consulting for businesses looking to leverage the Power Platform.',
        type: 'website',
        url: 'https://rudimar.dev/contact',
        images: [{
            url: '/images/training-og.jpg',
            width: 1200,
            height: 630,
            alt: 'Power Apps Training and Consulting with Rudimar'
        }]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Power Apps Training & Consulting',
        description: 'Get expert Power Apps training and consulting',
        images: ['/images/training-twitter.jpg']
    },
    alternates: {
        canonical: 'https://rudimar.dev/contact'
    }
};

export default function TrainingPage() {
    return (
        <main className="max-w-4xl mx-auto py-16 px-6 text-gray-200">
            <h1 className="text-4xl font-playfair font-bold text-center mb-6 text-gradient">
                Professional Power Apps Training & Expert Consulting
            </h1>

            <p className="text-lg text-gray-300 text-center mb-12">
                Transform your career with personalized Power Platform training. Limited spots available.
            </p>

            <section className="premium-card p-8 rounded-xl">
                <h2 className="text-2xl font-playfair font-semibold text-gold mb-6">Expert Power Apps Training</h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                    Elevate your <strong>Microsoft Power Apps</strong> skills with professional training and mentorship. 
                    My programs are tailored for professionals seeking practical skills and measurable results 
                    in Power Platform development.
                </p>

                <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-gray-300">
                        <span className="text-gold">✦</span>
                        <span><strong>1-on-1 Mentorship</strong> – Personalized guidance to help you master Power Apps and solve complex challenges.</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-300">
                        <span className="text-gold">✦</span>
                        <span><strong>Group Training</strong> – Hands-on learning sessions for individuals or teams looking to upskill.</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-300">
                        <span className="text-gold">✦</span>
                        <span><strong>Freelance Consulting</strong> – Expert assistance for businesses using Power Platform.</span>
                    </li>
                </ul>
            </section>

            <section className="premium-card p-8 rounded-xl mt-8">
                <h2 className="text-2xl font-playfair font-semibold text-gold mb-6">Investment</h2>
                <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-gray-300">
                        <span className="text-gold">💎</span>
                        <div>
                            <strong className="text-gold">€80/hour</strong>
                            <span className="ml-2">1-on-1 coaching</span>
                        </div>
                    </li>
                    <li className="flex items-start gap-3 text-gray-300">
                        <span className="text-gold">💎</span>
                        <div>
                            <strong className="text-gold">€50/hour per person</strong>
                            <span className="ml-2">Group training</span>
                        </div>
                    </li>
                    <li className="flex items-start gap-3 text-gray-300">
                        <span className="text-gold">💎</span>
                        <div>
                            <strong className="text-gold">Custom pricing</strong>
                            <span className="ml-2">Freelance consulting – Let's discuss your needs</span>
                        </div>
                    </li>
                </ul>
                <p className="text-gray-300 mt-6 leading-relaxed">
                    Due to the personalized nature of my services, <strong className="text-gold">spots are very limited.</strong> Only serious inquiries will be considered.
                </p>
            </section>

            {/* Embedded Microsoft Form */}
            <section className="mt-12">
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-playfair font-semibold text-gradient mb-3">Apply Now</h2>
                    <p className="text-gray-300">Fill out the form below to apply for training or consulting.</p>
                </div>

                <div className="premium-card overflow-hidden rounded-xl">
                    <iframe 
                        src={CONTACT_FORM_URL}
                        className="w-full h-[800px]"
                        style={{ 
                            border: "none",
                            backgroundColor: "transparent",
                        }} 
                        allowFullScreen
                    ></iframe>
                </div>
            </section>

            {/* Back to Home Button */}
            <div className="text-center mt-12">
                <Link href="/" className="premium-button">
                    Back to Home
                </Link>
            </div>

            {/* Add structured data for SEO */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "name": "Power Apps Training & Consulting",
                    "provider": {
                        "@type": "Person",
                        "name": "Rudimar B. Althof",
                        "url": "https://rudimar.dev"
                    },
                    "serviceType": "Professional Training",
                    "areaServed": "Worldwide",
                    "description": "Professional Power Apps training and consulting services, including 1-on-1 mentorship and custom business solutions.",
                    "offers": {
                        "@type": "Offer",
                        "price": "80",
                        "priceCurrency": "EUR",
                        "availability": "LimitedAvailability"
                    }
                })
            }} />
        </main>
    );
}
