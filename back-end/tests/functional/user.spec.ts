import Database from "@ioc:Adonis/Lucid/Database";
import { test } from "@japa/runner";

const baseURL = "/api/users";

test.group("Tests in route /users", (group) => {
  group.each.setup(async () => {
    await Database.beginGlobalTransaction();
    return () => Database.rollbackGlobalTransaction();
  });

  test("it should be possible to create a user", async ({ client }) => {
    const response = await client.post(baseURL).json({
      name: "Nome Teste",
      email: "teste@mail.com",
      password: "123456",
    });

    response.assertStatus(201);
  });

  test("it should be possible to create a user with the wrong body", async ({
    client,
  }) => {
    const response = await client.post(baseURL).json({
      name: "Nome Teste",
      email: "teste2@mail.com",
      password: "123456",
      salve: "mamão",
    });

    response.assertStatus(201);
  });

  test("it should not be possible to create user with incorrect email", async ({
    client,
  }) => {
    const response = await client.post(baseURL).json({
      name: "Nome Teste",
      email: "teste3",
      password: "123456",
    });

    response.assertStatus(422);
    response.assertBodyContains({
      errors: [
        {
          rule: "email",
          field: "email",
          message: "email validation failed",
        },
      ],
    });
  });

  test("it should not be possible to create user with invalid body", async ({
    client,
  }) => {
    const response = await client.post(baseURL).json({});

    response.assertStatus(422);
    response.assertBodyContains({
      errors: [
        {
          rule: "required",
          field: "name",
          message: "O campo name é obrigatório",
        },
        {
          rule: "required",
          field: "email",
          message: "O campo email é obrigatório",
        },
        {
          rule: "required",
          field: "password",
          message: "O campo password é obrigatório",
        },
      ],
    });
  });

  test("it should be possible to list the profile of the logged in user", async ({
    client,
  }) => {
    const createUser = await client.post(baseURL).json({
      name: "Nome Teste",
      email: "teste@mail.com",
      password: "123456",
    });
    const loginUser = await client
      .post("/api/login")
      .json({ email: "teste@mail.com", password: "123456" });
    const token = loginUser.body().token;

    const response = await client
      .get(baseURL)
      .header("Authorization", `Bearer ${token}`);

    response.assertStatus(200);
  });
});
