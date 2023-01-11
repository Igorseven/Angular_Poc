import {IPlantGateway} from '../../../Domain/Interfaces/Gateway/iPlant.gateway'
import {PlantPaginationResponse} from '../../../Domain/Entities/Response/PlantResponse/plantPaginationResponse'
import {PageParams} from '../../../Domain/Entities/Request/PageParamsRequest/pageParams'


export class PlantFindPlantsUseCase{
    constructor(private plantGateway: IPlantGateway){}

    async executeFindPlantsAsync(pageParams: PageParams): Promise<PlantPaginationResponse | null>{
      return await this.plantGateway.findPlants(pageParams);
    }
}
