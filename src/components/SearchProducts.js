import React from 'react';

const SearchProducts = ({ onSearch }) => {
  return (
    <div className="search-products">
      <input
        type="text"
        placeholder="Search products"
        onChange={onSearch}
      />
    </div>
  );
};

export default SearchProducts;
