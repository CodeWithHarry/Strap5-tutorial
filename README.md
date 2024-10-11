# Strapi 5 Tutorial

This repository contains a tutorial project that demonstrates how to build a full-stack application using Next.js for the frontend and Strapi for the backend.

## Getting Started

### Prerequisites

Make sure you have the following installed on your system:

- Node.js (>=14.x)
- npm (>=6.x)

### Project Structure

- **nextjs-frontend/**: This directory contains the frontend code, which is built using Next.js.
- **strapi-backend/**: This directory contains the backend code, which is built using Strapi, a headless CMS.

## Running the Project

### 1. Frontend (Next.js)

To run the frontend application:

1. Navigate to the `nextjs-frontend` directory.
   ```bash
   cd nextjs-frontend
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The frontend will be running at `http://localhost:3000`.

### 2. Backend (Strapi)

To run the backend application:

1. Navigate to the `strapi-backend` directory.
   ```bash
   cd strapi-backend
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start the Strapi development server:
   ```bash
   npm run develop
   ```

The backend will be running at `http://localhost:1337`. If you have Razer Chroma installed, change the port in the Strapi configuration to avoid conflicts.
