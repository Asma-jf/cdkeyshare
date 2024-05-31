import { useEffect, useState } from "react";

export function Uselocalstorage<T>(key: string, initialvalue: T) {
  const [value, setValue] = useState<T>(() => {
    let localcart = localStorage.getItem("cartitems");
    if (localcart != null) return JSON.parse(localcart);
    else {
      return initialvalue;
    }
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue] as [typeof value, typeof setValue];
}

export default Uselocalstorage;
