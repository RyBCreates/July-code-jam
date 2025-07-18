# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# ColoRUSH

A summer vacation route planner for adrenaline seekers in Colorado.

## Project Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/RyBCreates/July-code-jam.git
cd July-code-jam
```

---

### 2. Install Node.js

Make sure Node.js is installed (v16 or later recommended):

```bash
node -v
```

If it's not installed, [download it here](https://nodejs.org/).

---

### 3. Install Dependencies

```bash
npm install
```

---

### 4. Start the Development Server

Run the app locally:

```bash
npm run dev
```

The server set up on port:3001, so nagivate to localhost:3001 in your browser to see the project live

---

### Project Structure

```
├── public/
│   ├── favicon.svg
├── src/
│   ├── assets/
│   │   ├── images/
│   ├── components/
│   │   ├── Header/
│   │   ├── How-It-Works/
│   │   ├── Activities/
│   │   ├── Route-Preview/
│   │   ├── Form/
│   │   ├── Testimonials/
│   │   └── Footer/
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
└── README.md
├── vite.config.js
```

---

### Contribution Guide for Non-React Devs

Even without React experience, you can:

- Edit styles in `.css` files inside `src/components/`
- Add images to the `src/assets/images` and use them in the code
- Modify markup in `.jsx` files (looks similar to HTML)
- See your changes instantly in the browser thanks to hot module replacement
