import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCartTotal } from '../../../redux/cartSlice'
import { useNavigate } from 'react-router-dom'
import basket from '../../../assets/icons/basket.svg'

const NavbarRight = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const itemCount = useSelector(state => state.carts.itemCount);

  useEffect(() => {
    dispatch(getCartTotal())
  }, [dispatch])

  return (
    <div onClick={() => navigate('cart')} className='navbar-right-container'>
      <img src={basket} alt="basket" className='navbar-basket-icon' />
      <div className='navbar-basket-count'>{itemCount}</div>
    </div>
  )
}

export default NavbarRight
