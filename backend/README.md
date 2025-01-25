# Project Title: Volunteer Management API

This project is a backend API for managing volunteers using TypeScript, Express, Prisma ORM, and PostgreSQL. It provides a simple CRUD interface for handling volunteer data.

## Features

- Create, Read, Update, and Delete (CRUD) operations for volunteers.
- Data validation using Zod.
- PostgreSQL database connection using Prisma.
- Organized structure with separate folders for controllers, routes, services, and schemas.

## Project Structure

```
backend
├── src
│   ├── config          # Database configuration
│   ├── controllers     # Request handling logic
│   ├── routes          # API endpoint definitions
│   ├── schemas         # Data validation schemas
│   ├── services        # Business logic
│   └── app.ts         # Entry point of the application
├── prisma              # Prisma schema
├── .env                # Environment variables
├── package.json        # NPM dependencies and scripts
├── tsconfig.json       # TypeScript configuration
└── README.md           # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd backend
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Set up your environment variables in the `.env` file.

5. Run the application:
   ```
   npm start
   ```

## Usage

The API provides endpoints for managing volunteers. You can use tools like Postman or curl to interact with the API.

## License

This project is licensed under the MIT License.