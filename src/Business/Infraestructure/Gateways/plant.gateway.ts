import { Axios } from 'axios';
import { PageParams } from 'src/Business/Domain/Entities/Request/PageParamsRequest/pageParams';
import { PlantPostRequest } from 'src/Business/Domain/Entities/Request/PlantRequest/plantPostRequest';
import { PlantPutRequest } from 'src/Business/Domain/Entities/Request/PlantRequest/plantPutRequest';
import { PlantImageResponse } from 'src/Business/Domain/Entities/Response/PlantImageResponse/plantImageResponse';
import { PlantPaginationResponse } from 'src/Business/Domain/Entities/Response/PlantResponse/plantPaginationResponse';
import { PlantResponse } from 'src/Business/Domain/Entities/Response/PlantResponse/plantResponse';
import { IPlantGateway } from 'src/Business/Domain/Interfaces/Gateway/iPlant.gateway';
import { fromFormConversion } from 'src/Tools/Extensions/fromFormExtension';

export class PlantGateway implements IPlantGateway {
  constructor(private http: Axios) {}

  private readonly controllerName = 'api/plantController/';

  async findPlants(pageParams: PageParams): Promise<PlantPaginationResponse> {
    const response = await this.http.get<PlantPaginationResponse>(
      `${this.controllerName}find_plants_with_pagination/pageNumber=${pageParams.pageNumber}/pageSize=${pageParams.pageSize}`
    );
    return new PlantPaginationResponse({
      CurrentPage: response.data.currentPage,
      PageSize: response.data.pageSize,
      TotalCount: response.data.totalCount,
      TotalPages: response.data.totalPages,
      Result: response.data.result,
    });
  }

  async findById(plantId: number): Promise<PlantResponse> {
    const response = await this.http.get<PlantResponse>(
      `${this.controllerName}find_by_plant/plantId=${plantId}`
    );
    return new PlantResponse({
      plantId: response.data.plantId,
      name: response.data.name,
      description: response.data.description,
      amount: response.data.amount,
      plantType: response.data.plantType,
      specie: response.data.specie,
      price: response.data.price,
      MainImage: new PlantImageResponse({
        PlantImageId: response.data.mainImage.plantImageId,
        FileBytes: response.data.mainImage.fileBytes,
        FileExtension: response.data.mainImage.fileExtension,
        FileName: response.data.mainImage.fileName,
        MainImage: response.data.mainImage.mainImage,
      }),
    });
  }

  async postPlantAsync(planPost: PlantPostRequest): Promise<boolean> {
    let fromFormData = fromFormConversion(planPost)

    return await this.http.post<boolean, boolean>(`${this.controllerName}plant_save`, fromFormData);
  }

  async putPlantAsync(putPlant: PlantPutRequest): Promise<boolean> {
    return await this.http.put<boolean, boolean>(`${this.controllerName}plant_update`, putPlant);
  }

  async deletePlantAsync(plantId: number): Promise<boolean> {
    return await this.http.delete<boolean, boolean>(`${this.controllerName}plant_delete/plantId=${plantId}`);
  }
}
