import React from 'react'
import { useNavigate } from 'react-router-dom'
import star from '../../assets/icons/star.svg'

const Product = ({ product }) => {

    const navigate = useNavigate();

    return (
        <div className='products-item' onClick={() => navigate(`products/${product.id}`)}>
            <img className='products-item-img' src={product?.image} alt={product?.title} width={100} />
            <h4 className='products-item-title'>{product?.title}</h4>
            <p className='products-item-rating'>
                <img width={20} src={star} alt="star" />
                {product?.rating?.rate}
            </p>
            <p className='products-item-price'>{product?.price}$</p>
        </div>
    )
}

export default Product