import React from "react";
import {
  DesktopComputerIcon,
  DeviceMobileIcon,
  CameraIcon,
} from "@heroicons/react/outline";
import { Service } from "../typings";
import ServiceComponent from "./ServiceComponent";

// import { DesktopComputerIcon, DeviceMobileIcon } from '@heroicons/react/solid'
interface Props {
  services: Service[];
}

function Services({ services }: Props) {
  return (
    <div id="service-div" className="px-16 py-24 ">
      <div className="flex flex-col md:flex-row justify-between">
        {services.map((s) => (
          <ServiceComponent key={s._id} service={s} />
        ))}
      </div>
    </div>
  );
}

export default Services;
