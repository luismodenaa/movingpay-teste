import { rules, schema } from "@ioc:Adonis/Core/Validator";

const createUserSchema = schema.create({
  name: schema.string({}, [rules.maxLength(150)]),
  email: schema.string({}, [
    rules.maxLength(250),
    rules.email(),
    rules.unique({ table: "users", column: "email" }),
  ]),
  password: schema.string({}, [rules.maxLength(30)]),
});

export default createUserSchema;
