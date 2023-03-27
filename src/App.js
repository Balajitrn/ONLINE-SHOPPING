// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import CategoryList from './components/CategoryList';
import Cart from './components/cart/Cart';
import Header from './components/Header';
import ConsolidatedSales from './components/reports/ConsolidatedSales';
import './App.css';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <CartProvider>
      <div className="App">
        <Router>
          <Header setSearchTerm={setSearchTerm} />
          <div className="content">
            <Routes>
              <Route
                path="/stationery/:category"
                element={<CategoryList searchTerm={searchTerm} />}
              />
              {/* New Electronics route */}
              <Route
                path="/electronics/:category"
                element={<CategoryList searchTerm={searchTerm} />}
              />
              <Route path="/cart" element={<Cart />} />
              <Route path="/reports/consolidated-sales" element={<ConsolidatedSales />} /> 
              <Route path="*" element={<h2>Page under construction</h2>} />
            </Routes>
          </div>
        </Router>
      </div>
    </CartProvider>
  );
};

export default App;
