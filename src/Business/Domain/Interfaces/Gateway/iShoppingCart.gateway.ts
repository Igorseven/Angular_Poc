import { ShoppingCart } from "../../Entities/Request/ShoppingCartRequest/shopingCart";
import { ShoppingCartResponse } from "../../Entities/Response/ShoppingCartResponse/ShoppingCartResponse";


export interface IShoppingCartGateway{
  findMyCart(): ShoppingCartResponse;
  save(cart: ShoppingCart): boolean;
}
