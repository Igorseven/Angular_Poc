import {EPlantType} from '../../../Enums/ePlantType';

export type PlantPutProps = {
  plantId: number;
  name: string;
  specie: string
  description: string;
  amount: number;
  price: number;
  plantType: EPlantType;
}

export class PlantPutRequest{
  constructor(public props: PlantPutProps) {}

  get plantId(){
    return this.props.plantId;
  }

  get name(){
    return this.props.name;
  }

  get specie(){
    return this.props.specie;
  }

  get description(){
    return this.props.description;
  }

  get amount(){
    return this.props.amount;
  }

  get price(){
    return this.props.price;
  }

  get plantType(){
    return this.props.plantType;
  }

  toJson(){
    return {
      plantId: this.plantId,
      name: this.name,
      specie: this.specie,
      description: this.description,
      amount: this.amount,
      price: this.price,
      plantType: this.plantType
    }
  }
}
