import Database from "@ioc:Adonis/Lucid/Database";
import { test } from "@japa/runner";

const baseURL = "/api/login";

test.group("Tests in route /login", (group) => {
  group.each.setup(async () => {
    await Database.beginGlobalTransaction();
    return () => Database.rollbackGlobalTransaction();
  });

  test("it should be possible to login with a user", async ({ client }) => {
    const createUser = await client.post("/api/users").json({
      name: "Nome Teste",
      email: "teste@mail.com",
      password: "123456",
    });
    const response = await client
      .post(baseURL)
      .json({ email: "teste@mail.com", password: "123456" });
    response.assertStatus(200);
  });

  test("it should not be possible to login with an incorrect user", async ({
    client,
  }) => {
    const response = await client
      .post(baseURL)
      .json({ email: "teste2333@mail.com", password: "123456" });
    response.assertStatus(401);
  });

  test("it should not be possible to login with the wrong body", async ({
    client,
  }) => {
    const response = await client.post(baseURL).json({});
    response.assertStatus(401);
  });
});
