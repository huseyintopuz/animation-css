import React from 'react'
import '../components/styles/searchbox.css'

const Searchbox = () => {
    return (
        <div className="container">
                <input className="search-box" type="text" placeholder="" />
                <span className="focus-border">
                    <i></i>
                </span>
        </div>
    )
}

export default Searchbox