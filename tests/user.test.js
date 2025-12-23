const request = require("supertest");
const app = require("../src/app");

describe("User API basic tests", () => {
  test("POST /users creates user", async () => {
    const res = await request(app)
      .post("/users")
      .send({ name: "Test", age: 25 });

    expect(res.statusCode).toBe(201);
  });

  test("GET /users/:id returns 404 for invalid user", async () => {
    const res = await request(app).get("/users/999");
    expect(res.statusCode).toBe(404);
  });

  test("POST /users fails for invalid input", async () => {
    const res = await request(app).post("/users").send({});
    expect(res.statusCode).toBe(400);
  });
});
