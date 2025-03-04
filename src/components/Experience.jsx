import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import MySQL from "../assets/MySQL.png";
import Cplus from "../assets/c++.png";
import Python from "../assets/python.png";
import Msexcel from "../assets/ms-excel.png";
import Nodejs from "../assets/node.png";
import github from "../assets/github.png";
import figma from "../assets/figma.png";
import tailwind from "../assets/tailwind.png";

const Experience = () => {
  const techs = [
    { id: 1, src: html, title: "HTML", style: "shadow-orange-500" },
    { id: 2, src: css, title: "CSS", style: "shadow-blue-500" },
    { id: 3, src: javascript, title: "JavaScript", style: "shadow-yellow-500" },
    { id: 4, src: reactImage, title: "React JS", style: "shadow-blue-600" },
    { id: 5, src: tailwind, title: "Tailwind", style: "shadow-sky-400" },
    { id: 6, src: Nodejs, title: "Node JS", style: "shadow-white" },
    { id: 7, src: MySQL, title: "MySQL", style: "shadow-pink-400" },
    { id: 8, src: Cplus, title: "C++", style: "shadow-blue-400" },
    { id: 9, src: Python, title: "Python", style: "shadow-yellow-400" },
    { id: 10, src: figma, title: "Figma", style: "shadow-purple-400" },
    { id: 11, src: github, title: "GitHub", style: "shadow-gray-400" },
    { id: 12, src: Msexcel, title: "MS Excel", style: "shadow-green-400" },
  ];

  return (
    <div name="experience" className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full text-white">
        <div className="text-center">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Experience</p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center py-8 px-6 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-4 rounded-lg ${style}`}>
              <img src={src} alt={title} className="w-20 mx-auto" />
              <p className="mt-3">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
