import PgPromiseDatabase from "../../src/infra/database/PgPromiseDatabase";

describe.skip("PgPromiseDatabase", () => {
  test("should connect to the database and list the items", async () => {
    const pgPromiseDatabase = PgPromiseDatabase.getInstance();
    const items = await pgPromiseDatabase.many("select * from ccca.item", []);
    expect(items).toHaveLength(3);
  });

  test("should connect to the database and list one item", async () => {
    const pgPromiseDatabase = PgPromiseDatabase.getInstance();
    const item = await pgPromiseDatabase.many("select * from ccca.item where id = $1", [1]);
    expect(item.description).toBe("Guitarra");
  });
});