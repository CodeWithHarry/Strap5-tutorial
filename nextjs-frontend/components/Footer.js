import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-background/50 backdrop-blur border-b z-10 text-white py-8">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <h1 className="text-xl text-gray-900 font-semibold">Harry's Developer Portfolio</h1>
                    </div>
                    <div className="flex space-x-6">
                        <Link href="/" className="text-gray-700 hover:text-gray-900">Home</Link>
                        <Link href="/blog" className="text-gray-700 hover:text-gray-900">Blogs</Link>
                        <Link href="/about" className="text-gray-700 hover:text-gray-900">About</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
