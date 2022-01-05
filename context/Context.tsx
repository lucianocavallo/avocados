import { createContext, useReducer, useState } from "react";

const Context = createContext<any>({});

const cartReducer = (state, action) => {
  switch(action.type) {
    case '@cart/add':
      let newItem
      let cartCopy = [...state];
      if (cartCopy.some(element => action.payload.item.id === element.id)) {
        let newQuantity;
        const index = cartCopy.findIndex(el => el.id == action.payload.item.id);
        newQuantity = Number(cartCopy[index].quantity) + Number(action.payload.inputQuantity)
        newItem = {...action.payload.item, quantity: newQuantity};
        cartCopy = cartCopy.filter(el => el.id !== action.payload.item.id)
      } else {
        newItem = {...action.payload.item, quantity: action.payload.inputQuantity}
      }
    cartCopy.push(newItem);
      return [
        ...cartCopy
      ]
    case '@cart/remove':
      const id = action.payload.id;
      const index = state.findIndex(el => el.id ===id);
      const stateCopy = [...state];
      stateCopy.splice(index, 1);
      return [...stateCopy]
  }
}

const ContextProvider = ({children}) => {
  // const [cart, setCart] = useState<TProduct[]>([]);
  const [products, setProducts] = useState<TProduct[]>([]);
  const [cart, dispatchCart] = useReducer(cartReducer, []);

  return (
    <Context.Provider value={{
      cart,
      dispatchCart,
      // setCart,
      products,
      setProducts
    }}>
    {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider }