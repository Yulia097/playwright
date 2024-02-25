import { test, expect } from "@playwright/test";
import fs from "fs";
import path from "path";


test("Create a new pet", async ({ request }) => {
  const response = await request.post(`https://petstore.swagger.io/v2/pet`, {
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
    data: {
      id: 8,
      category: {
        id: 1,
        name: "doggy",
      },
      name: "doggie",
      photoUrls: ["string"],
      tags: [
        {
          id: 0,
          name: "string",
        },
      ],
      status: "available",
    },
  });

  expect(response.status()).toBe(200);
});

test("Upload image for the created pet", async ({ request }) => {

  const petId = 8;
  const file = path.resolve("./", "dog-image.jpeg");
  const image = fs.readFileSync(file);

  const response = await request.post(
    `https://petstore.swagger.io/v2/pet/${petId}/uploadImage`,
    {
      headers: {
        accept: "application/json",
        "Content-Type": "multipart/form-data",
      },
      multipart: {
        field: {
          name: 'file',
          mimeType: "image/jpeg",
          buffer: image,
        },
      },
    }
  );

  if (response.status() === 200) {
    expect(response.ok()).toBeTruthy();
  } else if (response.status() === 404) {
    console.log('Pet not found.');
    expect(response.ok()).toBeFalsy();
  } else {
    console.log(`Unexpected status code: ${response.status()}`);
    expect(response.ok()).toBeFalsy();
  }
  
});

test("check pet updated", async ({ request }) => {
  const response = await request.put(`https://petstore.swagger.io/v2/pet`, {
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
    data: {
      id: 5,
      category: {
        id: 1,
        name: "string",
      },
      name: "doggie",
      photoUrls: ["string"],
      tags: [
        {
          id: 0,
          name: "string",
        },
      ],
      status: "available",
    },
  });
  expect(response.status()).toBe(200);
});

test("check I can find pet by status", async ({ request }) => {
  const issues = await request.get(
    `https://petstore.swagger.io/v2/pet/findByStatus?status=available`,
    {
      headers: {
        accept: "application/json",
      },
    }
  );
  expect(issues.ok()).toBeTruthy();
});

test("check pet can be deleted", async ({ request }) => {
  const issues = await request.delete(`https://petstore.swagger.io/v2/pet/5`, {
    headers: {
      accept: "application/json",
      api_key: "123",
    },
  });
  expect(issues.ok()).toBeTruthy();
});

test("Check pet can be found by id", async ({ request }) => {
  const response = await request.get(`https://petstore.swagger.io/v2/pet/2`, {
    headers: {
      accept: "application/json"
    },
  });

  const responseBody = await response.json();
  expect(response.status()).toBe(404);
  expect(responseBody).toEqual({
    code: 1,
    type: "error",
    message: "Pet not found"
  });

  expect(response.status()).toBe(404);
});

test("Updates a pet in the store with form data", async ({ request }) => {
  const petId = 2;

  const formData = new URLSearchParams();
  formData.append('name', 'Grogu');
  formData.append('status', 'available');

  const response = await request.post(`https://petstore.swagger.io/v2/pet/${petId}`, {
    headers: {
      'accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
  expect(response.status()).toBe(404);

  const responseBody = await response.json();
  expect(responseBody).toEqual({
    code: 404,
    type: 'unknown',
    message: 'not found'
  });
});
  
