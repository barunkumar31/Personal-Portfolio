import React from "react";
import HeroImage from "../assets/HeroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="min-h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 flex items-center"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-12">
        
        {/* Left Section - Text */}
        <div className="flex flex-col justify-center text-center md:text-left">
          <h2 className="text-4xl sm:text-6xl font-bold text-white">
            Web Developer
          </h2>
          <p className="text-gray-400 py-4 max-w-md text-base sm:text-lg">
            I'm an enthusiastic front-end developer with a strong foundation in HTML, CSS, and JavaScript. Proficient in modern tools like Tailwind CSS, React.js, and Redux, I'm eager to create user-friendly interfaces and contribute to dynamic web projects.
          </p>

          <div className="flex justify-center md:justify-start">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="flex justify-center">
          <img
            src={HeroImage}
            alt="Profile"
            className="rounded-2xl mx-auto w-2/3 sm:w-1/2 md:w-[300px] lg:w-[400px] shadow-lg"
          />
        </div>

      </div>
    </div>
  );
};

export default Home;
