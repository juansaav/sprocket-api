import * as _ from "lodash";

import { Service } from "typedi";
import { FactoryDA } from "../3.da/factory.da";
import { Factory } from "../types/Factory";


@Service()
export class FactoryService {
  constructor(private readonly factoryda: FactoryDA) {}

  public async getFactoryData(id: number, fromDate?: Date, toDate?: Date): Promise<Factory> {
    return await this.factoryda.getFactoryData(id, fromDate, toDate);
  }

  public async getFactoryPaginated(limit: number, offset: number): Promise<Factory[]> {
    return await this.factoryda.getFactoryPaginated(limit, offset);
  }
}
