# Nextjs Document Notes

## Routing

- Layouts and pages
  - layout.js
  - nested route and nesting layout
- Linking and navigating
  - Link component
  - useRouter hook
  - redirect function
  - native History API
- Dynamic routes
  - [folderName]
  - generateStaticParams
  - catch-all segments: [...folderName]
  - optional catch-all segments: [[...folderName]]
- Route groups
  - (folderName)
  - Organize routes without affecting the URL path
  - Opting specific segments into a layout
  - Opting for loading skeletons on a specific route
  - Creating multiple root layouts
- Route Handlers
  - Route Handlers are defined in a route.js|ts file inside the app directory.
  - Route Handlers are not cached by default. (export const dynamic = 'force-static')
  - In addition to supporting the native Request and Response APIs, Next.js extends them with NextRequest and NextResponse to provide convenient helpers for advanced use cases.
- Parallel Routes
  - Parallel routes are created using named slots. Slots are defined with the @folder convention.
- Error handling
  - error boundaries
- Redirecting
- Middleware
- Internationalization

## Data Fetching

- Data Fetching and Caching
  - Fetching data on the server with the fetch API
  - Fetching data on the server with an ORM or database
  - Fetching data on the client
  - Caching data with an ORM or Database (unstable_cache)
  - Reusing data across multiple functions
  - Patterns
    - Parallel and sequential data fetching
    - Preloading Data
    - Preventing sensitive data from being exposed to the client
- Server Actions and Mutations
- Incremental Static Regeneration (ISR)

## Rendering

- Server Components
  - Static Rendering (Default)
  - Dynamic Rendering
  - Streaming
- Client Components
- Server and Client Composition Patterns
- Partial Prerendering
- Runtimes
