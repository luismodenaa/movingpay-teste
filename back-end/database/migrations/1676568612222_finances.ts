import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "finances";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id", { primaryKey: true });
      table.string("description");
      table.decimal("value", 10, 2);
      table.boolean("isReceipt");
      table.integer("userId").unsigned().references("users.id");

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp("created_at", { useTz: true });
      table.timestamp("updated_at", { useTz: true });
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
