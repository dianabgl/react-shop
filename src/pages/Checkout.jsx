import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import '../styles/Checkout.scss';
import arrow from '@icons/flechita.svg';
import OrderItem from '@components/OrderItem';

const Checkout = () => {
  const { state } = useContext(AppContext);

  const sumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  }

  return (
  <aside className="Checkout">
    <div className="title-container">
      <img src={arrow} alt="arrow" />
      <p className="title">My order</p>
    </div>

    <div className="my-order-content">
      {state.cart.map(product => (
          <OrderItem product={product} key={`orderItem-${product.id}`} />
      ))}      
      <div className="order">
        <p>
          <span>Total</span>
        </p>
        <p>${sumTotal()}</p>
      </div>

      <button className="primary-button">
        Checkout
      </button>
    </div>
  
  </aside>
  )
}

export default Checkout;