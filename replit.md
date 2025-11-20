# Overview

This is a legal tech marketing website that promotes an AI guide for lawyers. The project consists of two main pages: a landing page for an AI manual called "IA para Advogados: Manual de Campo" and a masterclass registration page for "Advocacia Exponencial". The website targets Brazilian lawyers and focuses on helping them leverage AI tools to improve their legal practice efficiency.

## Recent Changes (November 2025)
- **New Landing Page (Nov 20)**: Completely replaced index.html with new "Oficina Prática de IA para Advocacia - OAB Joinville" design
- **OAB Branding (Nov 20)**: Updated to include official OAB logo and Comissão de Direito Digital branding
- **Event Date Update (Nov 20)**: Changed workshop dates to December 3-4, 2025 (two days, 19h)
- **Project Cleanup (Nov 20)**: Removed ~35 unused files (videos, duplicate images, text/PDF files) from attached_assets/
- **Image Organization (Nov 20)**: Moved active images to public/ directory with clean naming:
  - logo-oab.png (OAB official logo)
  - paola-carelli.jpeg (instructor photo)
  - carlos-vailati.png (testimonial photo)
  - carlos-linzmeyer.jpeg (instructor photo)
- **File Structure Cleanup (Nov 20)**: Deleted obsolete images from public/ (old carlos/paola photos, unused logos)
- **Backup Removal (Nov 20)**: Removed index-backup.html; kept masterclass.html for /masterclass route

## Previous Changes (October 2025)
- **Admin Panel (Oct 15)**: Created admin dashboard at `/admin` to view and export lead registrations with CSV export functionality (password: admin123)
- **Event Date Update (Oct 13)**: Changed workshop date from October 16 to October 29, 2025 at 7:00 PM
- **Paola Photo Update (Oct 13)**: Replaced instructor photo with new image
- **Messaging Update (Oct 3)**: Removed all "grupo VIP" references; changed to "cadastrar WhatsApp para receber lembretes da live"
- **Instructors Section (Oct 3)**: Added complete instructor bios for Carlos Linzmeyer, Paola Carelli, and Diego Sommer
- **Testimonials (Oct 3)**: Added testimonials from Carlos Vailati and Claudinei (satisfied customers)
- **Workshop Landing Page**: Homepage with template "O Jeito Certo de Usar IA na Advocacia"
- **Phone Number Capture**: Added optional phone field to lead capture form for follow-up calls
- **Database Enhancement**: Updated leads table schema to include telefone field (varchar 50, optional)
- **Workshop Registration**: Created countdown timer with live countdown functionality
- **Lead Capture System**: Implemented full database integration for lead storage with PostgreSQL
- **API Integration**: Enhanced `/api/leads` endpoint to accept and store phone numbers with proper validation

The site uses a modern, dark-themed design with red accents to create a professional and sophisticated appearance. It includes lead capture functionality through forms that collect user names, emails, and optional WhatsApp numbers for workshop reminders (not for a VIP group - messaging focuses on live event registration).

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
- **API Design**: RESTful endpoints for lead management (`POST /api/leads` for creating, `GET /api/leads` for retrieving all leads)
- **Admin Interface**: Password-protected admin panel at `/admin` for managing registrations and exporting data
- **Error Handling**: Basic validation and error responses for API endpoints

## Data Storage
- **Database**: PostgreSQL configured through Drizzle ORM
- **Schema Management**: TypeScript schema definitions in `/shared/schema.ts`
- **Migration Strategy**: Drizzle Kit for database migrations and schema management
- **Lead Storage**: Simple table structure for capturing user names and emails with timestamps

## Authentication & Authorization
- **No Authentication**: Public-facing marketing site with no user authentication for lead capture
- **Admin Panel**: Simple password protection (client-side) for admin dashboard access
- **Data Collection**: Open lead capture forms without access controls
- **Security**: Basic input validation on form submissions
- **Note**: Admin password is basic protection; consider implementing proper server-side authentication for production use

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