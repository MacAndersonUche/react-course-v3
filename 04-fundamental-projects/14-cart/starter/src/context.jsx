import { createContext, useReducer, useState, useContext } from "react";
import cartItems from "./data";
import { reducer } from "./reducer";
import {
  CLEAR_CART,
  DECREASE_QTY,
  INCREASE_QTY,
  REMOVE_CART_ITEM,
} from "./actions";

const AppContext = createContext();
const cartMap = new Map();
cartItems.forEach((item) => cartMap.set(item.id, item));
const initialState = {
  cart: cartMap,
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };
  const removeCartItem = (id) => {
    dispatch({ type: REMOVE_CART_ITEM, payload: id });
  };
  const increaseQty = (id) => {
    dispatch({ type: INCREASE_QTY, payload: id });
  };
  const decreaseQty = (id) => {
    dispatch({ type: DECREASE_QTY, payload: id });
  };

  return (
    <AppContext.Provider
      value={{
        state,
        clearCart,
        increaseQty,
        decreaseQty,
        removeCartItem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
