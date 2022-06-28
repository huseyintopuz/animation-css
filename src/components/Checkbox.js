import React from 'react'
import './styles/checkbox.css'

const Checkbox = () => {
    return (
        <form className="form">
            <input type="radio" value="Car" />
            <label className="unchecked" ></label><br />
            <input type="radio" value="Disabled" disabled />
            <label className="unchecked"> Disabled</label><br />
        </form>

    )
}

export default Checkbox