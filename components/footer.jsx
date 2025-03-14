import Link from 'next/link';

export function Footer() {
    return (
        <footer className="pt-16 pb-12 sm:pt-24 sm:pb-16 text-center space-y-4">
            <div className="flex justify-center space-x-6 text-sm">
                <Link 
                    href="https://linkedin.com/in/rudimar/" 
                    className="text-primary hover:opacity-80 transition"
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    LinkedIn
                </Link>
                <Link 
                    href="https://www.youtube.com/@powerrudy" 
                    className="text-primary hover:opacity-80 transition"
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    YouTube
                </Link>
                <Link 
                    href="https://www.instagram.com/powerappsrudi" 
                    className="text-primary hover:opacity-80 transition"
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    Instagram
                </Link>
            </div>
            <p className="text-sm hidden">
                <Link 
                    href="https://docs.netlify.com/frameworks/next-js/overview/" 
                    className="underline transition decoration-dashed text-primary underline-offset-8 hover:opacity-80"
                >
                    Next.js on Netlify
                </Link>
            </p>
        </footer>
    );
};
