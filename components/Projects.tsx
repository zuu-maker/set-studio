import React from "react";
import { Project } from "../typings";
import ProjectComponent from "./ProjectComponent";

interface Props {
  projects: Project[];
}

function Projects({ projects }: Props) {
  return (
    <div id="project-div" className=" flex items-center justify-center">
      <div className="px-4 md:px-0 py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-sky-600 font-semibold tracking-wide uppercase hover:cursor-pointer hover:underline ">
              Browse All
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Projects
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Delivering Outstanding Solutions for Diverse Industries.
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 w-full flex flex-col justify-center items-center md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {projects.map((p) => (
                <ProjectComponent key={p._id} project={p} />
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
