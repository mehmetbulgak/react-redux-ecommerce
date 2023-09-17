import React from 'react'
import "./Popup.css"

const Popup = ({showPopup,setShowPopup, addedProduct, quantity}) => {
  return (
    <>
    {showPopup && (
        <div className="popup">
            <div className="popup-content">
                <h2>Ürün Başarıyla Sepete Eklendi</h2>
                {addedProduct && (
                    <div>
                        <img width={100} src={addedProduct.image} alt={addedProduct.title} />
                        <p>{addedProduct.title}</p>
                        <p>{addedProduct.price}$</p>
                        <p>{quantity}</p>
                    </div>
                )}
                <button onClick={() => setShowPopup(false)}>Kapat</button>
            </div>
        </div>
    )}
    </>
  )
}

export default Popup