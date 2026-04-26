# TripUnite

<p align="center">
	<strong>A modern travel companion platform for discovering trips, meeting people, and planning journeys together.</strong><br />
	Built with React, Node.js, Express, Supabase, and AI-assisted trip planning.
</p>

<p align="center">
	<img alt="React" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
	<img alt="Node.js" src="https://img.shields.io/badge/Node.js-1F2937?style=for-the-badge&logo=node.js&logoColor=22C55E" />
	<img alt="Express" src="https://img.shields.io/badge/Express-111827?style=for-the-badge&logo=express&logoColor=FFFFFF" />
	<img alt="Supabase" src="https://img.shields.io/badge/Supabase-0F172A?style=for-the-badge&logo=supabase&logoColor=3ECF8E" />
	<img alt="Vercel" src="https://img.shields.io/badge/Vercel-111827?style=for-the-badge&logo=vercel&logoColor=FFFFFF" />
</p>

## What TripUnite Is

TripUnite is a full-stack travel companion platform designed to make group travel easier, friendlier, and more engaging. It brings together a polished frontend, a secure backend, AI features, and a public showcase page so the project can be presented clearly as a real product.

## Why It Exists

Travel feels better when it is shared. TripUnite was built to help people:

- Find travel companions for a destination, route, or trip idea
- Create and join trips through a guided flow
- Plan journeys with AI support
- Explore trip ideas in a cleaner, more visual interface
- Contact the creator for collaboration, freelance work, or follow-up projects

## What Makes It Stand Out

TripUnite is not just a demo page. It includes product-level details that make it easier to present, test, and expand:

- A responsive React frontend with route-based navigation
- A Node.js and Express backend with controller-based structure
- Authentication and user session handling
- Trip creation and join-trip workflows
- An AI chatbot for quick travel-related assistance
- Supabase-backed data access and schema support
- Language switching for a more inclusive UI
- A dedicated Showcase page for features, value highlights, and presentation copy
- A contact-friendly About page with direct links and a stronger portfolio story

## Features By Area

### User Experience

- Hero sections that introduce the app clearly
- Dark, modern visual styling with polished cards and gradients
- Navigation that keeps the experience easy to follow
- Responsive layouts for desktop and mobile
- A route loader that makes page transitions feel smoother

### Product Flow

- Trip creation for organizing travel plans
- Trip joining for users who want to participate in existing trips
- Dashboard views for user activity and management
- Feedback and social interaction areas
- A chatbot that can assist with trip-related prompts
- A Showcase page that helps communicate the value of the app at a glance

### Portfolio Value

- A stronger About page with creator context and tech stack details
- A showcase-oriented presentation page for recruiters or clients
- Sample testimonial sections for mock presentation layouts
- Contact links that make outreach easy

## Tech Stack

### Frontend

- React
- React Router
- React Icons
- React i18next
- Axios
- React Toastify
- Slick Carousel
- Tailwind CSS tooling

### Backend

- Node.js
- Express
- JSON Web Token
- bcrypt
- CORS
- cookie-parser
- express-validator
- express-rate-limit
- dotenv
- Supabase SDK
- Google Generative AI SDK
- Zod

## Key Pages

- Home: the main entry point and product introduction
- Login / Signup: authentication flow
- Main: core app navigation and landing content
- Dashboard: user-focused area
- Create: trip creation flow
- Join: trip joining flow
- About: creator profile, stack, and project story
- Showcase: feature presentation and sample testimonials
- Contact: direct communication and social links

## Repository Layout

```text
TripUnite/
├── front-end/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   └── util/
│   └── public/
├── back-end/
│   ├── controllers/
│   ├── routes/
│   ├── db/
│   ├── middleware/
│   └── scripts/
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm
- A Supabase project or compatible backend setup
- A Gemini API key if you want the AI chatbot features enabled locally

### Install Dependencies

From the project root:

```bash
cd back-end
npm install
cd ../front-end
npm install
```

## Environment Variables

Create local environment files using the examples provided in the repository.

### Backend

Set these values in `back-end/.env`:

- `MONGODB_URI`
- `jwt_secret`
- `GEMINI_API_KEY`
- `CORS_ORIGIN` - comma-separated frontend origins

### Frontend

Set this value in `front-end/.env`:

- `REACT_APP_API_BASE_URL` - backend URL

## Run Locally

### Start the Backend

```bash
cd back-end
npm run dev
```

### Start the Frontend

```bash
cd front-end
npm start
```

### Local URLs

- Frontend: `http://localhost:3000`
- Backend health check: `http://localhost:8000/health`

## Production Build

```bash
cd front-end
npm run build
```

## Deployment

TripUnite is structured for Vercel deployment as separate frontend and backend projects.

### Frontend Deployment

- Root directory: `front-end`
- Build command: `npm run build`
- Output directory: `build`
- Set `REACT_APP_API_BASE_URL` to your deployed backend URL

### Backend Deployment

- Root directory: `back-end`
- Serverless entry: `api/index.js`
- Copy the backend environment values into deployment settings
- Set `CORS_ORIGIN` to your frontend deployment URL

### After Deployment

Verify these flows first:

- Backend health endpoint responds correctly
- Login and signup work end to end
- Trip creation and joining work properly
- Chatbot and showcase pages load without issues

## Notes on the Showcase Page

The Showcase page was added to make the project easier to present as a portfolio piece. It includes:

- Feature highlights
- Clearer product messaging
- Stronger call-to-action buttons
- Sample testimonial sections for presentation purposes

The testimonials are placeholder presentation copy. Replace them with real verified quotes before treating them as authentic endorsements.

## Scripts

### Frontend

- `npm run dev` - start the React development server
- `npm start` - start the React development server
- `npm run build` - create a production build
- `npm test` - run the test runner

### Backend

- `npm run dev` - start the backend with nodemon
- `npm start` - start the backend with node
- `npm run smoke:test` - run the smoke test script

## Why This Project Feels Complete

TripUnite combines product thinking, interface polish, backend structure, AI support, and a showcase flow that makes the application easier to explain to recruiters, collaborators, or potential clients.

It is now positioned less like a rough demo and more like a real product story with a clear vision, visible features, and a better presentation layer.
