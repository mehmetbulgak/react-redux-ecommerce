import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Popup.css"

const Popup = ({ showPopup, setShowPopup, addedProduct, quantity }) => {

    const navigate = useNavigate();

    return (
        <>
            {showPopup && (
                <div className="popup">
                    <div className="popup-content">
                        <h3>The product has been successfully added to the cart.</h3>
                        {addedProduct && (
                            <div className='popup-product-detail'>
                                <img width={100} src={addedProduct.image} alt={addedProduct.title} />
                                <div>
                                    <p>{addedProduct.title}</p>
                                    <div className='popup-product-price-quantity'>
                                        <p className='popup-price'>{addedProduct.price}$</p>
                                        <span>x</span>
                                        <p className='popup-quantity'>{quantity}</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className='popup-button-container'>
                            <button className='popup-go-to-basket' onClick={() => navigate('/cart')}>Go To Basket</button>
                            <button className='popup-close' onClick={() => setShowPopup(false)}>Close</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Popup