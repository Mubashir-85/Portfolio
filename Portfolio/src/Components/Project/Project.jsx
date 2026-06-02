import React from "react";
import { FaArrowRight } from "react-icons/fa";

function Project() {
  const frontend_projects = [
    {
      Name: "Expense Tracker",
      Description:
        "A web application that allows users to track their expenses and manage their finances effectively. It provides features such as adding expenses, categorizing them, and visualizing spending patterns through charts and graphs.",
      link: "https://expenzetrack.netlify.app/",
    },
    {
      Name: "Social Media App",
      Description:
        "A social media web application built with React that allows users to create, search, and manage posts through a clean and responsive interface. Features CRUD operations, API integration, dynamic content rendering, and modern state management.",
      link: "https://connect-flow.netlify.app/",
    },
    {
      Name: "E-Commerce Website",
      Description:
        "A modern e-commerce application built with React and DummyJSON API that enables users to browse products, manage their shopping cart, update quantities, and view real-time pricing through a seamless shopping experience.",
      link: "https://digitalmarts.netlify.app/",
    },
  ];
  return (
    <div className="h-screen bg-[#131313] flex ">
      <div className="flex flex-col justify-center w-full max-w-7xl mx-auto px-6 lg:px-20 gap-3">
        <h1 className="font-bold text-white lg:text-5xl font-serif">
          My Projects
        </h1>
        <div className="text-[#D4C5AB] w-[45%] h-1 mb-10">
          <h2 className="text-[#D4C5AB]">
            A collection of projects showcasing expertise in frontend
            interactivity and robust backend engineering.
          </h2>
          {/* <h2>seamless user experiences, and modern backend solutions.</h2> */}
        </div>
        <div className="w-full h-auto flex flex-col gap-6 mt-10 mb-6">
          <div className="w-full h-auto flex flex-col gap-3">
            <div>
              <h2 className="text-[#E5E2E1] lg:text-4xl font-semibold">
                Frontend Projects
              </h2>
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5 items-stretch">
              {frontend_projects.map((project, index) => {
                return (
                  <div
                    className="w-full h-auto flex flex-col gap-2  bg-[#1C1B1B] border p-6 rounded-lg"
                    key={index}
                  >
                    <h3 className="text-[#E5E2E1] text-2xl font-medium">
                      {project.Name}
                    </h3>

                    <p className="text-[#D4C5AB] mt-5 min-h-[180px]">{project.Description}</p>

                    <div className="bg-[#D4C5AB] h-[1px] w-full mt-5 " />
                    <a
                      href={project.link}
                      className="text-[#D4C5AB] flex items-center text-sm mt-5 gap-3"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project <FaArrowRight className="text-[#D4C5AB]" />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
