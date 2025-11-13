# Getting Started

This guide will help you set up and start developing the Dataverse project.

## Prerequisites

- Node.js 18+ and npm
- TypeScript knowledge
- Basic understanding of Web3 and blockchain concepts
- Familiarity with Next.js and React

## Installation

1. Install dependencies:
```bash
npm install
```

2. Install Web3 dependencies:
```bash
npm install @mysten/sui.js @mysten/wallet-kit
```

3. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your configuration
```

## Project Structure

See [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) for detailed folder structure.

## Key Directories

### Frontend
- `app/components/` - React components
- `app/hooks/` - Custom React hooks
- `app/utils/` - Utility functions
- `app/types/` - TypeScript types

### Backend
- `app/api/` - API routes (Next.js API routes)
- `app/services/` - Business logic
- `app/models/` - Data models
- `app/db/` - Database configuration

### Web3
- `app/lib/sui/` - Sui SDK integration
- `app/lib/walrus/` - Walrus wallet integration
- `app/lib/contracts/` - Smart contract interactions
- `app/components/web3/` - Web3 UI components

## Development

1. Start the development server:
```bash
npm run dev
```

2. Open [http://localhost:3000](http://localhost:3000) in your browser

## Next Steps

1. Set up Sui SDK client in `app/lib/sui/`
2. Integrate Walrus wallet in `app/lib/walrus/`
3. Create wallet connection components in `app/components/web3/`
4. Build the landing page in `app/page.tsx`
5. Set up authentication if needed
6. Configure database if using one

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Sui Documentation](https://docs.sui.io/)
- [Walrus Wallet](https://walrus.sui.io/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

