# Social Network API

## Description

The Social Network API is designed to manage user interactions on a social media platform. It will allow users to create accounts, post thoughts, connect with friends, and react to posts. Built with Express.js and MongoDB, this API provides a scalable solution for social networking features, supporting CRUD operations for users, thoughts, friends, and reactions. The project was motivated by the need for a robust backend solution that facilitates dynamic and interactive user engagement.
Although it's still in progress, I want to use this as an example to my skillset and how much growth I've made.
## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Testing with Insomnia](#testing-with-insomnia)
- [Troubleshooting](#troubleshooting)
- [License](#license)
- [Credits](#credits)

## Installation

To set up the Social Network API on your local machine, follow these steps:

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/your-username/social-network-api.git
    ```

2. **Navigate to the Project Directory:**

    ```bash
    cd social-network-api
    ```

3. **Install Dependencies:**

    Ensure you have Node.js and MongoDB installed. Then run:

    ```bash
    npm install
    ```

4. **Set Up MongoDB:**

    Make sure MongoDB is running on your local machine. You can start it with:

    ```bash
    mongod
    ```

5. **Run the Application:**

    Start the server with:

    ```bash
    npm start
    ```

## Usage

Once the server is running, you can interact with the API endpoints using tools like Insomnia or Postman. Below are examples of API requests you can make:

### Requests:

- **POST /api/users**: Create a new user.
- **GET /api/users**: Retrieve a list of users.
- **PUT /api/users/:id**: Update a user's information.
- **DELETE /api/users/:id**: Delete a user.

For a more detailed description of the API endpoints, see the [API Endpoints](#api-endpoints) section.

## API Endpoints

### Users

- **GET /api/users**: Retrieve a list of all users.
- **POST /api/users**: Create a new user.
- **PUT /api/users/:id**: Update a user's details.
- **DELETE /api/users/:id**: Delete a user.

### Thoughts

- **GET /api/thoughts**: Retrieve a list of all thoughts.
- **POST /api/thoughts**: Create a new thought.
- **PUT /api/thoughts/:id**: Update a thought.
- **DELETE /api/thoughts/:id**: Delete a thought.

### Friends

- **POST /api/users/:id/friends/:friendId**: Add a friend to a user's friend list.
- **DELETE /api/users/:id/friends/:friendId**: Remove a friend from a user's friend list.

### Reactions

- **POST /api/thoughts/:id/reactions**: Add a reaction to a thought.
- **DELETE /api/thoughts/:id/reactions/:reactionId**: Remove a reaction from a thought.

## Testing with Insomnia

To test the API endpoints using Insomnia:

1. **Open Insomnia** and create a new request.
2. **Select the HTTP method** (GET, POST, PUT, DELETE) based on the operation you want to test.
3. **Enter the API endpoint URL** in the address bar.
4. **Add request body** (for POST and PUT) in JSON format.
5. **Send the request** and inspect the response.

### Example Requests for Testing:

- **POST /api/users**

    ```json
    {
      "username": "newuser",
      "email": "newuser@example.com"
    }
    ```

- **PUT /api/users/12345**

    ```json
    {
      "username": "updateduser",
      "email": "updateduser@example.com"
    }
    ```

- **DELETE /api/users/12345**

## Troubleshooting

- **404 Not Found**: Ensure that the endpoint URL is correct and the server is running.
- **ECONNREFUSED**: Verify that MongoDB is running and accessible.
- **No Console Output**: Ensure that `console.log` statements are properly placed and the server is running.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Credit

- **Xavier Leon (https://github.com/lateralmonster1)** - Developer

