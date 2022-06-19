import React from 'react'
import { DesktopComputerIcon, DeviceMobileIcon,CameraIcon } from '@heroicons/react/outline'
import { Service } from '../typings'

interface Props{
  service:Service
}

function ServiceComponent({service}:Props) {
  return (
    <div className='max-w-sm flex flex-col gap-3' >
       {service.title === "Web Design" && (
        <div className='flex items-center justify-center h-12 w-12 rounded-md bg-indigo-300 text-white'>
          <CameraIcon className="h-8 w-8" aria-hidden="true"/>
        </div >
       )}

      {service.title === "App Development" && (
        <div className='flex items-center justify-center h-12 w-12 rounded-md bg-cyan-500 text-white'>
          <DeviceMobileIcon className="h-8 w-8" aria-hidden="true"/>
        </div >
       )}

        {service.title === "Web Development" && (
        <div className='flex items-center justify-center h-12 w-12 rounded-md bg-sky-500 text-white'>
          <DesktopComputerIcon className="h-8 w-8" aria-hidden="true"/>
        </div >
       )}
      
      <div className="text-4xl tracking-tight font-normal text-gray-900 sm:text-5xl md:text-3xl" >
          {service.title}
      </div>
      <div className='font-light'>
          {service.description}
      </div>
    </div>
  )
}

export default ServiceComponent