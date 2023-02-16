import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Finance from "App/Models/Finance";
import createFinanceSchema from "App/Validators/FinanceValidator";

export default class FinancesController {
  public async store({ auth, request, response }: HttpContextContract) {
    const user = await auth.use("api").authenticate();

    const validatedBody = await request.validate({
      schema: createFinanceSchema,
      messages: {
        required: "O campo {{ field }} é obrigatório",
      },
    });

    validatedBody.userId = user.id;

    const finance = await Finance.create(validatedBody);

    return response.status(201), finance;
  }
}
