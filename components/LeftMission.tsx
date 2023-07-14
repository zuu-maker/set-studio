import React from "react";

function LeftMission() {
  return (
    <div className="flex-1 flex md:items-center md:justify-center md:px-16">
      <div className="relative w-full max-w-lg">
        <div className="absolute top-0 -left-5 md:-left-40 h-48 w-48 md:w-72 md:h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-lg opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-2 md:-right-4 h-48 w-48 md:w-72 md:h-72 bg-sky-300 rounded-full mix-blend-multiply filter blur-lg opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute left-30 -bottom-4 md:-bottom-8 h-48 w-48 md:w-72 md:h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-lg opacity-70 animate-blob animation-delay-4000"></div>
        <div className="mb-8 md:m-8 flex flex-col md:flex-none relative space-y-4">
          <div className=" p-5 bg-white rounded-lg w-fit flex items-center justify-between space-x-8">
            <div className="text-base text-gray-600 h-6 pl-2 w-48 bg-gray-300 rounded">
              Creative designs
            </div>
            <div className="w-18 md:w-24 h-6 rounded-lg bg-cyan-300"></div>
          </div>

          <div className="p-5 bg-white rounded-lg w-fit flex items-center justify-between space-x-8">
            <div className="text-base text-gray-600 h-6 pl-2 w-48 bg-gray-300 rounded">
              Original creations
            </div>
            <div className="w-18 md:w-24 h-6 rounded-lg bg-cyan-300"></div>
          </div>

          <div className="p-5 bg-white rounded-lg w-fit flex items-center justify-between space-x-8">
            <div className="text-base text-gray-600 h-6 pl-2 w-48 bg-gray-300 rounded">
              Exact configurations
            </div>
            <div className="w-18 md:w-24 h-6 rounded-lg bg-cyan-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftMission;
