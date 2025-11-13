# API Routes

This directory contains Next.js API routes (backend endpoints).

## Structure

- **auth/**: Authentication endpoints
- **users/**: User management endpoints
- **transactions/**: Transaction-related endpoints
- **web3/**: Web3-specific API endpoints
- **wallet/**: Wallet-related endpoints

## Usage

API routes are automatically available at `/api/{route-name}`. For example:
- `/api/auth/login` → `app/api/auth/login/route.ts`
- `/api/users/profile` → `app/api/users/profile/route.ts`

## Example

```typescript
// app/api/auth/login/route.ts
export async function POST(request: Request) {
  // Handle POST request
}
```

