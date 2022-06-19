import React from 'react'

interface Props{
  developmentTitle:string
  developmentDescription:string
}

function RightMisson({developmentTitle, developmentDescription }:Props) {
  return (
    <div className='min-h-screen flex-1 flex items-center justify-center px-16' >
        <div className='max-w-sm flex flex-col gap-6 ' >
            <div className="text-4xl tracking-tight font-nromal text-gray-900 sm:text-5xl md:text-4xl" >
               {developmentTitle}
            </div>
            <div className='font-light' >
              {developmentDescription}
            </div>
        </div>
    </div>
  )
}

export default RightMisson