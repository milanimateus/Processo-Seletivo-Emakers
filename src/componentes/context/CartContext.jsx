import React, { createContext, useState, useContext } from "react";

// 1. Cria o Contexto
const CartContext = createContext();

// 2. Cria o Provedor do Contexto
// Este componente irá envolver sua aplicação e fornecer o estado do carrinho
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (item) => {
    // Lógica para não adicionar itens duplicados (opcional, mas recomendado)
    setCartItems((prevItems) => {
      const isItemInCart = prevItems.find(
        (cartItem) => cartItem.id === item.id
      );
      if (isItemInCart) {
        // Se já estiver no carrinho, você pode aumentar a quantidade, por exemplo.
        // Por enquanto, vamos apenas evitar duplicatas.
        alert(`${item.name} já foi adicionado ao carrinho!`);
        return prevItems;
      }
      // Adiciona o novo item ao array do carrinho
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  const removeItemFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addItemToCart, removeItemFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

// 3. Cria um Hook customizado para usar o contexto facilmente
export const useCart = () => {
  return useContext(CartContext);
};
