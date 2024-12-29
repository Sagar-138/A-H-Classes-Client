"use client";
import React from "react";
import Image from "next/image";

const mentorData = {
  name: "Anjali Chauhan",
  qualification: "MSC in Biotechnology",
  description:"Anjali Chauhan holds an MSc in Biotechnology and has over 4 years of experience in the teaching field. Passionate about educating and inspiring students, with a focus on making complex scientific concepts accessible and engaging",
  specialties: ["Biology", "Immunology", "Microbiology"],
  imgSrc: "/assets/mentor/user1.png",
};

export default function MentorDetails() {
  return (
    <div className="py-10 sm:py-20 bg-paleblue" id="mentor">
      <div className="mx-auto max-w-7xl sm:py-4 px-4 lg:px-8">
        <h2 className="text-midnightblue text-4xl md:text-5xl text-center font-semibold mb-10">
          Meet with our Mentor
        </h2>
        <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col md:flex-row items-center md:items-start">
          {/* Left Side: Image */}
          <div className="w-full md:w-1/3">
            <Image
              src={mentorData.imgSrc}
              alt={mentorData.name}
              width={400}
              height={400}
              className="object-cover w-full h-auto"
            />
          </div>
          {/* Right Side: Details */}
          <div className="p-6 md:p-8 w-full md:w-2/3 flex flex-col gap-4">
            <div>
              <h3 className="text-2xl font-semibold text-midnightblue">
                {mentorData.name}
              </h3>
              <h4 className="text-lg font-medium text-lightgray mt-1">
                {mentorData.qualification}
              </h4>
            </div>
            <p className="text-gray-700 text-base leading-6">
              {mentorData.description}
            </p>
            <div>
              <h4 className="text-lg font-semibold text-midnightblue">
                Areas of Expertise:
              </h4>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                {mentorData.specialties.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4 mt-4">
              <button className="bg-ultramarine text-white px-6 py-3 text-sm font-medium rounded-full shadow-lg hover:bg-midnightblue transition ease-in-out duration-300">
                Book a Session
              </button>
              <button className="bg-white border border-ultramarine text-ultramarine px-6 py-3 text-sm font-medium rounded-full shadow-lg hover:bg-lightkblue transition ease-in-out duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
