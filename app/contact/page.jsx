import Link from 'next/link';

const CONTACT_FORM_URL = "https://forms.office.com/Pages/ResponsePage.aspx?id=BUYQf-llWE6ne6YCnfKJ2ZbFPOWjjSpKiy0eYvhqTtxUQkE0TFlBRVRKNFZRQjgwT1lHRUFBRzFEQi4u&embed=true";

export default function TrainingPage() {
    return (
        <main className="max-w-4xl mx-auto py-16 px-6 text-gray-200">
            <h1 className="text-4xl font-playfair font-bold text-center mb-6 text-gradient">
                Power Apps Training & Mentorship
            </h1>

            <p className="text-lg text-gray-300 text-center mb-12">
                Limited spots available – serious inquiries only.
            </p>

            <section className="premium-card p-8 rounded-xl">
                <h2 className="text-2xl font-playfair font-semibold text-gold mb-6">Why Work With Me?</h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                    Thank you for your interest in working with me on your <strong>Microsoft Power Apps</strong> journey. 
                    My mentorship and training programs are designed for professionals who are serious about 
                    building real skills and achieving tangible results.
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
        </main>
    );
}
