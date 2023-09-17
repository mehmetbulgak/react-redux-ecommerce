import React from 'react';
import "./Sorting.css";

const Sorting = ({ setSort, setPriceRange }) => {
  const handleSortIncToDesc = (e) => {
    const selectedValue = e.target.value;
    setSort(selectedValue);
  };

  const handleSortPrice = (e) => {
    const selectedValue = e.target.value;
    setPriceRange(selectedValue);
  };

  return (
    <div className='sorting-container'>


      <div>LOL:</div>
      <select onChange={handleSortPrice} defaultValue="">
        <option disabled value="">
          lol
        </option>
        <option value="0-50">0-50</option>
        <option value="50-100">50-100</option>
        <option value="100-200">100-200</option>
        <option value="200-500">200-500</option>
        <option value="500-1000">500-1000</option>
      </select>


      <div className='sorting-header'>Sort By Price:</div>
      <select onChange={handleSortIncToDesc} defaultValue="">
        <option disabled value="">
          Sort
        </option>
        <option value="inc">Increasing Price</option>
        <option value="dec">Decreasing Price</option>
      </select>
    </div>
  );
};

export default Sorting;
