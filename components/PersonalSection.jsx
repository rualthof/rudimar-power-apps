'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export function PersonalSection({ personalInfo }) {
    const [isCollapsed, setIsCollapsed] = useState(false)

    return (
        <section className="flex flex-col items-start gap-3 sm:gap-4 border-b pb-8">
            <div className="w-full flex justify-between items-center">
                <h1 className="text-4xl font-bold mb-2">{personalInfo.name}</h1>
                <button 
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="text-2xl hover:opacity-75 transition-opacity"
                >
                    {isCollapsed ? '⌄' : '⌃'}
                </button>
            </div>
            
            {!isCollapsed && (
                <div className="flex flex-col md:flex-row gap-8 w-full">
                    <div className="flex-1">
                        <p className="text-xl mb-4">{personalInfo.profession}</p>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mb-6">
                            {personalInfo.about}
                        </p>
                        <div className="flex gap-4">
                            {personalInfo.socials.map((social) => (
                                <Link
                                    key={social.name}
                                    href={social.href}
                                    className="flex items-center gap-2 hover:opacity-75 transition-opacity"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span>{social.icon}</span>
                                    <span>{social.name}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="w-64 h-64 relative self-start flex-shrink-0">
                        <Image
                            src={personalInfo.imageurl}
                            alt={`Photo of ${personalInfo.name}`}
                            fill
                            className="rounded-lg object-cover"
                            priority
                        />
                    </div>
                </div>
            )}
        </section>
    )
}