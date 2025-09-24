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
          <img src="/Frame.png" alt="" />
          <input type="text" placeholder="Search for products..." />
        </div>
      </div>
      <div className="usercart-icon">
        <img src="/Vector.png" alt="" />
        <img src="/user-icon.png" alt="" />
      </div>
    </div>
  );
};

export default Navbar;
