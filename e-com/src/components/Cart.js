import React from 'react';

function Cart({ cart, totalAmount, onRemoveFromCart }) {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}{' '}
            <button onClick={() => onRemoveFromCart(item)}>Remove</button>
          </li>
        ))}
      </ul>
      <div className="total">Total Amount: ${totalAmount}</div> {/* Display totalAmount */}
    </div>
  );
}

export default Cart;
