
import { PerformanceValue } from "../types/PerformanceValue";
import { DB } from "./dbconnection";
import { Service } from "typedi";

@Service()
export class PerformanceValueDA {
  constructor(private readonly db: DB) {}  

  public async getPerformanceValuesPaginated(factoryId: number, fromDate: Date, toDate: Date): Promise<PerformanceValue[]> {
    var obj = await this.db.client.performanceValue.findMany({
      where: {
        factoryId,
        time: {
          gte: fromDate,
          lte: toDate,
        },
      },
    });
    return obj;
  }
}
