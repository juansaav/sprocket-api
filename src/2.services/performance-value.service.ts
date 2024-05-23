import * as _ from "lodash";

import { Service } from "typedi";
import { PerformanceValueDA } from "../3.da/performance-value.da";
import { PerformanceValue } from "../types/PerformanceValue";

@Service()
export class PerformanceValueService {
  constructor(private readonly performanceValuesDA: PerformanceValueDA) {}

  public async getPerformanceValuesPaginated(factoryId: number, fromDate: Date, toDate: Date): Promise<PerformanceValue[]> {
    return await this.performanceValuesDA.getPerformanceValuesPaginated(factoryId, fromDate, toDate);
  }
}
