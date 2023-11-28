// const request = require("supertest");
// const database = require("../database")
// const crypto = require("node:crypto");

// afterAll(() => database.end());

// const app = require("../src/app");

// describe("GET /api/users", () => {
//   it("should return all users", async () => {
//     const response = await request(app).get("/api/users");

//     expect(response.headers["content-type"]).toMatch(/json/);

//     expect(response.status).toEqual(200);
//   });
// });

// describe("GET /api/users/:id", () => {
//   it("should return one user", async () => {
//     const response = await request(app).get("/api/users/1");

//     expect(response.headers["content-type"]).toMatch(/json/);

//     expect(response.status).toEqual(200);
//   });

//   it("should return no user", async () => {
//     const response = await request(app).get("/api/users/0");

//     expect(response.status).toEqual(404);
//   });
// });

// describe("POST /api/users", () => {
//   it("should return created user", async () => {
//     const newUser = {
//       firstname: "Marie",
//       lastname: "Martin",
//       email: `${crypto.randomUUID()}@wild.co`,
//       city: "Paris",
//       language: "French",
//     };
//   });

// });

// describe("POST /api/users", () => {
//   it("should be return an error", async () =>{
//     const newUsersWithoutProps = {firstname: "cedric"}
// const response = await request(app).post("/api/users").send(newUsersWithoutProps);
// const [result] = await database.query(`SELECT * FROM users WHERE id=${response.body.id}`,
// response.body.id
// );
// const [newUsers] = result;

// expect(newUsers).toHaveProperty("firstname")
// expect(newUsers).toHaveProperty("lastname")
// expect(newUsers).toHaveProperty("email")
// expect(newUsers).toHaveProperty("city")
// expect(newUsers).toHaveProperty("language")

// })
// })