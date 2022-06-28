import React from 'react';
import Step from './Step';
import './styles/steps.css';

const Steps = () => {
    return (
        <div className='steps'>
            <div className='steps-foot'>
                <Step stepName='Step 1' />
                <Step stepName='Step 2' />
                <Step stepName='Step 3' />
                <Step stepName='Step 4' />
                <Step stepName='Step 5' />
                <Step stepName='Step 6' />
            </div>
            <div className='border'/>
        </div>
    )
}

export default Steps