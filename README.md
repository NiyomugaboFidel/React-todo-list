# Todo App

A simple Todo application built with React and JSON Server. The application allows users to add, edit, and delete todo items.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- Add new todo items.
- Edit existing todo items.
- Delete todo items.
- Fetch todos from a JSON server.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/NiyomugaboFidel/React-todo-list
   cd Add-to-do
2. Install the dependencies:

npm install
3. Install JSON Server globally (if not already installed):


npm install -g json-server

4. Start JSON Server:

json-server --watch db.json --port 3000

This will start a JSON Server on http://localhost:3000 with the database file db.json.

Start the React development server:


5. npm start
This will start the React application on http://localhost:3000.

Usage
Open the application in your browser at http://localhost:3000.
Add new todo items using the input field and the "Add Todo" button.
Edit todo items by clicking the "Edit" button next to each item.
Delete todo items by clicking the "Delete" button next to each item.