# My App

A React project built with TypeScript, Tailwind CSS, and Storybook. This project includes reusable UI components like Button, Modal, Card, and Input, with unit tests using Vitest. It uses React 18 for UI, TypeScript for type safety, Tailwind CSS 3 for styling, Storybook 7 for component documentation, Vitest for unit testing, and Vite as the build tool.

Prerequisites: Node.js >= 18, npm >= 9, Git (optional).

Installation: Clone the repository using `git clone https://github.com/<your-username>/<repo-name>.git` and navigate into the folder using `cd <repo-name>`. Install dependencies with `npm install`.

Running the App: Start the development server using `npm run dev` and open http://localhost:5173 in your browser. Running Storybook: Start Storybook using `npm run storybook` and open http://localhost:6006 to view and interact with components. Running Tests: Run all tests using `npm test` or in watch mode using `npm run test:watch`. Building for Production: Use `npm run build`; the production-ready build will be in the dist/ folder.

Git Commands to Push Project: `git add .`, `git commit -m "Initial commit"`, `git branch -M main`, `git remote add origin https://github.com/<your-username>/<repo-name>.git`, `git push -u origin main`.

Project Structure: The folder contains src/components for UI components, src/stories for Storybook stories, App.tsx, main.tsx, and index.css. Public folder for static assets. .storybook folder for Storybook configuration. package.json, tsconfig.json, and tailwind.config.js for project configuration.

Features: Type-safe development with React + TypeScript, Tailwind CSS styling, Storybook documentation, Vitest unit testing, responsive and accessible UI components.

License: MIT License, open source.
