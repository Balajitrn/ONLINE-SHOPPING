import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import './Header.css';
import cartImage from '../assets/shopping_cart.png';
import logoImage from '../assets/business_logo.png';

const Header = ({ setSearchTerm }) => {
  const { cart } = useContext(CartContext);
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showStationeryDropdown, setShowStationeryDropdown] = useState(false);
  const [showElectronicsDropdown, setShowElectronicsDropdown] = useState(false); // New state for Electronics dropdown

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <header className="header-container">
      <div className="header-container">
        <div className="logo-container">
          <img src={logoImage} alt="Business Logo" className="logo-image" />
        </div>
        <nav className="header-nav">
                   {/* Add the NavLink for the ConsolidatedSales report */}
                   <NavLink to="/reports/consolidated-sales" activeClassName="active">
            Consolidated Sales Report
          </NavLink>
          <div
            className="dropdown"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <Link to="#">Shop By Category</Link>
            {showDropdown && (
              <div className="dropdown-content">
                <Link
                  to="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowStationeryDropdown(!showStationeryDropdown);
                  }}
                >
                  Stationery
                </Link>
                {showStationeryDropdown && (
                  <div className="dropdown-content" onMouseLeave={() => setShowStationeryDropdown(false)}>
                    <Link to="/stationery/books">Books</Link>
                    <Link to="/stationery/notebooks">Notebooks</Link>
                    <Link to="/stationery/notes">Notes</Link>
                    <Link to="/stationery/school-supplies">School Supplies</Link>
                    <Link to="/stationery/office-supplies">Office Supplies</Link>
                    <Link to="/stationery/others">Others</Link>
                  </div>
                )}
                {/* New Electronics category */}
                <Link
                  to="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowElectronicsDropdown(!showElectronicsDropdown);
                  }}
                >
                  Electronics
                </Link>
                {showElectronicsDropdown && (
                  <div className="dropdown-content" onMouseLeave={() => setShowElectronicsDropdown(false)}>
                    <Link to="/electronics/computers">Computers</Link>
                    <Link to="/electronics/phones">Phones</Link>
                    <Link to="/electronics/tvs">TVs</Link>
                    {/* Add more subcategories if needed */}
                  </div>
                )}
              </div>
            )}
          </div>
        </nav>
        <div className="search-bar-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search for products"
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <nav className="cart-nav">
        <NavLink to="/cart" activeClassName="active">
          <img src={cartImage} alt="Cart" className="cart-image" />
          ({itemCount})
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
