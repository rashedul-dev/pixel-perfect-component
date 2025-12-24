# React Vite + shadcn/ui Project

A modern web application built with **React**, **Vite**, **TypeScript**, and **shadcn/ui** components styled with **Tailwind CSS**.

## Quick Start

### Prerequisites

- Node.js 16+
- npm

### Development

```sh
# Step 1: Clone the repository
git clone https://github.com/rashedul-dev/pixel-perfect-component

# Step 2: Navigate to the project directory
cd pixel-perfect-component

# Step 3: Install dependencies
npm install

# Step 4: Start the development server
npm run dev
```

The development server will start at `http://localhost:5000`.

## Available Scripts

- `npm run dev` - Start the development server with hot module reloading
- `npm run build` - Create an optimized production build
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## Technologies Used

- **Vite** - Next generation frontend tooling
- **React** - UI library
- **TypeScript** - Type-safe JavaScript
- **shadcn/ui** - High-quality, unstyled component library
- **Tailwind CSS** - Utility-first CSS framework
- **React Hook Form** - Performant form validation
- **React Router** - Client-side routing
- **React Query** - Server state management

## Project Structure

```
├── src/
│   ├── components/        # Reusable React components
│   │   └── ui/           # shadcn/ui components
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── pages/            # Page components
│   ├── App.tsx           # Main app component
│   └── main.tsx          # Entry point
├── public/               # Static assets
├── vite.config.ts        # Vite configuration
├── tailwind.config.ts    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## Deployment

### Deploy to Vercel

This project includes a `vercel.json` configuration file for easy deployment to Vercel.

1. Push your code to a Git repository (GitHub, GitLab, etc.)
2. Connect your Vercel account at [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect the configuration and deploy

**Manual Deployment:**

```sh
npm install -g vercel
vercel
```

### Deploy to Other Platforms

The build output is in the `dist/` directory. You can deploy it to any static hosting service:

- Netlify
- GitHub Pages
- Firebase Hosting
- AWS S3 + CloudFront
- Any other static host

## Development Guidelines

- Components are located in `src/components/`
- shadcn/ui components are pre-configured and ready to use
- Use the `@` alias to import from the src directory
- Follow the existing code style and TypeScript conventions

## License

This project is open source and available under the MIT License.
# pixel-perfect-component
