import React from "react";
import { assets } from "../assets/assets";
function Projects() {
  return (
    <>
      <div>
        <h1 className="text-4xl py-2 text-center font-bold">Services</h1>
        <p className="px-6 text-md py-4 leading-8 text-gray-800">
          I approach each project with a problem-solving mindset, aiming to make
          applications user-centered and efficient. I also value teamwork and
          clear communication, ensuring projects move smoothly from idea to
          completion.{" "}
          <span className="text-teal-600">Designing and developing </span>{" "}
          user-friendly, interactive interfaces with React, HTML, CSS, and
          JavaScript. I focus on creating responsive, visually appealing, and
          accessible designs that work seamlessly across devices
        </p>

        <p className="px-6 text-md py-4 leading-8 text-gray-800 ">
          Building complete, end-to-end web applications using the stack{" "}
          <span className="text-teal-600"> (Express, React, Node.js). </span>
          From front-end design to back-end functionality, I create responsive,
          high-performance applications tailored to client needs
        </p>
      </div>
      <div className="lg:flex gap-12 ">
        <div className="ml-6 text-center shadow-lg p-10 rounded-xl my-10 flex-1">
          <img className="mx-auto" src={assets.code} width={100} height={100} />
          <h3 className="text-lg font-medium pt-8 pb-2 ">
            Code your dream project
          </h3>
          <p className="py-2">
            Do you have an idea for your next great website? Let's make it a
            reality.
          </p>
        </div>
        <div className="mr-6 text-center shadow-lg p-10 rounded-xl my-10 flex-1">
          <img
            className="mx-auto"
            src={assets.consulting}
            width={100}
            height={100}
          />
          <h3 className="text-lg font-medium pt-8 pb-2 ">Consulting</h3>
          <p className="py-2">
            Are you interested in feedback for your current project? I can give
            you tips and tricks to level it up.
          </p>
        </div>
      </div>
    </>
  );
}

export default Projects;
