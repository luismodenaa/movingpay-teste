import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import User from "App/Models/User";
import createUserSchema from "App/Validators/UserValidator";

export default class UsersController {
  public async store({ request, response }: HttpContextContract) {
    const validatedBody = await request.validate({
      schema: createUserSchema,
      messages: {
        required: "O campo {{ field }} é obrigatório",
        "email.unique": "Este e-mail já está sendo utilizado",
      },
    });

    const user = await User.create(validatedBody);

    return response.status(201), user;
  }

  public async index({ auth }: HttpContextContract) {
    await auth.use("api").authenticate();

    const userProfile = await User.findOrFail(auth.user?.id);
    await userProfile.load("finances");

    return userProfile;
  }
}
