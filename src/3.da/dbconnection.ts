import { PrismaClient } from "@prisma/client";
import { Service } from "typedi";

@Service()
export class DB {
  public client: PrismaClient;
  constructor() {
    this.client = new PrismaClient();
  }
}
