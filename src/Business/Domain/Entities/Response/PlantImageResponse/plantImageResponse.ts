
export type PlantImageResponseProps = {
  PlantImageId: number;
  MainImage: boolean;
  FileName: string
  FileExtension: string;
  FileBytes: BinaryType;
}

export class PlantImageResponse {
  constructor(public props: PlantImageResponseProps) {}

  get plantImageId(){
    return this.props.PlantImageId;
  }

  get mainImage(){
    return this.props.MainImage;
  }

  get fileName(){
    return this.props.FileName;
  }

  get fileExtension(){
    return this.props.FileExtension;
  }

  get fileBytes(){
    return this.props.FileBytes;
  }
}
