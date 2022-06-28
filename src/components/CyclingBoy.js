import React from 'react';
import boy from '../images/boy.png';
import wheel from '../images/wheel.png';
import ground from '../images/ground.png';
import balloon from '../images/balloon.png'
import './styles/cyclingboy.css'

const CyclingBoy = () => {
  return (
    <div className="cycling-boy">
        <img className="boy" src={boy} width="389" height="490" alt="boy" />
        <img className="backwheel" src={wheel} width="178" height="178" alt="backwheel" />
        <img className="wheel" src={wheel} width="178" height="178" alt="wheel" />
        <img className="ground" src={ground} width="678" height="46"alt="ground" />
        <img className="balloon" src={balloon} width="142" height="310" alt="balloon" />
    </div>
  )
}

export default CyclingBoy