import React from "react";
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { assets } from "./assets/assets";
import { useState } from 'react'
const App = () => {
  
  const [darkMode, setDarkMode] = useState(false)
  return (
    
    <div className= "ark:bg-gray-900" >
      <div className="text-center p-10 dark:bg-gray-900">
        <h1 className="text-teal-600 text-5xl font-medium">
          Hey!, I’m Jaskirat Singh Bhatia,
        </h1>
        <h3 className="text-2xl py-2 dark:text-white">
          a web developer specializing in the MERN stack.
        </h3>
        <p className="text-md py-5 leading-8 text-gray-800 dark:text-white">
          {" "}
          I’m passionate about creating seamless digital experiences and
          intuitive, responsive websites.
          <br />
          My work combines modern web technologies with a commitment to creating
          seamless digital experiences. Let’s connect to bring ideas to life!
        </p>
      </div>
      <div className="text-5xl flex justify-center py-5 gap-16 text-black dark:bg-gray-900 dark:text-white">
        <a
          href="https://twitter.com/JaskiratBhatia"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 transition duration-300 ease-in-out"
        >
          <AiFillTwitterCircle />
        </a>
        <a
          href="https://www.linkedin.com/in/jaskirat-singh-bhatia-5b789a1ab?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
          target="_blank"
          rel="noreferrer"
          className=" hover:text-blue-600 transition duration-300 ease-in-out pl-5"
        >
          <AiFillLinkedin />
        </a>
        <a
          href="https://github.com/jaskirat-singh-12 "
          target="_blank"
          rel="noopener noreferrer"
          className=" hover:text-blue-600 transition duration-300 ease-in-out pl-5"
        >
          <BsGithub />
        </a>
      </div>
      <div className="mx-auto bg-gradient-to-b from-teal-700 to-white rounded-full w-60 h-60 relative overflow-hidden mt-4 md:h-96 md:w-96">
        <img src={assets.bitmoji} />
      </div>
    </div>
  );
};

export default App;
