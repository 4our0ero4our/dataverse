import { Navbar } from '@/app/components/layout/Navbar'
import { Hero } from '@/app/components/layout/Hero'
import { Features } from '@/app/components/layout/Features'

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
    </div>
  )
}
  