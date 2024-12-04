"use client";
import React from "react";
import MediaCards from "./ui/MediaCard";

const Features = () => {
  return (
    <section className="bg-background p-feature-padding">
      <h2 className="text-4xl font-semibold text-center text-blue">Our Features</h2>
      <div className="flex mt-14 flex-wrap justify-around">
        {/* <div
          className="bg-[#FBDEE5] p-6 rounded-[20px] shadow-lg transition-all hover:shadow-xl hover:scale-105 w-[350px] mx-auto animate-slide-up"
        >
          <h3 className="text-2xl font-semibold text-black">co-creation environment</h3>
          <p className="mt-4 text-card-foreground">
            making gaathering with your teammates easy
          </p>
          <a href="#" className="text-primary font-medium mt-4 inline-block hover:underline">
            Learn More
          </a>
        </div> */}

        <MediaCards />

        {/* <div
          className="bg-[#CCEFF6] p-6 rounded-[20px] shadow-lg transition-all hover:shadow-xl hover:scale-105 w-[350px] mx-auto animate-slide-up-delay-1"
        >
          <h3 className="text-2xl font-semibold text-black">Find your Teammates</h3>
          <p className="mt-4 text-card-foreground">
            find your potential teammates from your own college at one click
          </p>
          <a href="#" className="text-primary font-medium mt-4 inline-block hover:underline">
            Explore
          </a>
        </div> */}

        {/* <div
          className="bg-[#F9EB71] p-6 rounded-[20px] shadow-lg transition-all hover:shadow-xl hover:scale-105 w-[350px] mx-auto animate-slide-up-delay-2"
        >
          <h3 className="text-2xl font-semibold text-black">Investors Approach</h3>
          <p className="mt-4 text-card-foreground">
            Helping invention to go funded from bootstraped
          </p>
          <a href="#" className="text-primary font-medium mt-4 inline-block hover:underline">
            Request Free Demo
          </a>
        </div> */}
      </div>

      <div className="mt-16"></div> {/* Adjust the gap here as needed */}
    </section>
  );
};

export default Features;