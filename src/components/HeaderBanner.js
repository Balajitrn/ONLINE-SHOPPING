import React, { useState, useEffect } from 'react';
import SearchProducts from './SearchProducts';
import './HeaderBanner.css';

const HeaderBanner = () => {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`header-banner${isSticky ? ' sticky' : ''}`}>
      <SearchProducts />
    </div>
  );
};

export default HeaderBanner;
