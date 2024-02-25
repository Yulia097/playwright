import { test, expect } from '@playwright/test';

test("Creates list of users with given input array", async ({ request }) => {
  const response = await request.post(`https://petstore.swagger.io/v2/user/createWithArray`, {
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
    data: {
      "id": 0,
      "username": "xhh8282",
      "firstName": "Julia",
    "lastName": "Moiseienko",
    "email": "dneidji@kksk.com",
    "password": "dedede3233",
    "phone": "3874834704791",
    "userStatus": 0
    },
  });
  const responseBody = await response.json();
  expect(responseBody).toEqual({
    "code": 500,
    "type": "unknown",
    "message": "something bad happened"
  })

  expect(response.status()).toBe(500);
});

test("Creates wishlist with given input array", async ({ request }) => {
  const response = await request.post(`https://petstore.swagger.io/v2/user/createWithList`, {
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
    data: {
      "id": 3,
    "username": "Julias2",
    "firstName": "Julia",
    "lastName": "Moiseienko",
    "email": "dneidji@kksk.com",
    "password": "dedede3233",
    "phone": "3874834704791",
    "userStatus": 0
  },
  });
  const responseBody = await response.json();
  expect(responseBody).toEqual({
    "code": 500,
    "type": "unknown",
    "message": "something bad happened"
  })

  expect(response.status()).toBe(500);
});


test("Get user by user name", async ({ request }) => {
  const response = await request.get(`https://petstore.swagger.io/v2/user/11Julia
  `, {
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
    data: {
      "id": 3,
    "username": "Julias2",
    "firstName": "Julia",
    "lastName": "Moiseienko",
    "email": "dneidji@kksk.com",
    "password": "dedede3233",
    "phone": "3874834704791",
    "userStatus": 0
  },
  });
  const responseBody = await response.json();
  expect(responseBody).toEqual({
      "code": 1,
      "type": "error",
      "message": "User not found"
    }
  );
  expect(response.status()).toBe(404);
});


test("Update user", async ({ request }) => {
  const response = await request.put(`https://petstore.swagger.io/v2/user/11Julia
  `, {
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
    data: {
      "id": 3,
    "username": "Julias2",
    "firstName": "Julia",
    "lastName": "Moiseienko",
    "email": "dneidji@kksk.com",
    "password": "dedede3233",
    "phone": "0002020000",
    "userStatus": 0
  },
  });
  const responseBody = await response.json();
  expect(responseBody).toEqual({
    
      "code": 200,
      "type": "unknown",
      "message": "3"
    
    }
  );
  expect(response.status()).toBe(200);
});

test("Delete user", async ({ request }) => {
  const response = await request.delete(`https://petstore.swagger.io/v2/user/dededed`
  , {
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
    data: {
      "id": 3,
    "username": "Julias2",
    "firstName": "Julia",
    "lastName": "Moiseienko",
    "email": "dneidji@kksk.com",
    "password": "dedede3233",
    "phone": "0002020000",
    "userStatus": 0
  },
  });

  expect(response.status()).toBe(404);
});

test("Logs user into the system", async ({ request }) => {
  const response = await request.get(`https://petstore.swagger.io/v2/user/login?username=www&password=www111
  `
  , {
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  expect(response.status()).toBe(200);
});

test("Logout user into the system", async ({ request }) => {
  const response = await request.get(`https://petstore.swagger.io/v2/user/logout

  `
  , {
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  
  const responseBody = await response.json();
  expect(responseBody).toEqual({
    
      "code": 200,
      "type": "unknown",
      "message": "ok"
    
    }
  );

  expect(response.status()).toBe(200);
});

test("Create user", async ({ request }) => {
  const response = await request.post(`https://petstore.swagger.io/v2/user
  `, {
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
    data: {
      "id": 0,
      "username": "xhh8282",
      "firstName": "Julia",
    "lastName": "Moiseienko",
    "email": "dneidji@kksk.com",
    "password": "dedede3233",
    "phone": "3874834704791",
    "userStatus": 0
    },
  });
  const responseBody = await response.json();
  expect(responseBody).toEqual({
    "code": 200,
    "type": "unknown",
    "message": "9223372036854775807"
  })

  expect(response.status()).toBe(200);
});