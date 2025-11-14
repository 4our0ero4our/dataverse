'use client'

import Image from 'next/image'
import ShieldIcon from '../../../public/images/Shield.png'
import WalletIcon from '../../../public/images/Wallet.png'
import GlobeIcon from '../../../public/images/Globe Africa.png'
import BrainIcon from '../../../public/images/Brain.png'

interface Feature {
  id: number
  icon: string
  title: string
  description: string
}

const features: Feature[] = [
  {
    id: 1,
    icon: ShieldIcon.src,
    title: 'Verified Data',
    description: 'Every dataset is validated and timestamped on the blockchain, ensuring trust and transparency.',
  },
  {
    id: 2,
    icon: WalletIcon.src,
    title: 'Secure Payments',
    description: 'Smart contracts handle transactions automatically, guaranteeing safe and instant payments.',
  },
  {
    id: 3,
    icon: GlobeIcon.src,
    title: 'Global Marketplace',
    description: 'Discover open and premium datasets from creators around the world — all verified and ready to use.',
  },
  {
    id: 4,
    icon: BrainIcon.src,
    title: 'AI Ready',
    description: 'All datasets follow consistent formats, making them perfect for AI training and analytics.',
  },
]

export function WhyDataVerse() {
  return (
    <section 
      className="w-full"
      style={{
        background: '#000000',
        paddingTop: 'clamp(60px, 8vw, 120px)',
        paddingBottom: 'clamp(60px, 8vw, 120px)',
      }}
    >
      <div 
        className="mx-auto"
        style={{
          maxWidth: '1440px',
          paddingLeft: 'clamp(24px, 5vw, 80px)',
          paddingRight: 'clamp(24px, 5vw, 80px)',
        }}
      >
        {/* Heading Section */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 
            className="font-bold text-white mb-4 md:mb-6"
            style={{
              fontFamily: 'system-ui, -apple-system, sans-serif',
              fontSize: 'clamp(32px, 4vw, 48px)',
              lineHeight: '1.2',
              letterSpacing: '-0.02em',
            }}
          >
            Why DataVerse?
          </h2>
          <p 
            className="max-w-4xl mx-auto"
            style={{
              fontFamily: 'system-ui, -apple-system, sans-serif',
              fontSize: 'clamp(16px, 2vw, 20px)',
              color: 'rgba(255, 255, 255, 0.8)',
              lineHeight: '1.6',
            }}
          >
            Every dataset on DataVerse is verified, traceable, and protected on-chain — ensuring transparency, authenticity, and fair value for every contributor.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="rounded-xl transition-all duration-300 hover:scale-[1.02]"
              style={{
                background: '#1a1a1a',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: 'clamp(24px, 3vw, 32px)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              {/* Icon */}
              <div 
                className="mb-6"
                style={{
                  width: 'clamp(40px, 6vw, 60px)',
                  height: 'clamp(40px, 6vw, 60px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#404040',
                  borderRadius: '50%',
                  padding: '10px',
                  marginBottom: '10px',
                }}
              >
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </div>

              {/* Title */}
              <h3 
                className="font-bold text-white mb-3 md:mb-4"
                style={{
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  fontSize: 'clamp(18px, 2.2vw, 22px)',
                  lineHeight: '1.3',
                }}
              >
                {feature.title}
              </h3>

              {/* Description */}
              <p 
                style={{
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  fontSize: 'clamp(14px, 1.6vw, 16px)',
                  lineHeight: '1.6',
                  color: 'rgba(255, 255, 255, 0.7)',
                }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button
            className="px-8 py-4 rounded-full font-medium text-black transition-all duration-300"
            style={{
              background: 'linear-gradient(90deg, #FFFFFF 0%, #808080 100%)',
              border: 'none',
              cursor: 'pointer',
              fontSize: 'clamp(16px, 1.8vw, 18px)',
              fontFamily: 'system-ui, -apple-system, sans-serif',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'linear-gradient(90deg, #E5E5E5 0%, #666666 100%)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'linear-gradient(90deg, #FFFFFF 0%, #808080 100%)'
            }}
          >
            Start Selling
          </button>
        </div>
      </div>
    </section>
  )
}

