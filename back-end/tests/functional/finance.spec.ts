import Database from "@ioc:Adonis/Lucid/Database";
import { test } from "@japa/runner";

const baseURL = "/api/finances";

test.group("Tests in route /finance", (group) => {
  group.each.setup(async () => {
    await Database.beginGlobalTransaction();
    return () => Database.rollbackGlobalTransaction();
  });

  test("it must be possible to create a finance", async ({ client }) => {
    const createUser = await client.post("/api/users").json({
      name: "Nome Teste",
      email: "teste@mail.com",
      password: "123456",
    });
    const loginUser = await client
      .post("/api/login")
      .json({ email: "teste@mail.com", password: "123456" });
    const token = loginUser.body().token;

    const response = await client
      .post(baseURL)
      .json({
        description: "aaaaaoooba",
        value: 67.24,
        isReceipt: true,
      })
      .header("Authorization", `Bearer ${token}`);

    response.assertStatus(201);
  });

  test("it should not be possible to create a finance without token", async ({
    client,
  }) => {
    const response = await client.post(baseURL).json({
      description: "aaaaaoooba",
      value: 67.24,
      isReceipt: true,
    });

    response.assertStatus(401);
  });

  test("it should be possible to create a finance with one more item in the body", async ({
    client,
  }) => {
    const createUser = await client.post("/api/users").json({
      name: "Nome Teste",
      email: "teste@mail.com",
      password: "123456",
    });
    const loginUser = await client
      .post("/api/login")
      .json({ email: "teste@mail.com", password: "123456" });
    const token = loginUser.body().token;

    const response = await client
      .post(baseURL)
      .json({
        description: "aaaaaoooba",
        value: 67.24,
        isReceipt: true,
        aaooba: false,
      })
      .header("Authorization", `Bearer ${token}`);

    response.assertStatus(201);
  });

  test("it must not be possible to create a finance with the invalid body", async ({
    client,
  }) => {
    const createUser = await client.post("/api/users").json({
      name: "Nome Teste",
      email: "teste@mail.com",
      password: "123456",
    });
    const loginUser = await client
      .post("/api/login")
      .json({ email: "teste@mail.com", password: "123456" });
    const token = loginUser.body().token;

    const response = await client
      .post(baseURL)
      .json({})
      .header("Authorization", `Bearer ${token}`);

    response.assertStatus(422);
    response.assertBodyContains({
      errors: [
        {
          rule: "required",
          field: "description",
          message: "O campo description é obrigatório",
        },
        {
          rule: "required",
          field: "value",
          message: "O campo value é obrigatório",
        },
        {
          rule: "required",
          field: "isReceipt",
          message: "O campo isReceipt é obrigatório",
        },
      ],
    });
  });
});
