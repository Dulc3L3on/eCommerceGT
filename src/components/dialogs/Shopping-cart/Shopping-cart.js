import React from 'react';

const Cart = ({ cartItems, removeFromCart, clearCart }) => {
  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((product) => (
              <li key={product.id}>
                {product.name} - {product.price}
                <button onClick={() => removeFromCart(product)}>Eliminar</button>
              </li>
            ))}
          </ul>
          <p>Total: {/* Calcular el total de la compra */}</p>
          <button onClick={() => clearCart()}>Vaciar carrito</button>
        </div>
      )}
    </div>
  );
};

export default Cart;