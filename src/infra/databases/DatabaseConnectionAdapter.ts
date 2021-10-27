import DatabaseConnection from "./DatabaseConnection";
import pgp from 'pg-promise'

export default class DatabaseConnectionAdapter implements DatabaseConnection {
  private pgp;

  constructor() {
    this.pgp = pgp()("postgres://postgres:postgres@localhost:2345/blackmarket");
  }

  async query(statement: string, parameters: any): Promise<any> {
    const response = await this.pgp.query(statement, parameters);
    return response;
  }

}