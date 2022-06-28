import React from 'react'
import './styles/step.css'

const Step = ({stepName}) => {
  return (
    <div className='step'>
        <div className='step-box'>
          <span className="step-name">{stepName}</span>
        </div>
        <div className='circle'/>
    </div>
  )
}

export default Step