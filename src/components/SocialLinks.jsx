import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const [open, setOpen] = useState(false);

  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/barun-kumar-s/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/barunkumar31",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:barunvarun7@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="fixed left-0 top-[35%] z-50">
      {/* Desktop View */}
      <ul className="hidden lg:flex flex-col">
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 ${style}`}
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile View - Floating Button */}
      <div className="lg:hidden fixed bottom-5 left-5 bg-gray-700 text-white p-3 rounded-full shadow-lg cursor-pointer">
        <button onClick={() => setOpen(!open)}>
          {open ? <FaTimes size={25} /> : <FaBars size={25} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden fixed bottom-16 left-5 bg-gray-800 p-4 rounded-md shadow-md">
          <ul className="flex flex-col space-y-3">
            {links.map(({ id, child, href, download }) => (
              <li key={id} className="bg-gray-600 p-2 rounded-md hover:bg-gray-500">
                <a
                  href={href}
                  className="flex justify-between items-center text-white"
                  download={download}
                  target="_blank"
                  rel="noreferrer"
                >
                  {child}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SocialLinks;

