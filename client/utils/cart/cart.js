import toast from "react-hot-toast";
import { getItem, setItem } from "../localstorage/storage";

export const addToCart = (product, quantity = 1) => {
  const existingCart = getItem("cart") || [];

  const existingCartIndex = existingCart.findIndex(
    (item) => item.id === product.id,
  );

  if (existingCartIndex > -1) {
    existingCart[existingCartIndex].quantity += quantity;
  } else {
    existingCart.push({
      ...product,
      quantity,
    });
  }


  setItem("cart", existingCart);
  toast.success("Item added to cart")
};
