# Layout Components

Layout components define the **structural layout** of your pages. They are typically used once per page or section and organize the overall page structure.

## Characteristics

- **Structural**: Define page/section structure
- **Used once**: Typically rendered once per page
- **Container-like**: Often wrap other components
- **Page-specific**: May vary by route (e.g., dashboard layout vs landing layout)

## Examples

### Navbar / Header
```typescript
// app/components/layout/Navbar.tsx
// Part of the page structure, appears at the top
```

### Footer
```typescript
// app/components/layout/Footer.tsx
// Part of the page structure, appears at the bottom
```

### Sidebar
```typescript
// app/components/layout/Sidebar.tsx
// Part of the page structure, appears on the side
```

### MainLayout / PageLayout
```typescript
// app/components/layout/MainLayout.tsx
// Wraps entire pages with header, footer, etc.
```

### Container / PageWrapper
```typescript
// app/components/layout/Container.tsx
// Defines max-width and padding for content areas
```

### DashboardLayout
```typescript
// app/components/layout/DashboardLayout.tsx
// Specific layout for dashboard pages (with sidebar, header)
```

### AuthLayout
```typescript
// app/components/layout/AuthLayout.tsx
// Specific layout for auth pages (centered, minimal)
```

## Usage

```typescript
// In a page or layout file
import { Navbar } from '@/app/components/layout/Navbar'
import { Footer } from '@/app/components/layout/Footer'
import { MainLayout } from '@/app/components/layout/MainLayout'

export default function Page() {
  return (
    <MainLayout>
      <Navbar />
      {/* page content */}
      <Footer />
    </MainLayout>
  )
}
```

