'use client';

import Image from 'next/image';
import { useState } from 'react';

export function OptimizedImage({ src, alt, ...props }) {
    const [isLoading, setIsLoading] = useState(true);

    // Get the actual path from imported image or string
    const imagePath = typeof src === 'string' ? src : src.src;

    // Check if file is SVG or URL
    const isSvg = imagePath.toLowerCase().endsWith('.svg');
    const isUrl = imagePath.startsWith('http://') || imagePath.startsWith('https://');

    // Skip optimization for SVGs and URLs
    const skipOptimization = isSvg || isUrl;

    // Generate WebP sources based on original path
    const getWebPSrc = (path) => {
        if (skipOptimization) return { default: path, sm: path, md: path };
        
        const splitPath = path.split('.');
        const basePath = splitPath.slice(0, -1).join('.');
        return {
            basePath: basePath,
            default: `/images/optimized${basePath}.webp`,
            sm: `/images/optimized${basePath}-sm.webp`,
            md: `/images/optimized${basePath}-md.webp`,
        };
    };

    const webpSources = getWebPSrc(imagePath);

    return (
        <div className={`relative overflow-hidden ${props.className || ''}`}>
            {skipOptimization ? (
                <Image
                    {...props}
                    src={src}
                    alt={alt}
                    onLoadingComplete={() => setIsLoading(false)}
                    className={`
                        duration-700 ease-in-out
                        ${isLoading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'}
                        ${props.className || ''}
                    `}
                />
            ) : (
                <picture>
                    <source
                        media="(min-width: 1024px)"
                        srcSet={webpSources.default}
                        type="image/webp"
                    />
                    <source
                        media="(min-width: 640px)"
                        srcSet={webpSources.md}
                        type="image/webp"
                    />
                    <source
                        srcSet={webpSources.sm}
                        type="image/webp"
                    />
                    <Image
                        {...props}
                        src={src}
                        alt={alt}
                        onLoadingComplete={() => setIsLoading(false)}
                        className={`
                            duration-700 ease-in-out
                            ${isLoading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'}
                            ${props.className || ''}
                        `}
                    />
                </picture>
            )}
        </div>
    );
}