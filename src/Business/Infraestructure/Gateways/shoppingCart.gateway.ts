import { Axios } from "axios";
import { ShoppingCart } from "src/Business/Domain/Entities/Request/ShoppingCartRequest/shopingCart";
import { ShoppingCartResponse } from "src/Business/Domain/Entities/Response/ShoppingCartResponse/ShoppingCartResponse";
import { IShoppingCartGateway } from "src/Business/Domain/Interfaces/Gateway/iShoppingCart.gateway";


export class ShoppingCartGateway implements IShoppingCartGateway{
  constructor(private http: Axios) {}

  findMyCart(): ShoppingCartResponse {
    throw new Error("Method not implemented.");
  }

  save(cart: ShoppingCart): boolean {
    throw new Error("Method not implemented.");
  }

}
