# Mastero Konnect - Architecture Overview

## Project Structure

This codebase follows a feature-based architecture with clear separation of concerns:

```
src/
├── app/                     # Application routing and core layout
│   ├── App.tsx             # Main app component with routing
│   └── pages/              # Global pages (404, etc.)
├── components/
│   ├── ui/                 # Reusable UI components (shadcn/ui)
│   ├── layout/             # Layout components (Navigation, Footer)
│   └── forms/              # Reusable form components
├── features/               # Feature-based modules
│   ├── auth/               # Authentication feature
│   │   ├── pages/          # Auth-related pages
│   │   └── styles/         # Auth-specific styles
│   ├── landing/            # Landing page feature
│   │   ├── pages/          # Landing page
│   │   └── components/     # Landing page components
│   ├── profile/            # Profile building feature
│   ├── assessment/         # AI assessment feature
│   └── mentors/            # Mentor-related features
├── hooks/                  # Custom React hooks
├── lib/                    # Utilities and configurations
│   ├── utils.ts           # General utilities
│   └── constants.ts       # Application constants
├── services/               # API services and external integrations
├── styles/                 # Global styles and themes
├── types/                  # TypeScript type definitions
└── assets/                 # Static assets (images, icons, fonts)
```

## Key Principles

### 1. Feature-Based Organization
- Each feature is self-contained with its own components, pages, and logic
- Promotes code reusability and maintainability
- Makes it easy to locate and modify feature-specific code

### 2. Clear Separation of Concerns
- **Components**: Reusable UI components
- **Features**: Business logic grouped by functionality
- **Services**: External API calls and data management
- **Types**: TypeScript definitions for type safety
- **Hooks**: Custom React hooks for shared logic

### 3. Consistent Naming Conventions
- **Files**: PascalCase for components (e.g., `UserProfile.tsx`)
- **Folders**: lowercase with hyphens (e.g., `user-profile/`)
- **Variables**: camelCase
- **Constants**: UPPER_SNAKE_CASE

### 4. Import Path Conventions
- Use absolute imports with `@/` prefix for src/ directory
- Feature components import from their own feature directory
- Shared components import from `@/components/`
- Types import from `@/types/`

## Development Guidelines

### Adding New Features
1. Create a new folder under `src/features/`
2. Include `pages/`, `components/`, and any feature-specific folders
3. Export main components from an `index.ts` file
4. Add route to `src/app/App.tsx`

### Adding New Components
- UI components go in `src/components/ui/`
- Layout components go in `src/components/layout/`
- Feature-specific components go in their respective feature folder

### Type Definitions
- User-related types: `src/types/user.ts`
- API-related types: `src/types/common.ts`
- Feature-specific types: within the feature folder

### Styling
- Global styles: `src/styles/globals.css`
- Component styles: Use Tailwind CSS classes
- Feature-specific styles: within the feature folder

## Benefits of This Structure

1. **Scalability**: Easy to add new features without affecting existing code
2. **Maintainability**: Clear organization makes code easy to find and modify
3. **Team Collaboration**: Multiple developers can work on different features without conflicts
4. **Code Reusability**: Shared components and utilities are easily accessible
5. **Type Safety**: Comprehensive TypeScript types prevent runtime errors