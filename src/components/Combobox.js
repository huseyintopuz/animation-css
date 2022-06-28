import React, { useState } from 'react'
import { RightOutlined, DownOutlined } from '@ant-design/icons'
import './styles/combobox.css'

const Combobox = () => {
    const [show, setShow] = useState(true)
    return (
        <div className="combob">
            <div className='combobox'>
                {show ? <div className='box'>Combo Box</div>
                : <div className='box'>Combo Box Hover</div>}
                {show ? <RightOutlined onClick={e => setShow(false)} className='right' />
                    : <DownOutlined onClick={e => setShow(true)} className='right' />}

            </div>
            { !show && <ul className='list-group'>
                <li className='list'>Combo Box Hover</li>
                <li className='list'>Combo Box Hover</li>
                <li className='list'>Combo Box Hover</li>
                <li className='list'>Combo Box Hover</li>
                <li className='list'>Combo Box Hover</li>
            </ul>}
        </div>
    )
}

export default Combobox