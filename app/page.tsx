import { Navbar } from '@/app/components/layout/Navbar'
import { Hero } from '@/app/components/layout/Hero'
import { Features } from '@/app/components/layout/Features'
import { HowItWorks } from '@/app/components/layout/HowItWorks'
import { MarketplacePreview } from '@/app/components/layout/MarketplacePreview'
import { DatasetValidation } from '@/app/components/layout/DatasetValidation'
import { UseCases } from '@/app/components/layout/UseCases'
import { Footer } from '@/app/components/layout/Footer'

export default function Home() {
  return (
    <div 
      className="min-h-screen w-full"
      style={{ 
        background: 'linear-gradient(180deg, #0A1A2E 0%, #162B45 100%)'
      }}
    >
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <MarketplacePreview />
      <DatasetValidation />
      <UseCases />
      <Footer />
    </div>
  )
}
  