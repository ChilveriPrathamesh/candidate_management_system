const request = require("supertest");

const app = require("./server") ;

describe("Candidate API", () => {
  it("should add a new candidate", async () => {
    const res = await request(app)
      .post("/api/candidates")
      .send({
        name: "John Doe",
        email: "john@example.com",
        phone_number: "1234567890",
        current_status: "Available",
        resume_link: "http://resume.com/john"
      });

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("id");
  });

  it("should fetch all candidates", async () => {
    const res = await request(app).get("/api/candidates");
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});