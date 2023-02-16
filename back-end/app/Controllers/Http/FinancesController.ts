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

  public async destroy({ auth, params, response }: HttpContextContract) {
    const user = await auth.use("api").authenticate();
    const finance = await Finance.findOrFail(params.id);

    if (user.id !== finance.userId) {
      return response.status(404), "Finance not found";
    }

    await finance.delete();

    return response.status(204), {};
  }

  public async update({
    auth,
    params,
    request,
    response,
  }: HttpContextContract) {
    const user = await auth.use("api").authenticate();
    const finance = await Finance.findOrFail(params.id);
    const body = request.body();

    if (user.id !== finance.userId) {
      return response.status(404), "Finance not found";
    }

    finance.description = body.description;
    finance.value = body.value;
    finance.isReceipt = body.isReceipt;

    await finance.save();

    return response.status(200), finance;
  }
}
