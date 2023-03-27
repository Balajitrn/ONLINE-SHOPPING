{/*
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationMenu.css';

const NavigationMenu = () => {
  const [isSubMenuVisible, setIsSubMenuVisible] = useState(false);

  const toggleSubMenu = () => {
    setIsSubMenuVisible(!isSubMenuVisible);
  };

  return (
    <nav className="navigation-menu">
      <ul>
        <li><NavLink to="/grocery">Grocery</NavLink></li>
        <li><NavLink to="/footwear">Footwear</NavLink></li>
        <li><NavLink to="/clothing">Clothing</NavLink></li>
        <li><NavLink to="/electronics">Electronics</NavLink></li>
        <li><NavLink to="/computers">Computers</NavLink></li>
        <li><NavLink to="/mobile">Mobile</NavLink></li>
        <li>
          <NavLink to="/stationery" onClick={toggleSubMenu}>
            Stationery
          </NavLink>
          {isSubMenuVisible && (
            <ul className="submenu">
              <li>
                <NavLink to="/stationery/books">Books</NavLink>
              </li>
              <li>
                <NavLink to="/stationery/notebooks">NoteBooks</NavLink>
              </li>
              <li>
                <NavLink to="/stationery/notes">Notes</NavLink>
              </li>
              <li>
                <NavLink to="/stationery/school-supplies">School Supplies</NavLink>
              </li>
              <li>
                <NavLink to="/stationery/office-supplies">Office Supplies</NavLink>
              </li>
              <li>
                <NavLink to="/stationery/others">Others</NavLink>
              </li> 
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default NavigationMenu;
*/}