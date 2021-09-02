import PgPromiseDatabase from "../../src/infra/database/PgPromiseDatabase";

let pgPromiseDatabase: PgPromiseDatabase;

describe.skip("PgPromiseDatabase", () => {
  beforeEach(() => {
    pgPromiseDatabase = PgPromiseDatabase.getInstance();
  });

  test("should connect to the database and list the items", async () => {
    const items = await pgPromiseDatabase.many("select * from ccca.item", []);
    expect(items).toHaveLength(3);
  });

  test("should connect to the database and list one item", async () => {
    const item = await pgPromiseDatabase.many("select * from ccca.item where id = $1", [1]);
    expect(item.description).toBe("Guitarra");
  });
});