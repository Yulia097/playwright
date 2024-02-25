import { test, expect } from "@playwright/test";

test("Place an order for a pet", async ({ request }) => {
  const response = await request.post(`https://petstore.swagger.io/v2/store/order`, {
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
    data: {
      id: 1,
      petId: 5,
      quantity: 100,
      shipDate: "2024-02-16T18:20:50.714Z",
      status: "placed",
      complete: true,
    },
  });
  expect(response.status()).toBe(200);
});

test("check I can find purchase order by ID", async ({ request }) => {
  const response = await request.get(
    `https://petstore.swagger.io/v2/store/order/1`,
    {
      headers: {
        accept: "application/json",
      },
    }
  );
  const responseBody = await response.json();
  expect(responseBody).toEqual({
    code: 1,
    type: "error",
    message: "Order not found"});

  expect(response.status()).toBe(404);
});



test("check I can delete purchase order by ID", async ({ request }) => {
  const issues = await request.delete(
    `https://petstore.swagger.io/v2/store/order/4`,
    {
      headers: {
        accept: "application/json",
      },
    }
  );
  expect(issues.status()).toBe(404);
});


test("check I can return pet inventories ", async ({ request }) => {
  const issues = await request.get(
    `https://petstore.swagger.io/v2/store/inventory`,
    {
      headers: {
        accept: "application/json",
      },
    }
  );
  expect(issues.status()).toBe(200);
});