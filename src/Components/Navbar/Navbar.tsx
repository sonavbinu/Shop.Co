import React from 'react';
import './Navbar.scss';

const Navbar: React.FC = () => {
  return (
    <div className="navbar-main">
      <img src="/SHOP.CO.png" alt="" />
      <div>
        <span>
          Shop <span>v</span>{' '}
        </span>
        <span>On Sale</span>
        <span>New Arrivals</span>
        <span>Brands</span>
      </div>
      <div>
        <i className="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder="Search for products..." />
      </div>
      <div>
        <i className="fa-solid fa-cart-shopping"></i>
        <i className="fa-solid fa-user"></i>
      </div>
    </div>
  );
};

export default Navbar;
