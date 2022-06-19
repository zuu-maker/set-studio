import React from 'react'

function LeftMission() {
  return (
    <div className=' flex-1 flex min-h-screen items-center justify-center px-16'>
            <div className='relative w-full max-w-lg' >
            <div className='absolute top-0 -left-4 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-lg opacity-70 animate-blob' ></div>
            <div className='absolute top-0 -right-4 w-72 h-72 bg-sky-300 rounded-full mix-blend-multiply filter blur-lg opacity-70 animate-blob animation-delay-2000' ></div>
            <div className='absolute left-20 -bottom-8 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-lg opacity-70 animate-blob animation-delay-4000' ></div>
                <div className='m-8 relative space-y-4' >
                   
                    
                    <div className=' p-5 bg-white rounded-lg flex items-center justify-between space-x-8' >
                            <div className='text-base text-gray-600 h-6 pl-2 w-48 bg-gray-300 rounded'>
                                Creative designs
                            </div>
                            <div className='w-24 h-6 rounded-lg bg-cyan-300' >    
                        </div>
                    </div>

                    <div className='p-5 bg-white rounded-lg flex items-center justify-between space-x-8' >
                            <div className='text-base text-gray-600 h-6 pl-2 w-48 bg-gray-300 rounded'>
                                Original creations
                            </div>
                            <div className='w-24 h-6 rounded-lg bg-cyan-300' >    
                        </div>
                    </div>

                    <div className='p-5 bg-white rounded-lg flex items-center justify-between space-x-8' >
                            <div className='text-base text-gray-600 h-6 pl-2 w-48 bg-gray-300 rounded'>
                                Exact configurations
                            </div>
                            <div className='w-24 h-6 rounded-lg bg-cyan-300' >    
                        </div>
                    </div>

                </div>
            </div>
        </div>
  )
}

export default LeftMission