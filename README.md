# Task Management System

## Description

The Task Management System is a web application that allows users to create, organize, and manage their tasks. The goal of the project is to help users keep track of their work and improve productivity.

## Features

* Create tasks
* Edit tasks
* Delete tasks
* Mark tasks as completed
* Task status (e.g., pending, in progress, completed)
* Due dates and priority levels

## Technologies

* **Frontend:** HTML, JavaScript, Tailwind CSS
* **Backend:** Node.js, Express.js
* **Database:** Currently using mock data (TBD for production)

## Team Members

* Mahd Shakil
* Anjalan Velmugunthan
* Uzair Grewal
* Moeez Ishaq
* Jinesh Patel
* Sufyan Khan

## Installation

To get this project running on your local machine, ensure you have [Node.js](https://nodejs.org/) installed.

1. **Clone the repository** to your local machine.
2. **Navigate to the project directory** in your terminal:
    ```bash
    cd task-manager-app
    ```
3. To make deployment and grading easier, a throwaway database specifically for this
   assignment has been setup. Please create a `.env` file in the root directory and
   add the following:
   ```
    SUPABASE_URL=https://vqiuowihefogxlnjxjjr.supabase.co
    SUPABASE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZxaXVvd2loZWZvZ3hsbmp4ampyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODUwOTgzMzAsImV4cCI6MjEwMDY3NDMzMH0.IuvKWFzKBD7aG9sX3cef48pe8gm8y43vOIFbAFxlzyI
    PORT=3000
   ```
4. **Initialize Node:**
    ```bash
    npm init -y
    ```
5. **Install the required dependencies:**
    ```bash
    npm install
    ```
6. **Start the backend server:**
    ```bash
    node server.js
    ```
7. **Access the application** by navigating to `http://localhost:3000`.

## Project Status

Each individual front end screen is now fully functional. Next step is to improve the user flow from one screen to another and implementing and connecting a database.
