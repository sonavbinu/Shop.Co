import React from 'react';
import './Navbar.scss';

const Navbar: React.FC = () => {
  return (
    <div className="navbar-main">
      <img src="/SHOP.CO.png" alt="" />
      <div className="primary-menu">
        <span className="shop-dropmenu">
          Shop{' '}
          <span>
            <img src="/drop.png" alt="" />
          </span>{' '}
        </span>
        <span>On Sale</span>
        <span>New Arrivals</span>
        <span>Brands</span>
      </div>
      <div className="input-menu">
        <div className="input-wrapper">
          {' '}
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="Search for products..." />
        </div>
      </div>
      <div className="usercart-icon">
        <i className="fa-solid fa-cart-shopping"></i>
        <i className="fa-solid fa-user"></i>
      </div>
    </div>
  );
};

export default Navbar;
