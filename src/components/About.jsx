import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white flex items-center"
    >
      <div className="max-w-screen-lg p-6 mx-auto flex flex-col justify-center w-full">
        <div className="pb-6 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-lg sm:text-xl mt-6 leading-relaxed">
          <strong>About Me:</strong> Passionate about pixels, lines of code, and crafting digital experiences that leave an impact. I'm Barun Kumar S, a skilled web developer with a knack for turning ideas into interactive, visually stunning websites.
        </p>

        <p className="text-lg sm:text-xl mt-6 leading-relaxed">
          <strong>💼 What I Do:</strong>  
          🌟 <strong>Front-End Magic:</strong> I specialize in creating beautiful, user-friendly front-end interfaces using HTML, CSS, and JavaScript. From responsive designs to intuitive user experiences, I've got you covered.
        </p>

        <p className="text-lg sm:text-xl mt-6 leading-relaxed">
          🚀 <strong>My Superpower:</strong> Turning complex concepts into elegant, functional websites. I thrive on challenges, love learning, and embrace new technologies and methodologies with open arms.
        </p>

        <p className="text-lg sm:text-xl mt-6 leading-relaxed">
          🌐 <strong>What I Believe:</strong> Every website has a story to tell, and my goal is to make sure it's an unforgettable one. I prioritize user experience, performance, and security, ensuring that your digital presence is top-notch.
        </p>

        <p className="text-lg sm:text-xl mt-6 leading-relaxed">
          🎯 <strong>My Mission:</strong> I'm here to transform your digital vision into reality. Let's collaborate, innovate, and create web solutions that not only meet your goals but exceed them. Your success is my success.
        </p>
      </div>
    </div>
  );
};

export default About;
