import List from "src/Tools/Iterators/List"
import { PlantResponse } from "../PlantResponse/plantResponse"


export type ShoppingCartResponseProps = {
  shoppingCartId: number;
  plants: List<PlantResponse>;
  totalPrice: number;
  amount: number;
}

export class ShoppingCartResponse{
  constructor(public props: ShoppingCartResponseProps) {}

  get totalPrice() {
    return this.props.plants.mapToArray().reduce((total, plant) => {
      if (plant.amount > 1){
        return total + plant.price * plant.amount;
      }
      else {
        return total + plant.price;
      }
    }, 0);
  }

  get amount() {
    return this.props.plants.size();
  }
}
