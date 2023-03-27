import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Paginate from 'react-paginate';
import Product from './Product';
import products from '../products'; // Import the products data
import searchProducts from '../searchProducts';

import './CategoryList.css';

const CategoryList = ({ searchTerm }) => {
  const location = useLocation();
  const categoryMatch = location.pathname.match(/\/(?:grocery|stationery|footwear|electronics|clothing|computers|mobile)\/([^/]+)/);
  const match = categoryMatch ? { params: { category: categoryMatch[1] } } : null;

  const category = match?.params.category || 'undefined';

  // Load product data for the selected category
  const productList = products[category] || [];

  // Filter the products based on searchTerm
  const filteredProducts = searchProducts(productList, searchTerm);

  // Pagination state and configuration
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  // Render products dynamically
  const content = filteredProducts
    .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
    .map((product, index) => <Product key={index} product={product} />);

  // Pagination component
  const pageCount = Math.ceil(filteredProducts.length / itemsPerPage);
  const pagination = pageCount > 1 && (
    <Paginate
      previousLabel={'previous'}
      nextLabel={'next'}
      breakLabel={'...'}
      breakClassName={'break-me'}
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={handlePageChange}
      containerClassName={'react-paginate'}
      activeClassName={'active'}
      disabledClassName={'disabled'}
    />
  );

  return (
    <div className="category-list-container">
      <h2>{category.toUpperCase()}</h2>
      <div className="category-list">
        {content.length > 0 ? content : <p>No products found in this category.</p>}
      </div>
      {pagination}
    </div>
  );
};

export default CategoryList;
