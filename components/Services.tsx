import React from 'react'
import { DesktopComputerIcon, DeviceMobileIcon,CameraIcon } from '@heroicons/react/outline'
import { Service } from '../typings'
import ServiceComponent from './ServiceComponent';

// import { DesktopComputerIcon, DeviceMobileIcon } from '@heroicons/react/solid'
interface Props{
    services:Service[]
  }

function Services({services}:Props) {
    
  return (
    <div id="service-div" className="h-screen flex items-center justify-center p-12" >
        <div className='flex justify-between' >
           {services.map((s) => <ServiceComponent key={s._id} service={s} />)}
        </div>
    </div>
  )
}

export default Services