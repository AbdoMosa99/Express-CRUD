import { Request, Response } from "express";

import { createProduct } from "../../src/controllers/product.controllers";


// Mock database
jest.mock("../../src/models/product.model", () => ({
    Product: {
        findOne: jest.fn(),
        create: jest.fn(() => ({ _id: 0 })),
    }
}));

describe("Unit Test: Create Product", () => {

    test("should send error without the required name", async () => {
        const response = {
            status: jest.fn(code => response),
            json: jest.fn(),
        } as unknown as Response;

        const request = {
            body: {
                description: "",
                price: 0.0,
            },
        } as Request;
    
        await createProduct(request, response);
        expect(response.status).toHaveBeenCalledWith(422);
    });

    test("should send error without the required price", async () => {
        const response = {
            status: jest.fn(code => response),
            json: jest.fn(),
        } as unknown as Response;

        const request = {
            body: {
                name: "",
                description: "",
            },
        } as Request;
    
        await createProduct(request, response);
        expect(response.status).toHaveBeenCalledWith(422);
    });

    test("should work with all", async () => {
        const response = {
            status: jest.fn(code => response),
            json: jest.fn(),
        } as unknown as Response;

        const request = {
            body: {
                name: "test",
                description: "",
                price: 1,
            },
        } as Request;
    
        await createProduct(request, response);
        expect(response.status).toHaveBeenCalledWith(201);
    });
});
