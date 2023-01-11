import {PlantImageResponse} from '../PlantImageResponse/plantImageResponse';
import List from '../../../../../Tools/Iterators/List'

export type PlantPaginationProps = {
  Result: List<PlantImageResponse>;
  CurrentPage: number;
  TotalPages: number;
  PageSize: number;
  TotalCount: number;
}

export class PlantPaginationResponse {
  constructor(public props: PlantPaginationProps) {}

  get result(){
    return this.props.Result;
  }

  get currentPage(){
    return this.props.CurrentPage;
  }

  get totalPages(){
    return this.props.TotalPages;
  }

  get pageSize(){
    return this.props.PageSize;
  }

  get totalCount(){
    return this.props.TotalCount;
  }
}
