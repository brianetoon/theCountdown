# **Countdown Timer Project**

This project is a countdown timer that displays the time left until a target date. The front end is built with **React**, while the backend is handled with **Express.js** using **EJS** for templating.

## **Project Setup**

### **1. Install Dependencies**
Before running the project, make sure to install all required dependencies:
```sh
npm install
```
If you're inside the `react` folder, make sure to also install dependencies there:
```sh
cd react
npm install
```

### **2. Build the react**
Before running the server, you need to build the React project so the server can serve the static files correctly:
```sh
cd react
npm run build
```
This will generate a `dist` folder inside `react`, which the server will use to serve the frontend.

### **3. Run the Development Server**
To start the server in development mode, use:
```sh
npm run dev
```
This will start both the **Express.js backend** and the **React development server**.

### **4. Run the Production Server**
Once the project is built, you can start the server:
```sh
npm start
```
This will serve the static files from the `react/dist` directory.

---

## **Development Guidelines**

### **Building the Project**
- Always run `npm run build` before using the main project to ensure the server can properly serve the latest frontend build.
- If you are working on frontend changes, use `npm run dev` inside `react` to use Vite's development server.

### **Testing & Additional Features**
- If there are testing or other development features required, use the development server (`npm run dev`).
- Always ensure that the latest `build` is up-to-date before integrating changes into the backend.

---

