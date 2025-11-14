import { MarketplaceNavbar } from '@/app/components/layout/MarketplaceNavbar'

export default function MarketplacePage() {
  return (
    <div 
      className="min-h-screen w-full"
      style={{ 
        background: '#000000'
      }}
    >
      <MarketplaceNavbar />
      {/* Marketplace content will go here */}
    </div>
  )
}

