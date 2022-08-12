import React from 'react';
import ShoppingCartItem from '../components/ShoppingCartItem';
import '../styles/MyOrder.scss';

const MyOrder = () => {
  return (
    <div className="MyOrder">
    <div className="MyOrder-container">
      <h1 className="title">My order</h1>

      <div className="MyOrder-content">
        <div className="order">
          <p>
            <span>03.25.21</span>
            <span>6 articles</span>
          </p>
          <p>$560.00</p>
        </div>

        <ShoppingCartItem />

      </div>
    </div>
  </div>
  )
}

export default MyOrder;