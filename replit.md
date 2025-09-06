# Overview

This is a legal tech marketing website that promotes an AI guide for lawyers. The project consists of two main pages: a landing page for an AI manual called "IA para Advogados: Manual de Campo" and a masterclass registration page for "Advocacia Exponencial". The website targets Brazilian lawyers and focuses on helping them leverage AI tools to improve their legal practice efficiency.

## Recent Changes (September 2025)
- **NEW**: Created a high-converting lead capture page for the "Masterclass Advocacia Exponencial" launch at `/masterclass`
- **Lead Capture System**: Implemented full database integration for lead storage with PostgreSQL
- **Erico Rocha Style**: Designed the page following proven conversion optimization principles
- **Database Schema**: Set up leads table to capture names, emails, and timestamps for the masterclass
- **API Integration**: Added `/api/leads` endpoint for form submissions with proper validation

The site uses a modern, dark-themed design with red accents to create a professional and sophisticated appearance. It includes lead capture functionality through forms that collect user names and emails for marketing purposes.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Static Site Structure**: Built as a traditional multi-page website using HTML, CSS, and vanilla JavaScript
- **Styling Framework**: Tailwind CSS with custom CSS variables for consistent theming
- **Responsive Design**: Mobile-first approach with Tailwind's responsive utilities
- **Font System**: Google Fonts integration (Inter and Playfair Display)
- **Asset Management**: Static assets organized in `/public/`, `/pages/`, and `/attached_assets/` directories

## Backend Architecture
- **Web Server**: Express.js serving static files and handling API endpoints
- **Build Process**: Dynamic Tailwind CSS compilation triggered on page requests
- **API Design**: RESTful endpoint (`POST /api/leads`) for lead capture functionality
- **Error Handling**: Basic validation and error responses for API endpoints

## Data Storage
- **Database**: PostgreSQL configured through Drizzle ORM
- **Schema Management**: TypeScript schema definitions in `/shared/schema.ts`
- **Migration Strategy**: Drizzle Kit for database migrations and schema management
- **Lead Storage**: Simple table structure for capturing user names and emails with timestamps

## Authentication & Authorization
- **No Authentication**: Public-facing marketing site with no user authentication
- **Data Collection**: Open lead capture forms without access controls
- **Security**: Basic input validation on form submissions

# External Dependencies

## Database Services
- **PostgreSQL**: Primary database for lead storage
- **Drizzle ORM**: Database toolkit and query builder
- **Drizzle Kit**: Migration and schema management tool

## Development & Build Tools
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Express.js**: Web application framework for Node.js
- **Google Fonts**: External font service for Inter and Playfair Display fonts

## Frontend Libraries
- **Vanilla JavaScript**: No frontend framework dependencies
- **CSS Variables**: Custom theming system for consistent design tokens

## Content Management
- **Static Content**: Marketing copy and content stored in attached text files
- **Image Assets**: Local storage in public directory
- **Video Content**: References to video files for background elements

## Environment Configuration
- **Environment Variables**: Database URL configuration through `DATABASE_URL`
- **Node.js Runtime**: Server-side JavaScript execution environment