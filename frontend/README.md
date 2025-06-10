# 📈 Grade Management System

**Grade Management System** is a web application designed to facilitate the **management and monitoring of student grades**. Its objective is to allow for the input and display of academic performance across multiple subjects, providing detailed insights into individual student progress and overall class statistics.

🔗 **Frontend Deployment Link (Simulated):**
👉 [https://grade-management-cyberjs.netlify.app/](https://grade-management-cyberjs.netlify.app/)

---

## 🧩 Project Description

This application allows users to visualize, create, and manage student grades for subjects like Java, SQL, Mathematics, and English. It focuses on providing a clear overview of student scores, averages, and class rankings, along with subject-specific class averages. The system manages students by unique IDs (e.g., STD01).

## 🛠️ Technologies Used

### 🔧 Backend
- `Java 21`
- `Spring Boot`: Framework for building robust RESTful APIs.
- `Maven`: Dependency management and build automation.
- `PostgreSQL`: Relational database for persistent data storage.

### 💻 Frontend
- `React`: A JavaScript library for building user interfaces.
- `Vite`: A fast build tool that enhances the frontend development experience.
- `react-router-dom`: For client-side routing.
- `axios`: Promise-based HTTP client for making API requests.
- `npm` / `Yarn`: Package managers for JavaScript dependencies.

---

## ✅ Key Features

### Backend
-   **RESTful API:** Provides endpoints for managing student and grade data.
-   **Data Persistence:** Integrates with PostgreSQL to securely store all academic records.
-   **Business Logic:** Handles calculations for student averages, rankings, and class subject averages.

### Frontend
-   **Intuitive Interface:** Allows input of student numbers and individual subject scores.
-   **Performance Display:** Visualizes individual student scores, average, and rank.
-   **Class Statistics:** Displays overall class averages for each subject.
-   **Student ID Management:** Manages students using a standardized ID format (e.g., STD01).

---

## 📁 Project Structure

This project follows a monorepo structure, containing distinct directories for the backend and frontend components, reflecting their specific file organization:

### Backend (`/backend`)

backend/
├── config/              # Configuration files (e.g., database, CORS)
├── controller/          # REST controllers handling API requests
├── model/               # Data models (JPA Entities)
├── repository/          # Spring Data JPA repositories for data access
├── service/             # Business logic services
├── GradeManagementApplication.java # Main Spring Boot application class
├── StudentService.java  # Example service for student operations
├── pom.xml              # Maven project file
├── src/
│   └── main/
│       └── java/
│           └── com/josesalapaso/grade_management/
│               └── ... (config, controller, model, etc.)
│       └── resources/
│           └── application.properties # Spring Boot application properties
├── target/              # Compiled Java classes and JAR file
└── ... (other Maven/Git related files)


### Frontend (`/frontend`)
frontend/
├── public/              # Static assets (e.g., index.html)
├── src/                 # React source code
│   ├── api/             # Functions for API communication using Axios
│   ├── assets/          # Icons, images
│   ├── components/      # Reusable React components
│   ├── pages/           # React components acting as pages/routes (e.g., index.jsx, main.jsx)
│   ├── index.css        # Global styles
│   └── main.jsx         # Main entry point of the React app
├── package.json         # Frontend project metadata and dependencies
├── vite.config.js       # Vite build configuration
├── .env                 # Environment variables (local, .gitignore'd)
└── ... (other npm/Git related files)


---

## 🧪 How to Run the Project (Local Development)

To get a copy of this project up and running on your local machine for development and testing purposes, follow these steps.

### Prerequisites

Before you begin, ensure you have the following software installed:

* **Java Development Kit (JDK) 21:** Required for the Spring Boot backend.
* **Apache Maven:** Used for building and managing the Spring Boot project.
* **Node.js (LTS version recommended):** Includes npm (Node Package Manager), required for the React frontend.
* **PostgreSQL:** The database server for storing project data. You'll need to have a PostgreSQL instance running locally.
* **Git:** For cloning the repository.
* **An IDE (e.g., IntelliJ IDEA, VS Code):** Recommended for development.

### Installation and Setup

1.  **Clone the Repository:**
    Open your terminal or command prompt and run the following command to clone the project to your local machine:
    ```bash
    git clone [https://github.com/josesalopasog/grade-management.git](https://github.com/josesalopasog/grade-management.git)
    cd grade-management
    ```

2.  **Database Setup (PostgreSQL):**
    * Start your local PostgreSQL server.
    * Create a new database for this project (e.g., `grade_db`). You can use a PostgreSQL client (like pgAdmin, DBeaver) or the `psql` command-line tool.
        ```sql
        CREATE DATABASE grade_db;
        ```
    * **Configure Backend Database Connection:**
        Navigate to `backend/src/main/resources/application.properties` and configure it for your local PostgreSQL database. For local development, you might temporarily use direct credentials (ensure these are NOT committed to Git for production deployments):
        ```properties
        # Example for local development (NOT for production commit)
        spring.datasource.url=jdbc:postgresql://localhost:5432/grade_db
        spring.datasource.username=your_db_username
        spring.datasource.password=your_db_password
        spring.datasource.driver-class-name=org.postgresql.Driver
        spring.jpa.hibernate.ddl-auto=update # Or 'create', 'none'
        ```

3.  **Backend Setup and Run:**
    * Navigate to the `backend` directory:
        ```bash
        cd backend
        ```
    * Build the Spring Boot application using Maven:
        ```bash
        mvn clean install
        ```
    * Run the Spring Boot application:
        ```bash
        java -jar target/*.jar
        # Or if you prefer using Maven directly:
        # mvn spring-boot:run
        ```
    * The backend server should start, typically accessible at `http://localhost:8080`.

4.  **Frontend Setup and Run:**
    * Open a **new terminal or command prompt** (keep the backend running in the first one).
    * Navigate to the `frontend` directory:
        ```bash
        cd ../frontend # To go back to grade-management/ and then into frontend
        # Or if you're already in grade-management:
        # cd frontend
        ```
    * Install the JavaScript dependencies:
        ```bash
        npm install # Or 'yarn install' if you use Yarn
        ```
    * **Configure Frontend API URL:**
        Create a file named `.env.development.local` in the `frontend/` directory (this file will be ignored by Git by default, which is good practice). Add the API URL for your local backend:
        ```properties
        # frontend/.env.development.local
        VITE_REACT_APP_API_URL=http://localhost:8080
        ```
        *Note: Vite requires environment variables to be prefixed with `VITE_`.*
    * Start the React development server:
        ```bash
        npm run dev # Or 'yarn dev' if you use Yarn
        ```
    * The frontend application should open automatically in your browser, typically at `http://localhost:5173` (Vite's default development port).

Now you should have both the backend and frontend running locally, communicating with your local PostgreSQL database!

---

## 🌍 Deployment

* 🔧 **Backend** deployed on **Render** (e.g., `https://grade-management-backend.onrender.com`)
* 🧩 **Frontend** deployed on **Netlify** (e.g., `https://grade-management-cyberjs.netlify.app`)

---

## 📝 License

This project is open-source and available under the [MIT License](https://opensource.org/licenses/MIT).

---

Developed with ❤️ by [Jose Salopaso / GitHub Handle](https://github.com/josesalopasog)