import React from 'react'
import "../Styles/Navbar.css";

const Navbar = () => {
  return (
    <nav>
        <div className="left">
            <div className="Logo">
                HARSHAL
            </div>
            <div className="menu">
                <ul>
                    <li className='active'>Rent</li>
                    <li>Buy</li>
                    <li>Sell</li>
                    <li>Manage Property</li>
                    <li>Resources</li>
                </ul>
            </div>

        </div>
        <div className="right">
                <button className='btn login'>Login</button>
                <button className='btn signup'>Sign up</button>
        </div>
    </nav>
  )
}

export default Navbar