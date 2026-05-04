import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <Image src="/assets/logo.svg" alt="Logo" width={100} height={100} />
            <h1 className="text-4xl font-bold text-gray-800 mt-4">Page Not Found</h1>
            <p className="text-gray-600 mt-2">Sorry, the page you are looking for does not exist.</p>
            <Link href="/">
                <button className="mt-4 px-4 py-2 bg-green-900 text-white rounded hover:bg-green-700">
                    Go Home
                </button>
            </Link>
        </div>
    );
};

export default NotFound;