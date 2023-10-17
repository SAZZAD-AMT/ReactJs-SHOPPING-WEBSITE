import React, { useState } from 'react';
import './App.css';
import Product from './components/Product';
import Cart from './components/Cart';

function App() {
  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0); // Initialize totalAmount to 0
  const products = [
    { id: 1, name: 'Product 1', description: 'Description 1', price: 10 },
    { id: 2, name: 'Product 2', description: 'Description 2', price: 15 },
    { id: 3, name: 'Product 3', description: 'Description 3', price: 20 },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
    setTotalAmount(totalAmount + product.price); // Update totalAmount when adding a product
  };

  const removeFromCart = (productToRemove) => {
    const updatedCart = cart.filter((product) => product.id !== productToRemove.id);
    setCart(updatedCart);
    setTotalAmount(totalAmount - productToRemove.price); // Update totalAmount when removing a product
  };

  return (
    <div className="App">
      <header>
        <h1>Shopping Website</h1>
      </header>
      <div className="content">
        <div className="products">
          {products.map((product) => (
            <Product key={product.id} product={product} onAddToCart={addToCart} />
          ))}
        </div>
        <Cart cart={cart} totalAmount={totalAmount} onRemoveFromCart={removeFromCart} />
      </div>
    </div>
  );
}

export default App;
