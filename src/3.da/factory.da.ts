
import { Factory } from "../types/Factory";
import { DB } from "./dbconnection";
import { Service } from "typedi";

@Service()
export class FactoryDA {
  constructor(private readonly db: DB) {}  

  public async getFactoryData(id: number, fromDate: Date, toDate: Date): Promise<Factory> {
    var obj = await this.db.client.factory.findUnique({
      where: {
        id,
      },
      include: {
        performanceValues: {
          where: {
            time: {
              gte: fromDate,
              lte: toDate,
            },
          },
        },
      },
    });
    return obj;
  }

  public async getFactoryPaginated(limit: number, offset: number): Promise<Factory[]> {
    return await this.db.client.factory.findMany({
      skip: offset,
      take: limit,
      include: {
        performanceValues: true,
      },
    });
  }
}
