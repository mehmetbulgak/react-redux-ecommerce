import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCartTotal } from '../redux/cartSlice'
import CartComponent from '../components/cart/CartComponent'

const Cart = () => {

    const dispatch = useDispatch();
    const { carts, totalAmount, itemCount } = useSelector(state => state.carts);

    console.log(carts, totalAmount, itemCount)

    useEffect(() => {
        dispatch(getCartTotal())
    }, [dispatch])

    return (
        <div className='cart-container'>
            <h1 className='cart-header'>Basket</h1>

            {
                carts?.length > 0 ?
                    <div>
                        {
                            carts?.map((cart, index) => (
                                <CartComponent key={index} cart={cart} />
                            ))
                        }
                        <div className='cart-total-amount'>Total Amount: <span>{totalAmount}$</span></div>
                    </div>
                    :
                    <div>Your Wallet is Empty</div>
            }
        </div>
    )
}

export default Cart