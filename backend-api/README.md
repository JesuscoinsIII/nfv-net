# README.md

# Backend API Project

This project is a backend API for managing volunteers, utilizing PostgreSQL with Neon DB, Prisma ORM for database interactions, and Zod for data validation. Below is an overview of the folder structure and the purpose of each folder.

## Folder Structure

- **src/**: Contains the main source code for the application.
  - **config/**: Holds configuration files, including database connection settings.
    - `db.ts`: Database configuration for connecting to PostgreSQL using Prisma.
  - **controllers/**: Contains controller files that handle the business logic for different routes.
    - `volunteers.controller.ts`: Handles CRUD operations related to volunteers.
  - **middleware/**: Contains middleware functions for request processing.
    - `auth.middleware.ts`: Middleware for authentication.
    - `validation.middleware.ts`: Middleware for validating incoming requests using Zod schemas.
  - **models/**: Contains model definitions that represent the data structure.
    - `volunteers.model.ts`: Defines the Volunteers model for the database.
  - **routes/**: Contains route definitions for the application.
    - `index.ts`: Sets up the main routing for the application.
    - `volunteers.routes.ts`: Defines routes for CRUD operations related to volunteers.
  - **schemas/**: Contains Zod schemas for data validation.
    - `volunteers.schema.ts`: Zod schemas for validating the structure of volunteers data.
  - **types/**: Contains TypeScript types and interfaces used throughout the application.
    - `index.ts`: Exports types and interfaces.
  - **utils/**: Contains utility functions that can be reused across the application.
    - `helpers.ts`: Utility functions for various tasks.
  - `app.ts`: The entry point of the application, initializing the Express app and defining routes.

- **prisma/**: Contains the Prisma schema for the database.
  - `schema.prisma`: Defines the database schema, including the volunteers table and its fields.

- **.env**: Contains environment variables for sensitive information, including database connection strings.

- **.gitignore**: Specifies files and directories to be ignored by Git.

- **package.json**: Configuration file for npm, listing dependencies and scripts.

- **tsconfig.json**: Configuration file for TypeScript, specifying compiler options.

- **README.md**: Documentation for the project, including an overview of the folder structure and the purpose of each folder.