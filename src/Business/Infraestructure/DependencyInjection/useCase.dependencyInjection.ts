import { Container } from "inversify";
import { PlantFindPlantsUseCase } from "src/Business/Application/UseCases/PlantUseCase/plantFindPlantsUseCase";
import { RegistryGateways } from "./gateway.dependencyInjection";


export const RegistryUseCases = {
  PlantFindPlantsUseCase: Symbol.for("PlantFindPlantsUseCase")
}

export const container = new Container();


container.bind(RegistryUseCases.PlantFindPlantsUseCase).toDynamicValue((context) => {
  return new PlantFindPlantsUseCase(context.container.get(RegistryGateways.PlantGateway))
});
