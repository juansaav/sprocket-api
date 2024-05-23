import * as _ from "lodash";

import { Service } from "typedi";
import { FactoryDA } from "../3.da/factory.da";
import { Factory } from "../types/Factory";
import { PerformanceValue } from "../types/PerformanceValue";
import { PerformanceValueDA } from "../3.da/performance-value.da";


@Service()
export class FactoryService {
  constructor(private readonly factoryda: FactoryDA, private readonly performanceVlaueDA: PerformanceValueDA) {}

  public async getFactoryData(id: number): Promise<Factory> {
    return await this.factoryda.getFactoryData(id);
  }

  public async getFactoryPaginated(limit: number, offset: number): Promise<Factory[]> {
    return await this.factoryda.getFactoryPaginated(limit, offset);
  }

  public async getFactoryPerformanceValues(id: number, fromData: Date, toDate: Date): Promise<PerformanceValue[]> {
    const factory = await this.factoryda.getFactoryData(id);
    if (!factory) {
      return null;
    }
    return await this.performanceVlaueDA.getPerformanceValuesPaginated(id, fromData, toDate);
  }
}
