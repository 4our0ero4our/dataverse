# Project Structure

This document outlines the folder structure for the Dataverse fullstack Next.js/TypeScript Web3 project.

## Overview

This is a fullstack Next.js application with TypeScript, integrating Web3 technologies including Sui SDK and Walrus wallet.

## Directory Structure

```
dataverse/
├── app/                          # Next.js App Router
│   ├── api/                      # API Routes (Backend)
│   │   ├── auth/                 # Authentication endpoints
│   │   ├── users/                # User management endpoints
│   │   ├── transactions/         # Transaction endpoints
│   │   ├── web3/                 # Web3-specific endpoints
│   │   └── wallet/               # Wallet-related endpoints
│   │
│   ├── components/               # React Components
│   │   ├── ui/                   # Reusable UI components
│   │   ├── web3/                 # Web3-specific components
│   │   └── layout/               # Layout components
│   │
│   ├── hooks/                    # Custom React Hooks
│   │   └── web3/                 # Web3-specific hooks
│   │
│   ├── lib/                      # Libraries and Utilities
│   │   ├── web3/                 # Web3 utilities
│   │   ├── sui/                  # Sui SDK integration
│   │   ├── walrus/               # Walrus wallet integration
│   │   ├── api/                  # API client utilities
│   │   ├── contracts/            # Smart contract interactions
│   │   ├── wallet/               # Wallet management
│   │   ├── database/             # Database utilities
│   │   └── validations/          # Validation schemas
│   │
│   ├── utils/                    # Utility Functions
│   │   └── web3/                 # Web3 utility functions
│   │
│   ├── types/                    # TypeScript Types
│   │   └── web3/                 # Web3-related types
│   │
│   ├── services/                 # Service Layer
│   │   ├── api/                  # API services
│   │   └── web3/                 # Web3 services
│   │
│   ├── models/                   # Data Models
│   ├── db/                       # Database
│   │   ├── migrations/           # Database migrations
│   │   └── seeds/                # Database seeds
│   │
│   ├── middleware/               # Middleware
│   │   ├── api/                  # API middleware
│   │   └── web3/                 # Web3 middleware
│   │
│   ├── context/                  # React Context Providers
│   ├── store/                    # State Management
│   ├── constants/                # Constants
│   ├── config/                   # Configuration
│   ├── validators/               # Validators
│   ├── styles/                   # Additional Styles
│   │
│   ├── dashboard/                # Dashboard Pages
│   ├── wallet/                   # Wallet Pages
│   ├── transactions/             # Transaction Pages
│   ├── auth/                     # Authentication Pages
│   └── profile/                  # Profile Pages
│
├── public/                       # Static Assets
│   ├── images/                   # Images
│   ├── icons/                    # Icons
│   └── assets/                   # Other assets
│
├── scripts/                      # Build and Utility Scripts
├── docs/                         # Documentation
└── app/__tests__/                # Tests
    ├── components/               # Component tests
    ├── api/                      # API tests
    └── utils/                    # Utility tests
```

## Key Directories

### Frontend

- **app/components/**: All React components
- **app/hooks/**: Custom React hooks
- **app/utils/**: Utility functions
- **app/types/**: TypeScript type definitions
- **app/context/**: React context providers
- **app/store/**: State management (Redux/Zustand/etc.)

### Backend

- **app/api/**: Next.js API routes (backend endpoints)
- **app/services/**: Business logic and service layer
- **app/models/**: Data models
- **app/db/**: Database configuration and migrations
- **app/middleware/**: API and request middleware

### Web3

- **app/lib/sui/**: Sui SDK integration
- **app/lib/walrus/**: Walrus wallet integration
- **app/lib/contracts/**: Smart contract interactions
- **app/lib/wallet/**: Wallet management utilities
- **app/components/web3/**: Web3-specific UI components
- **app/hooks/web3/**: Web3-specific React hooks
- **app/types/web3/**: Web3-related TypeScript types

## Path Aliases

The project uses the `@/*` path alias configured in `tsconfig.json`:

```typescript
import { Button } from '@/app/components/ui/Button'
import { useWallet } from '@/app/hooks/web3/useWallet'
import { suiClient } from '@/app/lib/sui/client'
```

## Next Steps

1. Install Web3 dependencies (Sui SDK, Walrus, etc.)
2. Set up environment variables
3. Configure database connection
4. Create initial components and pages
5. Set up authentication
6. Integrate wallet connectors

