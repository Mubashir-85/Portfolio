import React from "react";

function Project() {
    const projects = {
        project1: {},
        project2: {},
        project3: {},
    }
  return (
    <div className="h-screen bg-[#1E1D1B] flex ">
      <div className="flex flex-col items-start justify-center w-full max-w-7xl mx-auto px-6 lg:px-20 gap-3">
        <h1 className="font-bold text-white lg:text-5xl font-serif">
          Featured Work
        </h1>
        <div className="text-[#D4C5AB] w-full h-1 mb-6">
          <h2 className="text-[#D4C5AB]">
            A selection of full-stack applications built focusing on scalable
            architecture,
          </h2>
          <h2>seamless user experiences, and modern backend solutions.</h2>
        </div>



      </div>
    </div>
  );
}

export default Project;
