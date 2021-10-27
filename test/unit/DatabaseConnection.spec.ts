import DatabaseConnectionAdapter from "../../src/infra/databases/DatabaseConnectionAdapter";

describe('Test database connection', () => {
  it('should be able to connect to the database', async () => {
    const databaseConnection = new DatabaseConnectionAdapter();
    const response = await databaseConnection.query("SELECT 1", []);
    expect(response).toHaveLength(1);
  });
});
