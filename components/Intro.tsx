import React from 'react'

interface Props{
  titleTop:string
  titleBottom:string
  intro:string
}

function Intro({titleTop, titleBottom,intro }:Props) {
  return (
    <main className=" mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-slate-800 sm:text-5xl md:text-6xl">
                <div>
                <p className="block xl:inline">{titleTop}</p>{'\n '}
                </div>
               
                <p className="block text-sky-600 xl:inline">{titleBottom}</p>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
               {intro}
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 md:py-4 md:text-lg md:px-10"
                  >
                    Send Message
                  </a>
                </div>
              </div>
            </div>
          </main>
  )
}

export default Intro