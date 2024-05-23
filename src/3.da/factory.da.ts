
import { Factory } from "../types/Factory";
import { DB } from "./dbconnection";
import { Service } from "typedi";

@Service()
export class FactoryDA {
  constructor(private readonly db: DB) {}  

  public async getFactoryData(id: number): Promise<Factory> {
    var obj = await this.db.client.factory.findUnique({
      where: {
        id,
      },
    });
    return obj;
  }

  public async getFactoryPaginated(limit: number, offset: number): Promise<Factory[]> {
    return await this.db.client.factory.findMany({
      skip: offset,
      take: limit,
    });
  }
}
