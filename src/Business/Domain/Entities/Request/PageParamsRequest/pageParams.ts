
export type PageParamsProps = {
  pageSize: number;
  pageNumber: number;
}

export class PageParams{
  constructor(public props: PageParamsProps) {}

  get pageSize(){
    return this.props.pageSize;
  }

  get pageNumber(){
    return this.props.pageNumber;
  }
}
