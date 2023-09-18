import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addToCart, getCartTotal } from '../../redux/cartSlice';
import "./DetailComponent.css"
import Popup from '../home/Popup';

const DetailComponent = ({ productDetail }) => {

    const dispatch = useDispatch()
    const [quantity, setQuantity] = useState(1)
    const [showPopup, setShowPopup] = useState(false); // Popup'ın görünürlüğünü kontrol etmek için state
    const [addedProduct, setAddedProduct] = useState(null); // Eklenen ürün bilgilerini saklamak için state

    const decrementQuantity = () => {
        if (quantity > 1) setQuantity(quantity - 1)
    }

    const incrementQuantity = () => {
        if (quantity < productDetail?.rating?.count) setQuantity(quantity + 1)
    }

    const addBasket = () => {
        dispatch(addToCart({ id: productDetail?.id, title: productDetail?.title, image: productDetail?.image, price: productDetail?.price, quantity: quantity }))
        dispatch(getCartTotal());

        setAddedProduct(productDetail);
        setShowPopup(true);
    }

    return (
        <div className='product-detail-container'>
            <div className='product-detail-image-container'>
                <img src={productDetail.image} alt={productDetail.title} className='product-detail-image' />
            </div>
            <div className='product-detail-content'>
                <div className='product-detail-category'>
                    <div className="product-detail-category-item">
                        {productDetail.category}
                    </div>
                </div>
                <h1>{productDetail.title}</h1>
                <div className='product-detail-desc'>{productDetail.description}</div>
                <div className='product-detail-price'>
                    <b>{productDetail.price}$</b>
                </div>
                <div className='product-detail-bottom'>
                    <div className='product-detail-quantity-container'>
                        <div className='product-detail-decrement-button' onClick={decrementQuantity}>-</div>
                        <div className='product-detail-quantity'>{quantity}</div>
                        <div className='product-detail-increment-button' onClick={incrementQuantity}>+</div>
                    </div>
                    <div className='product-detail-add-to-basket' onClick={addBasket}>ADD TO BASKET</div>
                </div>
            </div>

             <Popup showPopup={showPopup} setShowPopup={setShowPopup} addedProduct={addedProduct} quantity={quantity}/>
        </div>
    )
}

export default DetailComponent