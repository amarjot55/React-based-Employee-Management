# Employee Management System

## Overview
A React-based Employee Management System with admin and employee dashboards, task creation, and CRUD operations.

## Features
- Admin and Employee login
- Task creation, assignment, and deletion
- Dashboard views for both roles
- Data persistence using localStorage

## How to Run
1. Install dependencies:

npm install

2. Start the application:

npm start

3. Open your browser and navigate to http://localhost:3000


## Folder Structure
- `src/components` - Dashboard and Auth components
- `src/tasklist` - Task card components
- `src/others` - Utility and helper components
- `src/utils/LocalStorage.jsx` - LocalStorage setup

## Usage
- Admin login:  
  Email: `admin@me.com`,`e@e.com for arjun`,`employee2@example.com for others till 5`
   
  Password: `123`
  
- Employees: Use emails and passwords as defined in `LocalStorage.jsx`.

## How It Works
- Admin can create tasks for employees.
- Employees see their assigned tasks and can manage them.
- All data is stored in browser localStorage.

## License
MIT
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

