
export type PlantImagePostProps = {
  MainImage: boolean;
  FileName: string
  FileExtension: string;
  FileBytes: BinaryType;
}

export class PlantImagePost {
  constructor(public props: PlantImagePostProps) {}

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

  get plantImagePost(){
    return this.props;
  }

  toJson(){
    return {
      mainImage: this.mainImage,
      fileName: this.fileName,
      fileExtension: this.fileExtension,
      fileBytes: this.fileBytes
    }
  }
}
