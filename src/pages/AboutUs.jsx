import React from 'react';

const AboutUs = () => {
    return (
        <div className="about-us-page bg-black text-white min-h-screen p-10">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-4">About MovieHub</h1>
                <p className="text-lg mb-6">
                    MovieHub is your ultimate source of movies and TV shows. We are committed to bringing you high-quality content,
                    smart recommendations, and a seamless experience whether you're on desktop, mobile, or your smart TV.
                </p>
                <div className="bg-gray-900 rounded-2xl shadow-xl p-6">
                    <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                    <p className="text-md mb-4">
                        To help users explore, enjoy, and discover movies and shows they love through curated lists, up-to-date releases,
                        and personalized suggestions.
                    </p>
                    <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
                    <ul className="list-disc list-inside text-md space-y-2">
                        <li>Access latest releases and top IMDb-rated content.</li>
                        <li>Beautiful, user-friendly interface across devices.</li>
                        <li>Powered by TheMovieDB API for real-time updates.</li>
                        <li>Reliable recommendations based on genres and user interest.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
