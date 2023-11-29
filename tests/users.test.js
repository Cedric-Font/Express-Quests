const request = require("supertest");
const database = require("../database")
const crypto = require("node:crypto");
const app = require("../src/app");

describe("GET /api/users", () => {
  it("should return all users", async () => {
    const response = await request(app).get("/api/users");

    expect(response.headers["content-type"]).toMatch(/json/);

    expect(response.status).toEqual(200);
  });
});

describe("GET /api/users/:id", () => {
  it("should return one user", async () => {
    const response = await request(app).get("/api/users/1");

    expect(response.headers["content-type"]).toMatch(/json/);

    expect(response.status).toEqual(200);
  });

  it("should return no user", async () => {
    const response = await request(app).get("/api/users/0");

    expect(response.status).toEqual(404);
  });
});

describe("POST /api/users", () => {
  it("should return created user", async () => {
    const newUser = {
      firstname: "Marie",
      lastname: "Martin",
      email: `${crypto.randomUUID()}@wild.co`,
      city: "Paris",
      language: "French",
    };
  });

});

describe("POST /api/users", () => {
  it("should be return an error", async () =>{
    const newUsersWithoutProps = {firstname: "cedric"}
const response = await request(app).post("/api/users").send(newUsersWithoutProps);
 expect(response.status).toEqual(422);

})
});

describe("PUT /api/users/:id", () => {
  it("should edit users", async () => {
    const newUsers = {
      firstname: "Marie",
      lastname: "Martin",
      email: `${crypto.randomUUID()}@wild.co`,
      city: "Paris",
      language: "French",
    };

    const [newResult] = await database.query(
      "INSERT INTO users(firstname, lastname, email, city, language) VALUES (?, ?, ?, ?, ?)",
      [newUsers.firstname, newUsers.lastname, newUsers.email, newUsers.city, newUsers.language]
    );

    const id = newResult.insertId;

    const updateUser = {
      firstname: "cedric",
      lastname: "font",
      email: `${crypto.randomUUID()}@wild.co`,
      city: "Lyon",
      language: "French",
    };

    const response = await request(app)
      .put(`/api/users/${id}`)
      .send(updateUser);

    expect(response.status).toEqual(204);

    const [result] = await database.query("SELECT * FROM users WHERE id=?", id);

    const [UsersInDataBase] = result;

    expect(UsersInDataBase).toHaveProperty("id");

    expect(UsersInDataBase).toHaveProperty("firstname");
    expect(UsersInDataBase.title).toStrictEqual(updateUser.title);

    expect(UsersInDataBase).toHaveProperty("lastname");
    expect(UsersInDataBase.director).toStrictEqual(updateUser.director);

    expect(UsersInDataBase).toHaveProperty("email");
    expect(UsersInDataBase.year).toStrictEqual(updateUser.year);

    expect(UsersInDataBase).toHaveProperty("city");
    expect(UsersInDataBase.color).toStrictEqual(updateUser.color);

    expect(UsersInDataBase).toHaveProperty("language");
    expect(UsersInDataBase.duration).toStrictEqual(updateUser.duration);
  });

  it("should return an error", async () => {
    const userWithMissingProps = { name: "Harry Potter" };

    const response = await request(app)
      .put(`/api/users/1`)
      .send(userWithMissingProps);

    expect(response.status).toEqual(422);
  });

  it("should return no users", async () => {
    const newUsers = {
      firstname: "Marie",
      lastname: "Martin",
      email: `${crypto.randomUUID()}@wild.co`,
      city: "Paris",
      language: "French",
    };

    const response = await request(app).put("/api/users/0").send(newUsers);

    expect(response.status).toEqual(404);
  });
});
afterAll(() => database.end());