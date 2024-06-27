# Prisma Setup

## Steps to Setup Prisma with PostgreSQL

1. **Initialize Prisma**:
    ```sh
    npx prisma init
    ```

2. **Start PostgreSQL with Docker**:
    ```sh
    docker run -e POSTGRES_PASSWORD=<password> -d -p 5432:5432 postgres
    ```
    Replace `<password>` with your desired PostgreSQL password.

3. **Switch to PostgreSQL User**:
    ```sh
    sudo -i -u postgres
    ```

4. **Apply Migrations**:
    ```sh
    npx prisma migrate dev --name Initialized_Schema
    ```
    Run this command after any changes to your Prisma schema to apply migrations.

5. **List Running Docker Containers**:
    ```sh
    docker ps
    ```

6. **Access Docker Container**:
    ```sh
    docker exec -it <container_id> /bin/bash
    ```
    Replace `<container_id>` with the actual container ID from the `docker ps` command.

7. **Access PostgreSQL CLI**:
    ```sh
    psql -h localhost -U postgres
    ```

8. **Generate Prisma Client**:
    ```sh
    npx prisma generate
    ```

> Do the rest in the `index.ts` file to interact with the database without writing strict SQL queries.
