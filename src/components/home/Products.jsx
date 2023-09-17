import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, getCategoryProducts } from '../../redux/productSlice';
import Loading from '../loading/Loading';
import Product from './Product';
import './Products.css';

const Products = ({ category, sort, priceRange }) => {
  const dispatch = useDispatch();
  const { products, productsStatus } = useSelector((state) => state.products);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (category) {
      dispatch(getCategoryProducts(category));
    } else {
      dispatch(getProducts());
    }
  }, [dispatch, category]);

  useEffect(() => {
    if (priceRange) {
      const [minPrice, maxPrice] = priceRange.split('-').map(Number);

      const filtered = products.filter((product) => {
        const productPrice = Number(product.price);

        return productPrice >= minPrice && productPrice <= maxPrice;
      });

      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [priceRange, products]);

  useEffect(() => {
    if (priceRange && (sort === 'inc' || sort === 'dec')) {
      const sorted = [...filteredProducts].sort(
        (a, b) => Number(a.price) - Number(b.price)
      );

      if (sort === 'dec') {
        sorted.reverse();
      }

      setFilteredProducts(sorted);
    }
  }, [priceRange, sort, filteredProducts]);

  return (
    <div className='products-right-container'>
      {productsStatus === 'LOADING' ? (
        <Loading />
      ) : (
        <>
          <div className='products-container'>
            {filteredProducts.length === 0 ? (
              <p>Bu fiyat aralığında bir ürün yok.</p>
            ) : (
              filteredProducts.map((product, index) => (
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
