## **Overview**

The Ninja Lawyer Server is a Node.js server that provides a RESTful API for managing clients, lawyers and tasks for ninjalawyer.in. The server uses NodeJS and it’s framework Express.js and MongoDB for data storage.

## **Installation**

To install the server, follow these steps:

1. Clone the repository: **`git clone https://github.com/SadnanRashid/ninja-lawyer-server.git`**
2. Navigate to the project directory: **`cd ninja-lawyer-server`**
3. Install dependencies: **`npm install`**
4. Start the server: **`node index` / `nodemon index`**

## **API Usage**

The server provides the following endpoints:

### **Case Endpoints**

- **`GET http://localhost:5000/api/users/test`**: A test endpoint to check if the server is running.
- **`POST http://localhost:5000/api/users/add`**: Endpoint to add new user data to the database.
- **`GET http://localhost:5000/api/users/get/:id`**: Endpoint to get user data from the database based on user ID.
- **`PUT http://localhost:5000/api/users/update/:id`**: Endpoint to update user data in the database based on user ID.
- **`GET http://localhost:5000/api/users/get-logs/:id`**: Endpoint to get user logs from the database based on user ID.
- **`POST http://localhost:5000/api/users/add-lawyer`**: Endpoint to add new lawyer data to the database.
- **`GET http://localhost:5000/api/users/get-lawyers/all`**: Endpoint to get all lawyers from the database.
- **`GET http://localhost:5000/api/users/get-lawyers?page=1&limit=10`**: Endpoint to get all lawyers from the database.
- **`DELETE http://localhost:5000/api/users/lawyer/delete/:id`**: Endpoint to delete a lawyer from the database based on lawyer ID.
- **`GET http://localhost:5000/api/users/get-lawyer/:id`**: Endpoint to get one lawyer's details from the database based on lawyer ID.
- **`PUT http://localhost:5000/api/users/lawyer/update/:id`**: Endpoint to update lawyer data in the database based on lawyer ID.
- **`GET http://localhost:5000/api/users/lawyer/unverified`**: Endpoint to get all unverified lawyers from the database.
- **`GET http://localhost:5000/api/users/lawyer/search`**: Endpoint to get queried lawyers from the database based on search criteria.
- **`GET http://localhost:5000/api/users/lawyer/search-specialties/:query`**: Endpoint to get queried lawyers from the database based on specialties.
- ``````POST **http://localhost:5000/api/users/logs/post?QUERIES**`: Endpoint to post/update logs to db.
- **`GET http://localhost:5000/api/users/logs/get/:UID`**: Endpoint to get logs of a user.

### Using **Endpoints (Required headers/params)**

- **`GET http://localhost:5000/api/users/test`**: This endpoint doesn't require any parameters.
- **`POST http://localhost:5000/api/users/add`**: This endpoint requires a JSON payload containing user data to be added to the database. The payload should have the following properties:
  ```json
  {
    "email": "string",
    "password": "string",
    "firstName": "string",
    "lastName": "string",
    "phone": "string",
    "address": "string",
    "city": "string",
    "state": "string",
    "zip": "string",
    "country": "string"
  }
  ```
- **`GET http://localhost:5000/api/users/get/:id`**: This endpoint requires an **`id`** parameter in the URL, which should be the ID of the user whose data is being requested.
- **`PUT http://localhost:5000/api/users/update/:id`**: This endpoint requires an **`id`** parameter in the URL, which should be the ID of the user whose data is being updated. It also requires a JSON payload containing the updated user data. The payload should have the following properties:
  ```json
  {
    "email": "string",
    "firstName": "string",
    "lastName": "string",
    "phone": "string",
    "address": "string",
    "city": "string",
    "state": "string",
    "zip": "string",
    "country": "string"
  }
  ```
- **`GET http://localhost:5000/api/users/get-logs/:id`**: This endpoint requires an **`id`** parameter in the URL, which should be the ID of the user whose logs are being requested.
- **`POST http://localhost:5000/api/users/add-lawyer`**: This endpoint requires a JSON payload containing lawyer data to be added to the database. The payload should have the following properties:
  ```json
  {
    "email": "string",
    "password": "string",
    "firstName": "string",
    "lastName": "string",
    "phone": "string",
    "address": "string",
    "city": "string",
    "state": "string",
    "zip": "string",
    "country": "string",
    "specialties": ["string"],
    "barId": "string"
  }
  ```
- **`GET http://localhost:5000/api/users/get-lawyers/all`**: This endpoint doesn't require any parameters.
- **`GET http://localhost:5000/api/users/get-lawyers?page=1&limit=10`**: Endpoint to get all lawyers from the database.URL Parameters: **`page`** (optional): Specifies the page number to retrieve (default is 1). **`limit`** (optional): Specifies the number of documents to return per page (default is 10).
- **`DELETE http://localhost:5000/api/users/lawyer/delete/:id`**: This endpoint requires an **`id`** parameter in the URL, which should be the ID of the lawyer to be deleted.
- **`GET http://localhost:5000/api/users/get-lawyer/:id`**: This endpoint requires an **`id`** parameter in the URL, which should be the ID of the lawyer whose data is being requested.
- ````POST **http://localhost:5000/api/users/logs/post?QUERIES**`: Endpoint to get queried lawyers from the database based on specialties. **`UID`** and **`action`.** Action can be “login”, “profile*update” or others. No spaces only “*”.
- **`PUT http://localhost:5000/api/users/lawyer/update/:id`**: This endpoint requires an **`id`** parameter in the URL, which should be the ID of the lawyer whose data is being updated. It also requires a JSON payload containing the updated lawyer data. The payload should have the following properties:
