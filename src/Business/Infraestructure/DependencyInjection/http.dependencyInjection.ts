import { Container } from "inversify";
import { http } from "../ContextHttp/http.context";


export const Registry = {
  AxiosAdapter: Symbol.for("AxiosAdapter")
}

export const container = new Container();

container.bind(Registry.AxiosAdapter).toConstantValue(http);
