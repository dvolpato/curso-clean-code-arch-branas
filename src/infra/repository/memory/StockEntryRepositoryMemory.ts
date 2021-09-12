import StockEntry from "../../../domain/entity/StockEntry";
import StockEntryRepository from "../../../domain/repository/StockEntryRepository";

export default class StockEntryRepositoryMemory implements StockEntryRepository {
  stockEntries: StockEntry[];

  constructor() {
    this.stockEntries = [
      new StockEntry("1", "in", 10, new Date()),
      new StockEntry("2", "in", 10, new Date()),
      new StockEntry("3", "in", 10, new Date()),
    ];
  }

  getByIdItem(idItem: string): Promise<StockEntry[]> {
    const stockEntry = this.stockEntries.filter(stockEntry => stockEntry.idItem === idItem);
    return Promise.resolve(stockEntry);
  }

}