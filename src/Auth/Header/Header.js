import React from 'react'
import './Header.css'
import Dim from "../Images/Dim.png"
const Header = () => {
  return (
    <div>
        <div className='headerBackground'>
           <h1 className='img'> <img src={Dim} alt="show" /> </h1>
        </div>
    </div>
  )
}

export default Header