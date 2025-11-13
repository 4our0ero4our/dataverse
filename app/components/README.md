# Components

This directory contains all React components for the application.

## Structure

- **ui/**: Reusable UI components (buttons, inputs, modals, etc.)
- **web3/**: Web3-specific components (wallet connectors, transaction displays, etc.)
- **layout/**: Layout components (header, footer, sidebar, etc.)

## Usage

Import components using the path alias:
```typescript
import { Button } from '@/app/components/ui/Button'
import { WalletConnector } from '@/app/components/web3/WalletConnector'
```

