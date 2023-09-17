import React from 'react'
import { useNavigate } from 'react-router-dom'

const NavbarLeft = () => {

  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/`)} className='navbar-logo-container'>
      <div className='navbar-logo-bulgak'>BULĞAK</div>
      <div className='navbar-logo-shop'>SHOP</div>
    </div>
  )
}

export default NavbarLeft