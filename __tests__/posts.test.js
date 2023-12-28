const supertest = require("supertest");
const app = require("../index");

const request = supertest(app);

// Create Block Test
describe("Express Jest Crud Api Testing", () => {
    let postId = "";
    // Test Case 1
    test("should add a new post POST /posts ", async () => {
        const response = await request
            .post("/posts")
            .send({ title: "test", description: "description", isActive: true });
        expect(response.statusCode).toBe(201);
        expect(response.body.data).toMatchObject({ title: "test", description: "description", isActive: true });
        postId = response.body.data._id;
    });
    // Test Case 2
    test("should get all posts GET /posts", async () => {
        const response = await request
            .get("/posts");
        expect(response.statusCode).toBe(200);
        expect(response.body.data.length).toBeGreaterThanOrEqual(1);
    });
    // Test Case 3
    test("should get specific post GET /posts/:_id", async () => {
        const response = await request
            .get(`/posts/${postId}`);
        expect(response.statusCode).toBe(200);
        expect(response.body.data).toMatchObject({ title: "test", description: "description", isActive: true });
    });
    // Test Case 4
    test("should update specific post UPDATE /posts/:_id", async () => {
        const response = await request
            .put(`/posts/${postId}`)
            .send({ title: "test", description: "description", isActive: false });
        expect(response.statusCode).toBe(200);
        expect(response.body.data).toMatchObject({ modifiedCount: 1 });
    });
    // Test Case 5
    test("should remove specific post DELETE /posts/:_id", async () => {
        const response = await request
            .delete(`/posts/${postId}`);
        expect(response.statusCode).toBe(200);
        expect(response.body.data).toMatchObject({ deletedCount: 1 });
    });
});
