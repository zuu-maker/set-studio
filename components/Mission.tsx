import React from 'react'
import LeftMission from './LeftMission'
import RightMisson from './RightMisson'

interface Props{
  developmentTitle:string
  developmentDescription:string
}

function Mission({developmentTitle, developmentDescription }:Props) {
  return (
    <div className='flex min-h-screen' >
            <LeftMission />
            <RightMisson
              developmentTitle={developmentTitle}
              developmentDescription={developmentDescription}
            />
    </div>
  )
}

export default Mission