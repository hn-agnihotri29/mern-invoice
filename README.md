## MERN-Invoice: A Powerful Invoicing Application with Docker and Cutting-Edge Technologies

This project delivers a robust and modern invoicing solution built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). It leverages Docker for containerization, Nginx for web server optimization, Redux Toolkit for efficient state management, RTK Query for streamlined data fetching, JWT for secure authentication, and ReactJS for a dynamic user interface.

### Environment Variables

To configure your application effectively, create a `.env.example` file at the root of your project and fill it with the following placeholders. Replace them with your actual values:

### Running the Web Application (Docker Required)

**Prerequisites:**

- Docker Engine: Ensure Docker is installed on your system. You can find installation instructions at https://docs.docker.com/engine/install/.

**Instructions:**

1. **Clone or Download the Project:** Obtain the project source code using your preferred method (e.g., Git clone or download).
2. **Build and Start Containers (Linux & macOS):**
   - Open a terminal in the project directory.
   - Run the following commands sequentially:
     ```
     make build
     make up
     ```
   - The first command builds Docker images, and the second starts the containers for your application.
3. **Bring Down Containers (Linux & macOS):**
   - To stop and remove the running containers, use the command:
     ```
     make down
     ```
4. **Windows Users:**
   - The process remains largely the same. Follow the commands mentioned in step 2, but replace `make` with its Windows equivalent (e.g., `docker-compose`). Refer to the Docker documentation for Windows-specific instructions.

**Access the Application:**

Once you've successfully started the containers, the application should be accessible in your web browser, typically at `http://localhost:8080` (the port may vary depending on your configuration).

**Additional Notes:**

- For more detailed instructions, configuration options, or troubleshooting assistance, refer to the project's README file or any dedicated documentation provided within the project codebase.
- Remember to replace the placeholder values in `.env.example` with your actual configuration details.

By following these steps, you can effortlessly set up and run your MERN-Invoice application, leveraging the power of Docker, Nginx, Redux Toolkit, RTK Query, JWT, and ReactJS for a seamless user experience.
