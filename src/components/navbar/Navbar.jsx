import React from 'react'
import NavbarLeft from './navbarItem/NavbarLeft'
import NavbarRight from './navbarItem/NavbarRight'
import "./Navbar.css"

const navbar = () => {
  return (
    <nav>
        <NavbarLeft />
        <NavbarRight />
    </nav>
  )
}

export default navbar