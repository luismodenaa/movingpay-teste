import { DateTime } from "luxon";
import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class Finance extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public description: string;

  @column()
  public value: number;

  @column()
  public isReceipt: boolean;

  @column()
  public userId: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
