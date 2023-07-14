import React from "react";
import { Project } from "../typings";

interface Props {
  project: Project;
}

function ProjectComponent({ project }: Props) {
  return (
    <div className="md:relative">
      <dt>
        <p className="md:ml-16 text-lg leading-6 font-medium text-gray-900">
          {project.title}
        </p>
      </dt>
      <dd className="mt-2 md:ml-16">
        <a href={project.link} target="_blank">
          <div>
            <img
              className="w-80 object-contain shadow-md rounded lg hover:cursor-pointer hover:shadow-2xl "
              src={project.thumbNail}
              alt=""
            />
          </div>
        </a>
      </dd>
    </div>
  );
}

export default ProjectComponent;
