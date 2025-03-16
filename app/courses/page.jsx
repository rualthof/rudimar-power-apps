import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { courses } from '../../data/courses';

export const metadata = {
    title: 'Power Platform Courses | Learn Power Apps & Power Automate | Rudimar.dev',
    description: 'Master Microsoft Power Platform with hands-on courses. Learn Power Apps and Power Automate through real-world projects and expert guidance.',
    openGraph: {
        title: 'Power Platform Training Courses | Rudimar.dev',
        description: 'Transform your career with practical Power Platform courses. Build real apps from scratch.',
        images: [{
            url: '/images/courses-og.jpg',
            width: 1200,
            height: 630,
            alt: 'Power Platform Courses by Rudimar'
        }]
    }
};

export default function CoursesPage() {
    return (
        <main className="max-w-4xl mx-auto py-16 px-6">
            <h1 className="text-4xl font-playfair font-bold text-center mb-6 text-gradient">
                Power Platform Courses
            </h1>
            
            <p className="text-lg text-gray-300 text-center mb-12 max-w-2xl mx-auto">
                Learn Power Apps and Power Automate through practical, hands-on courses. 
                Build real-world applications from scratch.
            </p>

            <div className="grid gap-8">
                {courses.map((course, index) => (
                    <article key={index} className="premium-card rounded-xl overflow-hidden group">
                        <div className="relative aspect-video">
                            <Image
                                src={course.image}
                                alt={course.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                priority={index === 0}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark/90 to-transparent" />
                        </div>
                        
                        <div className="p-6 sm:p-8">
                            <h2 className="text-2xl font-playfair font-bold text-gold mb-4">
                                {course.title}
                            </h2>
                            
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                {course.description}
                            </p>
                            
                            <div className="space-y-4 mb-8">
                                <h3 className="text-xl font-semibold text-gold">Key Highlights:</h3>
                                <ul className="space-y-2">
                                    {course.keyHighlights.slice(0, 3).map((highlight, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-gray-300">
                                            <span className="text-gold">•</span>
                                            <span>{highlight}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            
                            <Link
                                href={`/courses/${course.slug}`}
                                className="premium-button inline-block"
                            >
                                Learn More
                            </Link>
                        </div>
                    </article>
                ))}
            </div>
        </main>
    );
}