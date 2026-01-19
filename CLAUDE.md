# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build and Development Commands

- `pnpm dev` - Start development server (runs on port 3001)
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm pretty` - Format code with Prettier

## Architecture

This is a React portfolio website built with Vite and styled-components.

### Tech Stack
- React 18 with react-router-dom for routing
- Vite for build tooling
- styled-components for CSS-in-JS styling
- Matter.js for physics-based animations (polygon pond feature)
- Fluent UI React Icons

### Routing Structure
Three routes defined in [App.jsx](src/App.jsx):
- `/` - Home page with sections: Home, About, Projects, Connect
- `/pond` - Interactive polygon pond page
- `/inProgress` - Placeholder page

### Key Patterns

**Page Structure**: Pages are in `src/pages/`. The home page uses section-based layout with refs for scroll navigation, passing refs to Header for nav links.

**Styling**: Global constants (colors, breakpoints) are in [constants.jsx](src/constants.jsx). The mobile breakpoint is 824px.

**Polygon Pond**: An interactive Matter.js physics simulation in `src/components/polygonPond/`. Uses SVG star shapes as physics bodies. The `Scene` component handles the Matter.js engine setup.

**Component Organization**: Reusable components are in `src/components/`, page-specific sections are nested under their page directories (e.g., `src/pages/home/homePageSections/`).
