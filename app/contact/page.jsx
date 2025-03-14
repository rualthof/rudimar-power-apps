import Link from 'next/link';

const CONTACT_FORM_URL = "https://forms.office.com/Pages/ResponsePage.aspx?id=BUYQf-llWE6ne6YCnfKJ2ZbFPOWjjSpKiy0eYvhqTtxUQkE0TFlBRVRKNFZRQjgwT1lHRUFBRzFEQi4u&embed=true";

export default function TrainingPage() {
    return (
        <main className="max-w-4xl mx-auto py-16 px-6 text-gray-200">
            <h1 className="text-4xl font-bold text-center mb-6 text-primary">Power Apps Training & Mentorship</h1>

            <p className="text-lg text-gray-400 text-center mb-12">
                Limited spots available – serious inquiries only.
            </p>

            <section className="bg-gray-800 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-primary mb-4">Why Work With Me?</h2>
                <p className="text-gray-300 mb-4">
                    Thank you for your interest in working with me on your <strong>Microsoft Power Apps</strong> journey. 
                    My mentorship and training programs are designed for professionals who are serious about 
                    building real skills and achieving tangible results.
                </p>

                <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>✔ <strong>1-on-1 Mentorship</strong> – Personalized guidance to help you master Power Apps and solve complex challenges.</li>
                    <li>✔ <strong>Group Training</strong> – Hands-on learning sessions for individuals or teams looking to upskill.</li>
                    <li>✔ <strong>Freelance Consulting</strong> – Expert assistance for businesses using Power Platform.</li>
                </ul>
            </section>

            <section className="bg-gray-900 p-6 rounded-lg shadow-md mt-6">
                <h2 className="text-2xl font-semibold text-primary mb-4">Pricing</h2>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>💡 <strong>€80/hour</strong> for <span className="text-primary">1-on-1 coaching</span></li>
                    <li>💡 <strong>€50/hour per person</strong> for <span className="text-primary">group training</span></li>
                    <li>💡 <strong>Freelance consulting</strong> – <span className="text-primary">Custom pricing</span>, let’s discuss your needs.</li>
                </ul>
                <p className="text-gray-400 mt-4">
                    Due to the personalized nature of my services, <strong>spots are very limited.</strong> Only serious inquiries will be considered.
                </p>
            </section>

            {/* Embedded Microsoft Form */}
            <section className="mt-10 -mx-6 sm:-mx-12">
                <div className="max-w-4xl mx-auto px-6 sm:px-12">
                    <h2 className="text-2xl font-semibold text-primary text-center mb-4">Apply Now</h2>
                    <p className="text-gray-400 text-center mb-6">Fill out the form below to apply for training or consulting.</p>
                </div>

                <div className="w-full h-[1000px] relative bg-gray-800 shadow-lg">
                    <iframe 
                        src={CONTACT_FORM_URL}
                        className="absolute inset-0 w-full h-full"
                        style={{ 
                            border: "none",
                            backgroundColor: "transparent",
                        }} 
                        allowFullScreen
                    ></iframe>
                </div>
            </section>

            {/* Back to Home Button */}
            <div className="text-center mt-12 px-6 sm:px-12">
                <Link href="/" className="btn btn-primary">Back to Home</Link>
            </div>
        </main>
    );
}
