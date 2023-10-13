import React from "react";

const About = () => {
  return (
    
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        About Me:Passionate about pixels, lines of code, and crafting digital experiences that leave an impact. I'm Barun Kumar S, a skilled web developer with a knack for turning ideas into interactive, visually stunning websites.<br/>

       💼 What I Do:
        🌟 Front-End Magic: I specialize in creating beautiful, user-friendly front-end interfaces using HTML, CSS, and JavaScript. From responsive designs to intuitive user experiences, I've got you covered.
        </p>

        

        <p className="text-xl">
        🚀 My Superpower:Turning complex concepts into elegant, functional websites. I thrive on challenges, love learning, and embrace new technologies and methodologies with open arms.<br/>

      🌐 What I Believe:Every website has a story to tell, and my goal is to make sure it's an unforgettable one. I prioritize user experience, performance, and security, ensuring that your digital presence is top-notch.<br/>

       🎯 My Mission:I'm here to transform your digital vision into reality. Let's collaborate, innovate, and create web solutions that not only meet your goals but exceed them. Your success is my success.
        </p>
      </div>
    </div>
  );
};

export default About;
