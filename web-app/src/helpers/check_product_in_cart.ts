import { CartPoduct } from "../types/product";

export default function isItemInCart(item: CartPoduct, cart: CartPoduct[]) {
  let i;
  for (i = 0; i < cart.length; i++) {
    if (cart[i].product.id === item.product.id) {
      return true;
    }
  }
  return false;
}
