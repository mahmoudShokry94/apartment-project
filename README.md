# Docker Compose Setup

This repository uses Docker Compose to manage services. Follow the instructions below to set up and run the application.

## Prerequisites

Make sure you have the following installed:
- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/) (if using an older Docker version)

## Getting Started

1. **Clone the repository:**
   ```sh
   git clone https://github.com/apartment-project.git
   cd apartment-project
   ```

2. **Run the containers in detached mode (optional):**
   ```sh
   docker-compose up -d
   ```
   This will run the services in the background.

3. **Check running containers:**
   ```sh
   docker ps
   ```
4. Access Frontend at http://127.0.0.1:5000

## Stopping and Cleaning Up

- **Stop containers:**
  ```sh
  docker-compose down
  ```

- **Remove all containers, networks, and volumes:**
  ```sh
  docker-compose down --volumes --remove-orphans
  ```

## Additional Commands

- **Restart a specific service:**
  ```sh
  docker-compose restart service_name
  ```

- **Rebuild a specific service:**
  ```sh
  docker-compose up --build service_name
  ```

- **Run a command inside a running container:**
  ```sh
  docker exec -it container_name bash
  ```
  Replace `container_name` with the actual container name.

## Troubleshooting

- If you encounter permission issues, try running commands with `sudo`.
- Ensure all required environment variables are set in the `.env` file.
- Use `docker-compose logs` to check for errors.

## Conclusion

Now you should be able to run the application using Docker Compose. If you have any issues, check the logs or refer to the official [Docker Compose documentation](https://docs.docker.com/compose/).

