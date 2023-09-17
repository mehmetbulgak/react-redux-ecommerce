import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, getCategoryProducts } from '../../redux/productSlice';
import Loading from '../loading/Loading';
import Product from './Product';
import './Products.css';

const Products = ({ category, priceRange, rating }) => {
  const dispatch = useDispatch();
  const { products, productsStatus } = useSelector((state) => state.products);
  const [filteredProductsByPrice, setFilteredProductsByPrice] = useState([]);
  const [filteredProductsByRating, setFilteredProductsByRating] = useState([]);

  useEffect(() => {
    if (category) {
      dispatch(getCategoryProducts(category));
    } else {
      dispatch(getProducts());
    }
  }, [dispatch, category]);

  useEffect(() => {
    let productsFilteredByPrice = [...products];

    if (priceRange === "removePrice") {
      setFilteredProductsByPrice(null);
    }
    else if (priceRange) {
      const [minPrice, maxPrice] = priceRange.split('-').map(Number);

      productsFilteredByPrice = products.filter((product) => {
        const productPrice = Number(product.price);
        return productPrice >= minPrice && productPrice <= maxPrice;
      });
    }

    setFilteredProductsByPrice(productsFilteredByPrice);
  }, [products, priceRange]);

  useEffect(() => {
    let productsFilteredByRating = [...products];

    if (rating === "removeRating") {
      setFilteredProductsByRating(null)
    }
    else if (rating) {
      productsFilteredByRating = productsFilteredByRating.filter((product) => {
        return product.rating.rate >= rating;
      });
    }

    setFilteredProductsByRating(productsFilteredByRating);
  }, [products, rating]);

  const renderedProducts = filteredProductsByPrice.filter(product => filteredProductsByRating.includes(product));
  
  return (
    <div className='products-right-container'>
      {productsStatus === 'LOADING' ? (
        <Loading />
      ) : (
        <>
          <div className='products-container'>
            {renderedProducts.length === 0 ? (
              <p>Belirtilen fiyat aralığında veya puan aralığında bir ürün yok.</p>
            ) : (
              renderedProducts.map((product, index) => (
                <Product key={index} product={product} />
              ))
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Products;
