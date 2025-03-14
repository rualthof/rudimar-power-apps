'use client'

import Link from 'next/link'
import Image from 'next/image'

export function PersonalSection({ personalInfo }) {
    return (
        <section className="rounded-xl p-8 mb-8">
            <div className="flex flex-col md:flex-row items-start gap-8">
                {/* Content - Left side */}
                <div className="flex-1 order-2 md:order-1">
                    <h1 className="text-3xl md:text-4xl font-playfair font-bold text-gradient mb-6">
                        {personalInfo.name}
                    </h1>
                    
                    <p className="text-lg md:text-xl font-playfair text-gold mb-4">
                        {personalInfo.profession}
                    </p>
                    
                    <p className="text-gray-300 leading-relaxed mb-6">
                        {personalInfo.about}
                    </p>
                    
                    <div className="flex flex-wrap gap-3">
                        {personalInfo.socials.map((social) => (
                            <Link
                                key={social.name}
                                href={social.href}
                                className="premium-social-link no-underline flex items-center gap-2 hover:scale-105 transition-all duration-300"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="text-lg">{social.icon}</span>
                                <span className="text-gray-200 text-sm">{social.name}</span>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Image - Right side */}
                <div className="relative w-48 h-48 md:w-72 md:h-[350px] mx-auto md:mx-0 flex-shrink-0 order-1 md:order-2">
                    <div className="relative w-full h-full overflow-hidden">
                        <Image
                            src={personalInfo.imageurl}
                            alt={`Photo of ${personalInfo.name}`}
                            fill
                            className="object-cover rounded-full md:rounded-xl  premium-border hover:scale-105 transition-transform duration-500"
                            priority
                            sizes="(max-width: 768px) 192px, 288px"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}