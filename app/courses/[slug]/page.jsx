import Link from 'next/link';
import Image from 'next/image';
import { courses } from '../../../data/courses';

export function generateStaticParams() {
    return courses.map((course) => ({
        slug: encodeURIComponent(course.title),
    }));
}

export default function CoursePage({ params }) {
    const course = courses.find(
        (c) => encodeURIComponent(c.slug) === params.slug
    );

    if (!course) return null;

    return (
        <main className="max-w-4xl mx-auto py-16 px-6">
            <div className="space-y-12">
                {/* Hero Section */}
                <div className="relative h-[500px] lg:h-[600px] rounded-xl overflow-hidden premium-border">
                    {/* Background Image */}
                    <Image
                        src={course.image}
                        alt={course.title}
                        fill
                        className="object-cover z-0"
                        priority
                        quality={90}
                    />
                    
                    {/* Gradient Overlays */}
                    <div className="absolute inset-0 z-10">
                        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/70 to-transparent opacity-90" />
                        <div className="absolute inset-0 bg-gradient-to-r from-dark/80 via-transparent to-transparent" />
                    </div>
                    
                    {/* Content Container */}
                    <div className="absolute inset-0 z-20 flex flex-col justify-end">
                        <div className="w-full p-4 sm:p-8 lg:p-10">
                            <div className="max-w-2xl mx-auto space-y-4 sm:space-y-6">
                                {/* Title */}
                                <div className="premium-card p-3 sm:p-4 rounded-xl">
                                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold text-gradient text-center">
                                        {course.title}
                                    </h1>
                                </div>
                                
                                {/* Description */}
                                <div className="premium-card p-4 sm:p-6 rounded-xl">
                                    <p className="text-base sm:text-lg text-gray-100 leading-relaxed">
                                        {course.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Key Highlights */}
                <section className="premium-card p-8 rounded-xl">
                    <h2 className="text-2xl font-playfair font-semibold text-gold mb-6">Key Highlights</h2>
                    <ul className="space-y-4">
                        {course.keyHighlights.map((highlight, index) => (
                            <li key={index} className="text-gray-300 flex items-start gap-3">
                                <span className="text-gold">•</span>
                                <span>{highlight}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                   {/* Projects */}
                                <section className="space-y-6">
                                    <h2 className="text-2xl font-playfair font-semibold text-gradient">What You&apos;ll Build</h2>
                                    <div className="grid gap-6 md:grid-cols-2">
                                        {course.projects.map((project, index) => (
                                            <div key={index} className="premium-card overflow-hidden rounded-xl group hover:scale-[1.02] transition-transform duration-300">
                                                <div className="relative aspect-video w-full">
                                                    <Image
                                                        src={project.project_image || '/images/placeholder-project.jpg'}
                                                        alt={project.name}
                                                        fill
                                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                        sizes="(max-width: 768px) 100vw, 50vw"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent" />
                                                </div>
                                                <div className="p-6 relative">
                                                    <h3 className="text-xl font-semibold text-gold mb-3">{project.name}</h3>
                                                    <p className="text-gray-300 leading-relaxed">{project.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                {/* Automation Content */}
                <section className="premium-card p-8 rounded-xl">
                    <h2 className="text-2xl font-playfair font-semibold text-gold mb-6">Power Automate Integration</h2>
                    <ul className="space-y-4">
                        {course.automationContent.map((content, index) => (
                            <li key={index} className="text-gray-300 flex items-start gap-3">
                                <span className="text-gold">•</span>
                                <span>{content}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* CTA */}
                <div className="text-center py-8">
                    <Link
                        href={course.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="premium-button inline-block"
                    >
                        Enroll Now on {course.platform}
                    </Link>
                </div>
            </div>
        </main>
    );
}