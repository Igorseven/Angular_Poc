import {PlantImagePost} from '../PlantImageRequest/plantImagePostRequest';
import {EPlantType} from '../../../Enums/ePlantType';

export type PlantPostProps = {
  name: string;
  specie: string
  description: string;
  amount: number;
  price: number;
  plantType: EPlantType;
  MainImage:  PlantImagePost;
}

export class PlantPostRequest{
  constructor(public props: PlantPostProps) {}

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

  toJson(){
    return {
      name: this.name,
      specie: this.specie,
      description: this.description,
      amount: this.amount,
      price: this.price,
      plantType: this.plantType,
      MainImage: this.mainImage
    }
  }
}
