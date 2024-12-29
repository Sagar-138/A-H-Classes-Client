import Image from 'next/image';

const Banner = () => {
    return (
        <div id="home-section" className="bg-lightkblue min-h-screen flex items-center">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8">
                    {/* Left Section: Text Content */}
                    <div className="col-span-6 text-center lg:text-left">
                        <h1 className="text-midnightblue text-4xl md:text-6xl font-bold leading-tight">
                            Unlock Your Potential <br /> with Expert-Led Courses
                        </h1>
                        <p className="text-charcoal text-lg md:text-xl font-normal opacity-75 mt-6">
                            Learn from top instructors and gain the skills you need to succeed in your career.
                            Join our community of lifelong learners today.
                        </p>
                        <blockquote className="text-kellygreen text-lg md:text-xl italic font-semibold mt-6">
                            "Education is the passport to the future, for tomorrow belongs to those who prepare for it today."
                        </blockquote>
                        <div className="mt-10">
                            <button className="bg-ultramarine text-white px-8 py-4 text-lg font-medium rounded-full shadow-lg hover:bg-midnightblue transition ease-in-out duration-300">
                                Get Started Now
                            </button>
                        </div>
                    </div>

                    {/* Right Section: Image */}
                    <div className="col-span-6 flex justify-center">
                        <Image
                            src="/assets/banner/table.png"
                            alt="Online Classes"
                            width={800}
                            height={600}
                            className="w-full h-auto object-cover rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
