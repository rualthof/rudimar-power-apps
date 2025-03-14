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
        (c) => encodeURIComponent(c.title) === params.slug
    );

    if (!course) return null;

    return (
        <main className="max-w-4xl mx-auto py-16 px-6">
            <div className="space-y-8">
                {/* Hero Section */}
                <div className="aspect-video relative rounded-xl overflow-hidden mb-8">
                    <Image
                        src={course.image}
                        alt={course.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <h1 className="text-4xl font-bold">{course.title}</h1>
                <p className="text-xl text-gray-300">{course.description}</p>

                {/* Key Highlights */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">Key Highlights</h2>
                    <ul className="space-y-2">
                        {course.keyHighlights.map((highlight, index) => (
                            <li key={index} className="text-gray-300">{highlight}</li>
                        ))}
                    </ul>
                </section>

                {/* Projects */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">What You&apos;ll Build</h2>
                    <div className="grid gap-6 md:grid-cols-2">
                        {course.projects.map((project, index) => (
                            <div key={index} className="bg-gray-800/50 p-6 rounded-xl">
                                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                                <p className="text-gray-300">{project.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Automation Content */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">Power Automate Integration</h2>
                    <ul className="space-y-2">
                        {course.automationContent.map((content, index) => (
                            <li key={index} className="text-gray-300">{content}</li>
                        ))}
                    </ul>
                </section>

                {/* CTA */}
                <div className="mt-12 text-center">
                    <Link
                        href={course.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-lg"
                    >
                        Enroll Now on {course.platform}
                    </Link>
                </div>
            </div>
        </main>
    );
}