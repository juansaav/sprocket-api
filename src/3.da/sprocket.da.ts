
import { Sprocket } from "../types/Sprocket";
import { DB } from "./dbconnection";
import { Service } from "typedi";

@Service()
export class SprocketDA {
  constructor(private readonly db: DB) {}  

  public async getSprocketById(id: number): Promise<Sprocket | null> {
    return await this.db.client.sprocket.findUnique({
      where: {
        id,
      },
    });
  }

  public async createSprocket(newItem: Omit<Sprocket, 'id'>): Promise<Sprocket> {
    return await this.db.client.sprocket.create({
      data: newItem,
    });
  }

  public async updateSprocket(id: number, data: Omit<Sprocket, 'id'>): Promise<Sprocket> {
    return await this.db.client.sprocket.update({
      where: { id },
      data,
    });
  }
}
