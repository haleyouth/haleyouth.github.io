# Haleyouth Foundation Website

## Overview

The Haleyouth Foundation website is a single-page React application built to showcase the foundation's mission of youth empowerment and community transformation. The site serves as a digital platform to attract community engagement, showcase programs, and facilitate involvement opportunities for visitors.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query (React Query) for server state management
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **Development**: TSX for TypeScript execution in development
- **Production Build**: ESBuild for server bundling

### Component System
- **UI Library**: shadcn/ui components with Radix UI primitives
- **Design System**: New York style variant with neutral base colors
- **Icons**: Lucide React for consistent iconography
- **Form Handling**: React Hook Form with Zod validation resolvers

## Key Components

### Client-Side Components
1. **Home Page** (`client/src/pages/home.tsx`)
   - Hero section with foundation messaging
   - Mission and vision display
   - Programs showcase with 14 focus areas
   - Impact statistics with animated counters
   - Get involved call-to-action sections
   - Responsive navigation with mobile menu

2. **UI Components** (`client/src/components/ui/`)
   - Complete shadcn/ui component library
   - Accordion, cards, buttons, dialogs, forms
   - Navigation components, tooltips, toasts
   - Mobile-responsive design patterns

### Server-Side Components
1. **Express Server** (`server/index.ts`)
   - Development/production environment handling
   - API request monitoring and logging
   - Error handling middleware
   - Vite integration for development

2. **Storage Interface** (`server/storage.ts`)
   - Abstract storage interface design
   - In-memory storage implementation
   - User management functionality
   - Prepared for database integration

## Data Flow

### Client Data Management
- TanStack Query for API state management
- Custom query functions with error handling
- Credential-based request handling
- Optimistic updates and caching strategies

### Server Request Processing
- RESTful API endpoint structure (`/api` prefix)
- Request logging with timing metrics
- JSON response formatting
- Error propagation with status codes

### Database Integration (Prepared)
- Drizzle ORM configuration for PostgreSQL
- Schema definitions in shared directory
- Migration support via Drizzle Kit
- Connection via Neon Database serverless

## External Dependencies

### Core Framework Dependencies
- React ecosystem (React, React DOM)
- TypeScript for type safety
- Vite for development tooling
- Express.js for server functionality

### UI and Styling
- Tailwind CSS for utility-first styling
- Radix UI for accessible component primitives
- shadcn/ui for pre-built components
- Lucide React for icons
- Class Variance Authority for component variants

### Development Tools
- TSX for TypeScript execution
- ESBuild for production bundling
- PostCSS with Autoprefixer
- Replit-specific development plugins

### Database and Validation
- Drizzle ORM with PostgreSQL dialect
- Zod for schema validation
- @neondatabase/serverless for database connection

## Deployment Strategy

### Development Environment
- Vite dev server with HMR (Hot Module Replacement)
- Express server with automatic TypeScript compilation
- File watching and automatic reload
- Source map support for debugging

### Production Build Process
1. **Frontend Build**: Vite builds client code to `dist/public`
2. **Backend Build**: ESBuild bundles server code to `dist/index.js`
3. **Static Serving**: Express serves built frontend files
4. **Environment Variables**: `NODE_ENV` for environment detection

### Build Commands
- `npm run dev`: Development with TSX and Vite
- `npm run build`: Production build for both client and server
- `npm start`: Production server startup
- `npm run db:push`: Database schema deployment

## Changelog

- July 02, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.