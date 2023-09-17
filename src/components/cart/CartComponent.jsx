import React from 'react'
import { removeFromCart, getCartTotal } from '../../redux/cartSlice'
import { useDispatch } from 'react-redux'
import "./CartComponent.css"

const CartComponent = ({ cart }) => {

    const dispatch = useDispatch();

    const removeFromBasket = () => {
        dispatch(removeFromCart(cart?.id));
        dispatch(getCartTotal());
    }

    return (
        <div className='cart-item'>
            <div>
                <img src={cart?.image} width={100} alt={cart?.title} />
                <div>{cart?.title}</div>
                <div><b className='cart-price'>{cart?.price}$</b> x <span className='cart-amount'>{cart?.quantity}</span></div>
            </div>
            <div className='cart-delete-button' onClick={removeFromBasket}>Delete From Basket</div>
        </div>
    )
}

export default CartComponent
