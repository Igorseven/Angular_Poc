import { PlantPaginationResponse } from '../../Entities/Response/PlantResponse/plantPaginationResponse';
import { PlantResponse } from '../../Entities/Response/PlantResponse/plantResponse';
import { PlantPostRequest } from '../../Entities/Request/PlantRequest/plantPostRequest';
import { PlantPutRequest } from '../../Entities/Request/PlantRequest/plantPutRequest';
import { PageParams } from '../../Entities/Request/PageParamsRequest/pageParams';

export interface IPlantGateway {
  findPlants(pageParams: PageParams): Promise<PlantPaginationResponse>;
  findById(plantId: number): Promise<PlantResponse>;
  postPlantAsync(planPost: PlantPostRequest): Promise<boolean>;
  putPlantAsync(putPlant: PlantPutRequest): Promise<boolean>;
  deletePlantAsync(plantId: number): Promise<boolean>;
}
