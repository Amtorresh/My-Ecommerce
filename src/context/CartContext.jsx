import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addProductInCart = (product) => {
  
    setCart( [ ...cart, product ] );
  };

  const totalQuantity = () => {
    const total = cart.reduce((total, product) => total + product.quantity, 0);
    return total;
  };

  const totalPrice = () => {
    const total = cart.reduce((total, product)=> total + ( product.price * product.quantity ), 0);
    return total;
  }

  const deleteProductById = (id) => {
    const productsFilter = cart.filter((product)=> product.id !== id );
    setCart(productsFilter);
  }

  const deleteCart = () => {
    setCart([])
  }

  return(
    <CartContext.Provider value={ { cart, addProductInCart, totalQuantity, totalPrice, deleteProductById, deleteCart } }>
      {children}
    </CartContext.Provider>
  )
};

export { CartContext, CartProvider };