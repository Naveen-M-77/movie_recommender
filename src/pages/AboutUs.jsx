import React from 'react';

const AboutUs = () => {
    return (
        <div className="bg-black text-white min-h-screen px-4 py-20"> {/* Add py-20 to push below header */}
            <div className="max-w-4xl mx-auto space-y-6">
                <h1 className="text-4xl font-bold">About MovieHub</h1>
                <p className="text-lg">
                    MovieHub is your ultimate source of movies and TV shows. We are committed to bringing you high-quality content,
                    smart recommendations, and a seamless experience whether you're on desktop, mobile, or your smart TV.
                </p>
                <div className="bg-gray-900 rounded-2xl shadow-xl p-6 space-y-4">
                    <h2 className="text-2xl font-semibold">Our Mission</h2>
                    <p>
                        To help users explore, enjoy, and discover movies and shows they love through curated lists, up-to-date releases,
                        and personalized suggestions.
                    </p>
                    <h2 className="text-2xl font-semibold">Why Choose Us?</h2>
                    <ul className="list-disc list-inside space-y-2">
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
