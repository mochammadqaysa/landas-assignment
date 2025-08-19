# LANDAS E-commerce Application

LANDAS is a React-based SPA application that sells Performance-Ready Apparel. It has been developed by applying Feature-Based Architecture and Atomic Design Pattern.

## 🚀 Tech Stack

### Required Dependencies
- **React** v19.1.0 - UI Library
- **React DOM** v19.1.0 - DOM Rendering
- **React Router DOM** v7.6.3 - Client-side Routing
- **Tailwind CSS** v4.1.11 - Utility-first CSS Framework
- **Zustand** v5.0.6 - Lightweight State Management Library
- **clsx** v2.1.1 - Conditional Class Name Processing
- **tailwind-merge** v3.3.1 - Tailwind Class Merging
- **Pretendard** v1.3.9 - Korean-optimized Font

### Optional Dependencies (With Justification)
- **axios** v1.10.0 - HTTP Client (Preparation for future API integration)
- **react-spinners** v0.17.0 - Loading Spinner Components (UX Enhancement)
- **react-toastify** v11.0.5 - Toast Notifications (User Feedback)
- **tailwind-scrollbar** v4.0.2 - Custom Scrollbar (Design Consistency)

## 📁 Project Structure

```
src/
├── features/              # Business Feature Modules (Feature-Based Architecture)
│   └── domain/            # Domain-specific Features (e.g., memberManage, serviceManage)
│       ├── components/    # Components (Atomic Design)
│       │   ├── atoms/     # Basic Building Blocks
│       │   ├── molecules/ # Atom Combinations
│       │   └── organisms/ # Molecule Combinations
│       ├── hooks/         # Business Logic Custom Hooks
│       ├── types/         # Domain-specific Type Definitions
│       └── utils/         # Domain-specific Utilities
├── pages/                 # Page Components (Routing Targets)
├── routes/                # Routing Configuration
│   ├── Router.tsx         # Main Router Component
│   └── route.ts           # Route Path Constants
└── shared/                # Shared Modules (Cross-feature Reuse)
    ├── components/        # Reusable Components
    │   ├── atoms/         # Basic Building Blocks
    │   ├── molecules/     # Atom Combinations
    │   └── organisms/     # Molecule Combinations
    ├── constants/         # Constant Definitions
    ├── hooks/             # Custom Hooks
    ├── layouts/           # Layout Components
    ├── lib/               # External Library Configurations
    ├── stores/            # Global State Management (Zustand)
    ├── styles/            # Style Definitions
    ├── types/             # Common Type Definitions
    ├── utils/             # Utility Functions
    └── wrappers/          # Wrapper Components
```

## 🎨 Design System

### Atomic Design Pattern Implementation
- **Atoms**: BasicButton, BasicInput, BasicText and other basic elements
- **Molecules**: FormInput, ProductCard and other Atom combinations
- **Organisms**: Header, Footer and other complex UI blocks

### Component Design Principles
- Required props are defined without default values
- Optional props are provided with default values
- Event handlers are named in `on[Action]` format
- Styling is unified through `className` prop

## 🔧 Development Environment Setup

### Installation and Execution
```bash
# Install dependencies
yarn install

# Run development server
yarn dev

# Build
yarn build

# Preview
yarn preview

# Lint check
yarn lint

# Code formatting
yarn format
```

## 📱 Key Features

### Currently Implemented Features
1. **User Authentication**
   - Login/Sign-up pages
   - Authentication state management using Zustand
   - Form validation

2. **Main Page**
   - Hero section
   - Product grid
   - Responsive design

3. **Common Components**
   - Reusable basic components
   - Consistent design system

### Planned Future Features
- Product detail pages
- Shopping cart functionality
- Order/Payment system
- User profile management

## 🎯 Development Principles

### Coding Conventions
- **Components**: PascalCase (e.g., BasicButton, MemberTable)
- **File Names**: 
  - Components: PascalCase (e.g., BasicButton.tsx)
  - Hooks: camelCase (e.g., useMemberList.ts)
- **Folder Names**: camelCase (e.g., memberManage)
- **Variables/Functions**: camelCase (e.g., formData, handleSubmit)
- **Constants**: UPPER_SNAKE_CASE (e.g., PASSWORD_REGEX)

### TypeScript Rules
- Use `.tsx` extension for all components
- Use `.ts` extension for all hooks
- Define types in separate `types.ts` files
- Props interfaces follow `ComponentNameProps` format

## 📊 Performance Optimization

- **Bundle Splitting**: Ready for lazy loading with React Router
- **State Management**: Lightweight state management with Zustand
- **Styling**: Build-time optimization with Tailwind CSS
- **Images**: Ready for responsive images and lazy loading

## 🛡️ Constraints

- **Framework**: Use React + Vite SPA only (No SSR frameworks like Next.js)
- **UI Libraries**: Prohibited use of Material-UI, Ant Design, shadcn/ui, etc.
- **Styling**: No inline styles (Use Tailwind CSS classes only)
- **Data**: Use static dummy data (No server integration)

## 📝 Additional Considerations

### Additional Items for Performance Enhancement
- Memoization (React.memo, useMemo, useCallback)
- Code splitting (React.lazy, Suspense)
- Skeleton loading
- Dark mode
- API layer (react-query, etc.)

### Accessibility Considerations
- Use semantic HTML
- Apply ARIA attributes
- Support keyboard navigation
- Optimize color contrast

## 📞 Contact

If you have any inquiries or improvement suggestions regarding this project, please feel free to contact us at any time.