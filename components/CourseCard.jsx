import Image from 'next/image';
import Link from 'next/link';

export function CourseCard({ course }) {
    return (
        <div className="flex flex-col md:flex-row premium-card rounded-xl overflow-hidden shadow-premium group hover:shadow-xl transition-all duration-300">
            {/* Image Container */}
            <div className="relative h-48 md:h-auto md:w-2/5">
                <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    priority
                    sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-dark/60 via-dark/30 to-transparent" />
            </div>
            
            {/* Content Container */}
            <div className="flex-1 p-6 md:p-8 flex flex-col justify-between backdrop-blur-sm">
                <div>
                    <h3 className="font-playfair text-2xl font-bold mb-4 text-gradient">
                        {course.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                        {course.description}
                    </p>
                    
                    <div className="hidden md:block">
                        <p className="text-sm text-gold mb-3 font-semibold">Key Highlights:</p>
                        <ul className="space-y-2">
                            {course.keyHighlights?.slice(0, 2).map((highlight, index) => (
                                <li key={index} className="text-gray-300 text-sm flex items-start gap-2">
                                    <span className="text-gold mt-1">•</span>
                                    <span>{highlight}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                
                {/* Buttons */}
                <div className="flex gap-4 mt-8">
                    <Link 
                        href={`/courses/${encodeURIComponent(course.title)}`}
                        className="premium-button px-6 py-3 rounded-lg flex-1 md:flex-none text-center hover:scale-105 transition-transform duration-300"
                    >
                        Learn More
                    </Link>
                    <Link
                        href={course.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-lg border border-gold/20 hover:border-gold/40 flex-1 md:flex-none text-center hover:scale-105 transition-transform duration-300"
                    >
                        Enroll Now
                    </Link>
                </div>
            </div>
        </div>
    );
}