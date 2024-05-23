import * as _ from "lodash";

import { Service } from "typedi";
import { SprocketDA } from "../3.da/sprocket.da";
import { Sprocket } from "../types/Sprocket";


@Service()
export class SprocketService {
  constructor(private readonly sprocketDA: SprocketDA) {}

  public async getSprocketById(id: number): Promise<Sprocket | null> {
    return await this.sprocketDA.getSprocketById(id);
  }

  public async createSprocket(data: Omit<Sprocket, 'id'>): Promise<Sprocket> {
    return await this.sprocketDA.createSprocket(data);
  }

  public async updateSprocket(id: number, data: Omit<Sprocket, 'id'>): Promise<Sprocket> {
    return await this.sprocketDA.updateSprocket(id, data);
  }
}
