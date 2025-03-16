'use client'

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { careerTimeline } from '../../data/career';

function TimelineItem({ item, index, isEven }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            className={`flex items-center w-full my-8 ${isEven ? 'justify-start' : 'justify-end'}`}
            initial={{ opacity: 0, x: isEven ? -100 : 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -100 : 100 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-8' : 'md:pl-8'}`}>
                <div className="premium-card p-6 rounded-xl relative">
                    {/* Logo with premium styling */}
                    <div className={`absolute -top-6 w-12 h-12 ${isEven ? '-right-6' : '-left-6'}`}>
                        <div className="w-full h-full rounded-full premium-border p-0.5">
                            <img 
                                src={item.logo} 
                                alt={item.company} 
                                className="w-full h-full object-contain rounded-full bg-dark p-2"
                            />
                        </div>
                    </div>

                    {/* Content with premium styling */}
                    <h2 className="text-xl font-playfair font-bold text-gradient mb-1">{item.role}</h2>
                    <p className="text-gold">{item.company} • {item.year}</p>
                    <p className="mt-4 text-gray-300 leading-relaxed">{item.description}</p>
                    <ul className="mt-4 space-y-2">
                        {item.projects.map((project, i) => (
                            <li key={i} className="flex items-start gap-2 text-gray-300">
                                <span className="text-gold">•</span>
                                <span>{project}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.div>
    );
}

export default function CareerPage() {
    return (
        <main className="max-w-5xl mx-auto py-16 px-6 text-gray-200">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
            >
                <h1 className="text-4xl font-playfair font-bold text-center text-gradient">
                    Professional Journey
                </h1>
                <p className="text-lg text-gray-300 text-center max-w-2xl mx-auto leading-relaxed">
                    A decade of experience in Power Platform development, automation, and enterprise consulting.
                </p>
            </motion.div>

            <div className="relative mt-16">
                {/* Premium timeline line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full">
                    <div className="w-px h-full bg-gradient-to-b from-gold/50 via-gold/30 to-transparent" />
                </div>

                {/* Timeline Items */}
                {careerTimeline.map((item, index) => (
                    <TimelineItem 
                        key={index} 
                        item={item} 
                        index={index}
                        isEven={index % 2 === 0}
                    />
                ))}
            </div>

            {/* Back to Home Button */}
            <div className="text-center mt-16 relative z-10">
                <Link 
                    href="/" 
                    className="premium-button inline-block hover:scale-105 transition-transform duration-300"
                >
                    Back to Home
                </Link>
            </div>
        </main>
    );
}
