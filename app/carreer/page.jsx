'use client'

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

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
                <div className="p-4 bg-gray-800 rounded-lg shadow-xl relative">
                    {/* Logo - Fixed positioning */}
                    <div className={`absolute top-4 -translate-y-1/2 w-12 h-12 ${isEven ? '-right-16' : '-left-16'}`}>
                        <img 
                            src={item.logo} 
                            alt={item.company} 
                            className="w-full h-full object-contain rounded-full bg-gray-700 p-2"
                        />
                    </div>

                    {/* Content */}
                    <h2 className="text-xl font-semibold text-primary">{item.role}</h2>
                    <p className="text-gray-400">{item.company} • {item.year}</p>
                    <p className="mt-2">{item.description}</p>
                    <ul className="mt-2 list-disc list-inside text-gray-300">
                        {item.projects.map((project, i) => (
                            <li key={i}>{project}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.div>
    );
}

export default function CareerPage() {
    const careerTimeline = [
        {
            year: "2021 - Present",
            role: "Power Platform Consultant",
            company: "RBA Digital (Remote)",
            logo: "/logos/rba-digital.png", // Placeholder for company logo
            description: "Providing consulting, training, and development for Power Platform solutions across multiple industries.",
            projects: [
                "Led governance and development of Power Platform applications.",
                "Optimized data integration with Dataverse and external APIs.",
                "Provided mentoring and training for teams adopting Power Platform.",
            ],
        },
        {
            year: "2023 - 2024",
            role: "Power Apps Developer",
            company: "LowCodera (Remote)",
            logo: "/logos/lowcodera.png", // Placeholder
            description: "Developed Canvas Apps with custom components and AI automation for enterprise applications.",
            projects: [
                "Built UI/UX-optimized apps using Power Apps Component Framework (PCF).",
                "Integrated AI-powered automation workflows for data processing.",
                "Implemented JSON-based integrations for seamless data exchange.",
            ],
        },
        {
            year: "2022 - 2023",
            role: "Power Apps Consultant",
            company: "GeekShark (Remote)",
            logo: "/logos/geekshark.png", // Placeholder
            description: "Designed and implemented scalable Power Platform solutions for enterprise clients.",
            projects: [
                "Developed custom applications with Power Apps and Power Automate.",
                "Ensured security, governance, and compliance for cloud-based workflows.",
                "Optimized data structures for better performance and reporting.",
            ],
        },
        {
            year: "2021",
            role: "Power Apps Specialist",
            company: "AB-InBev (Remote)",
            logo: "/logos/abinbev.png", // Placeholder
            description: "Managed governance and development of Power Platform solutions for global business processes.",
            projects: [
                "Designed scalable Power Apps workflows for enterprise-wide adoption.",
                "Automated business processes using Power Automate and cloud integrations.",
                "Provided Power Platform training to teams worldwide.",
            ],
        },
        {
            year: "2019 - 2020",
            role: "Power BI Developer",
            company: "Lavazza Pro UK (Remote)",
            logo: "/logos/lavazza.png", // Placeholder
            description: "Developed and optimized Power BI dashboards for real-time data analytics and decision-making.",
            projects: [
                "Created dynamic dashboards for IoT data visualization and reporting.",
                "Optimized SQL queries for real-time data insights.",
                "Collaborated with cross-functional teams to implement data best practices.",
            ],
        },
        {
            year: "2016 - 2019",
            role: "IoT Specialist",
            company: "Termica Solutions (Brazil)",
            logo: "/logos/termica.png", // Placeholder
            description: "Developed industrial automation and IoT solutions for smart manufacturing.",
            projects: [
                "Built IoT monitoring systems using Python, C++, and Azure.",
                "Implemented real-time data acquisition from industrial PLCs.",
                "Developed predictive maintenance tools with cloud analytics.",
            ],
        },
    ];

    return (
        <main className="max-w-5xl mx-auto py-16 px-6 text-gray-200">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-4xl font-bold text-center mb-6 text-primary">My Career</h1>
                <p className="text-lg text-gray-400 text-center mb-12">
                    A journey through my experience in Power Platform development, automation, and consulting.
                </p>
            </motion.div>

            <div className="relative">
                {/* Center Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-600" />

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
            <div className="text-center mt-12">
                <Link href="/" className="btn btn-primary">Back to Home</Link>
            </div>
        </main>
    );
}
