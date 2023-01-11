import List from 'src/Tools/Iterators/List';
import { PlantPutRequest } from '../PlantRequest/plantPutRequest';

export type ShoppingCartProps = {
  shoppingCartId: number;
  plants: List<PlantPutRequest>;
  totalPrice: number;
  amount: number;
};

export class ShoppingCart {
  constructor(public props: ShoppingCartProps) {}

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

  addPlant(plant: PlantPutRequest) {
    this.props.plants.add(plant);
  }

  removePlant(plant: PlantPutRequest) {
    this.props.plants.delete(plant);
  }

  cleanPlants() {
    this.props.plants.clean();
  }
}
