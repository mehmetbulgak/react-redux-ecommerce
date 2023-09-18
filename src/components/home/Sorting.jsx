import React from 'react';
import "./Sorting.css";

const Sorting = ({ setPriceRange, setRating }) => {

  const handleSortPrice = (e) => {
    const selectedValue = e.target.value;
    setPriceRange(selectedValue);
  };

  const handleSortRating = (e) => {
    const selectedValue = e.target.value;
    setRating(selectedValue);
  };

  return (
    <div className='sorting-container'>

    <div className='sorting-header'>Rating Range:</div>
      <select className='sorting-rating' onChange={handleSortRating} defaultValue="">
        <option disabled value="">
          Rating Range
        </option>
        <option value="removeRating">Remove The Rating Filter</option>
        <option value="1">1 & Up</option>
        <option value="2">2 & Up</option>
        <option value="3">3 & Up</option>
        <option value="4">4 & Up</option>
        <option value="5">5 & Up</option>
      </select>

      <div className='sorting-header'>Price Range:</div>
      <select className='sorting-price' onChange={handleSortPrice} defaultValue="">
        <option disabled value="">
          Price Range
        </option>
        <option value="removePrice">Remove The Price Filter</option>
        <option value="0-50">0-50$</option>
        <option value="50-100">50-100$</option>
        <option value="100-200">100-200$</option>
        <option value="200-500">200-500$</option>
        <option value="500-1000">500-1000$</option>
      </select>

    </div>
  );
};

export default Sorting;
