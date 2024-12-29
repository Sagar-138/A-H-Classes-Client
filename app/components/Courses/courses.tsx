"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

// CLASS DATA
interface ClassType {
    section: string;
    imgSrc: string;
    link: string; // Link to navigate to the next page
}

const classData: ClassType[] = [
    {
        section: "Grade 6",
        imgSrc: "/assets/courses/grade_6.png",
        link: "/grade-6",
    },
    {
        section: "Grade 7",
        imgSrc: "/assets/courses/grade_7.png",
        link: "/grade-7",
    },
    {
        section: "Grade 8",
        imgSrc: "/assets/courses/grade_8.png",
        link: "/grade-8",
    },
    {
        section: "Grade 9",
        imgSrc: "/assets/courses/grade_9.png",
        link: "/grade-9",
    },
    {
        section: "Grade 10",
        imgSrc: "/assets/courses/grade_10.png",
        link: "/grade-10",
    },
    {
        section: "Grade 11",
        imgSrc: "/assets/courses/grade_11.png",
        link: "/grade-11",
    },
    {
        section: "Grade 12",
        imgSrc: "/assets/courses/grade_12.png",
        link: "/grade-12",
    },
    {
        section: "Higher Studies",
        imgSrc: "/assets/courses/higher_studies.png",
        link: "/higher-studies",
    },
];

export default function ClassSections() {
    return (
        <div id="classes" className="bg-gray-50 py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="sm:flex justify-between items-center">
                    <h3 className="text-gray-900 text-3xl lg:text-4xl font-bold mb-6 sm:mb-0">
                        Classes Offered
                    </h3>
                    <Link
                        href={"/"}
                        className="text-blue-600 text-lg font-medium hover:underline"
                    >
                        Explore all classes &gt;
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
                    {classData.map((classItem, index) => (
                        <Link key={index} href={classItem.link} passHref>
                            <div
                                className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                            >
                                <div className="relative">
                                    <Image
                                        src={classItem.imgSrc}
                                        alt={classItem.section}
                                        width={400}
                                        height={260}
                                        className="w-full object-contain h-52"
                                    />
                                </div>
                                <div className="p-6">
                                    <h4 className="text-xl font-semibold text-gray-800">
                                        {classItem.section}
                                    </h4>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
