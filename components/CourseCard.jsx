import Image from 'next/image';
import Link from 'next/link';

export function CourseCard({ course }) {
    return (
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col md:flex-row">
            {/* Image container - full width on mobile, 40% on desktop */}
            <div className="aspect-video md:aspect-auto md:w-2/5 relative">
                <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover"
                    priority
                />
            </div>
            
            {/* Content container - fills remaining space */}
            <div className="flex-1 p-6 flex flex-col justify-between">
                <div>
                    <h3 className="text-xl font-bold mb-3">{course.title}</h3>
                    <p className="text-gray-300 mb-4">{course.description}</p>
                    
                    {/* Key highlights preview */}
                    <div className="hidden md:block">
                        <p className="text-sm text-gray-400 mb-2">Key Highlights:</p>
                        <ul className="space-y-1">
                            {course.keyHighlights?.slice(0, 2).map((highlight, index) => (
                                <li key={index} className="text-gray-300 text-sm">
                                    {highlight}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                
                {/* Buttons */}
                <div className="flex gap-4 mt-6">
                    <Link 
                        href={`/courses/${encodeURIComponent(course.title)}`}
                        className="btn btn-primary flex-1 md:flex-none"
                    >
                        Learn More
                    </Link>
                    <Link
                        href={course.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline flex-1 md:flex-none"
                    >
                        Buy on {course.platform}
                    </Link>
                </div>
            </div>
        </div>
    );
}