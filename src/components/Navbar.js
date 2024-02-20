import React from 'react'
import logo from '../assets/logo/Logo-Full-Dark.png'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
        <Link to='/'>
            <img src={logo} alt="logo" width={160} height={32} loading='lazy'/>
        </Link>
    </div>
  )
}

export default Navbar
