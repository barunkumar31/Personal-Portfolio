import React from "react";
import im4 from "../assets/portfolio/im4.jpeg";
import im5 from "../assets/portfolio/im5.jpeg";
import im7 from "../assets/portfolio/im7.jpeg";
import im8 from "../assets/portfolio/im8.jpeg";
import im6 from "../assets/portfolio/im6.jpeg";
import im1 from "../assets/portfolio/im1.jpeg";
import im2 from "../assets/portfolio/im2.jpeg";
import im3 from "../assets/portfolio/im3.jpeg";




const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: im4,
      link:"https://github.com/barunkumar31/Sidcup-family-golf",
      Demo:"https://sid-out-family-golf.vercel.app/",
    },
    {
      id: 2,
      src: im5,
      link:"https://github.com/barunkumar31/Piano",
      Demo:"https://piano-five-tawny.vercel.app/",
    },
    {
      id: 3,
      src:im7,
      link:"https://github.com/barunkumar31/Text_To_Voice_Converter",
      Demo:"https://text-to-voice-converter.vercel.app/",
    },
    {
      id: 4,
      src: im8,
      link:"https://github.com/barunkumar31/Ecommerce_website",
      Demo:"https://ecommerce-website-six-tan.vercel.app/",
    },
    {
      id: 5,
      src: im6,
      link:"https://github.com/barunkumar31/DuDoo-Foods",
      Demo:"https://du-doo-foods.vercel.app/",
    },
    {
      id: 6,
      src: im1,
      link:"https://github.com/barunkumar31/InMovies",
      Demo:"https://in-movies.vercel.app/",
    },
    {
      id: 7,
      src: im2,
      Demo:"https://www.figma.com/proto/rJ2ZSbBbsKKM0LZB9aYa9h/Eduction-website-Design?node-id=1-2&scaling=scale-down",
    },
    {
      id: 8,
      src: im3,
      Demo:"https://www.figma.com/proto/j1pC09ogbrL3D9FF8Y5p6G/Travlog-Landing-Page?node-id=832-25&scaling=scale-down",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className=" grid sm:grid-cols-2 md:grid-cols-4 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,link,Demo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={Demo}>Demo</a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={link}>Code</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
