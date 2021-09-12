import StockEntry from "../../../domain/entity/StockEntry";
import StockEntryRepository from "../../../domain/repository/StockEntryRepository";
import Database from "../../database/Database";

export default class StockEntryRepositoryDatabase implements StockEntryRepository {
  database: Database;

  constructor(database: Database) {
    this.database = database;
  }

  async getByIdItem(idItem: string): Promise<StockEntry[]> {
    const stockEntriesData = await this.database.many("select * from ccca.stock_entry where id_item = $1", [idItem]);
    const stockEntries: StockEntry[] = [];
    for (const stockEntryData of stockEntriesData) {
      stockEntries.push(new StockEntry(
        stockEntryData.id_item,
        stockEntryData.operation,
        parseFloat(stockEntryData.quantity),
        new Date() // TODO
      ));
    }
    return stockEntries;
  }

}