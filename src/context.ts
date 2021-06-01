import { startDatabase } from "./database";

export interface Context {
  db: any;
  getDb(): any;
}

export class context implements Context {
  constructor() {}
  db: any;
  async getDb() {
    this.db = await startDatabase();
  }
}
