import {EPlantType} from '../../../Enums/ePlantType';
import {PlantImageResponse} from '../PlantImageResponse/plantImageResponse';

export type PlantResponseProps = {
  plantId: number;
  name: string;
  specie: string
  description: string;
  amount: number;
  price: number;
  plantType: EPlantType;
  MainImage: PlantImageResponse;
}

export class PlantResponse{
  constructor(public props: PlantResponseProps) {}

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

  get mainImage(){
    return this.props.MainImage;
  }
}
