import { Container } from "inversify";
import { PlantGateway } from "../Gateways/plant.gateway";
import { Registry } from "./http.dependencyInjection";


export const RegistryGateways = {
  PlantGateway: Symbol.for("PlantGateway")
}

export const container = new Container();

container.bind(RegistryGateways.PlantGateway).toDynamicValue((context) => {
  return new PlantGateway(context.container.get(Registry.AxiosAdapter))
});
