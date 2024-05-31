import { createContext, useContext } from "react";
import Uselocalstorage from "../hooks/Uselocalstorage";
interface ishoppingcartprovider {
  children: React.ReactNode;
}

interface cartitem {
  id: number;
  qty: number;
}
interface ishoppingcartcontext {
  cartitems: cartitem[];
  handleIncreaseProductqty: (id: number) => void;
  handleDecreaseproductqty: (id: number) => void;
  getproductqty: (id: number) => number;
  handleromoveproduct: (id: number) => void;
  cartqty: number;
}
export const useShoppingcartcontext = () => {
  return useContext(Shoppingcartcontext);
};

export const Shoppingcartcontext = createContext({} as ishoppingcartcontext);
export function ShoppingCartProvider({ children }: ishoppingcartprovider) {
  const [cartitems, setCartitems] = Uselocalstorage<cartitem[]>(
    "cartitems",
    []
  );

  const handleIncreaseProductqty = (id: number) => {
    setCartitems((currentItem) => {
      let selecteditem = currentItem.find((item) => item.id == id);
      if (selecteditem == null) {
        return [...currentItem, { id: id, qty: 1 }];
      } else {
        return currentItem.map((item) => {
          if (item.id == id) {
            return { ...item, qty: item.qty + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const handleDecreaseproductqty = (id: number) => {
    setCartitems((currentItem) => {
      let selecteditem = currentItem.find((item) => item.id == id);
      if (selecteditem?.qty === 1) {
        return currentItem.filter((Item) => Item.id !== id);
      } else {
        return currentItem.map((item) => {
          if (item.id == id) {
            return { ...item, qty: item.qty - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const getproductqty = (id: number) => {
    return cartitems.find((item) => (item.id = id))?.qty || 0;
  };
  const handleromoveproduct = (id: number) => {
    setCartitems((currentitems) =>
      currentitems.filter((item) => item.id != id)
    );
  };
  const cartqty = cartitems.reduce((totalqty, item) => totalqty + item.qty, 0);

  return (
    <Shoppingcartcontext.Provider
      value={{
        cartitems,
        handleIncreaseProductqty,
        handleDecreaseproductqty,
        getproductqty,
        handleromoveproduct,
        cartqty,
      }}
    >
      {children}
    </Shoppingcartcontext.Provider>
  );
}
