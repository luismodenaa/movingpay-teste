import { rules, schema } from "@ioc:Adonis/Core/Validator";

const createFinanceSchema = schema.create({
  description: schema.string({}, [rules.maxLength(200)]),
  value: schema.number(),
  isReceipt: schema.boolean(),
});

export default createFinanceSchema;
