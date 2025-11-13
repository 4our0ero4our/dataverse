'use client'

import CryptographicIntegrityIcon from '../../../public/images/cryptographic_integrity_image.png'
import DecentralizedStorageIcon from '../../../public/images/decentralized_storage_image.png'
import CommunityValidationIcon from '../../../public/images/community_validation_image.png'
import Image from 'next/image'

interface ValidationStep {
  id: number
  icon: string
  title: string
  description: string
}

const validationSteps: ValidationStep[] = [
  {
    id: 1,
    icon: CryptographicIntegrityIcon.src,
    title: 'Cryptographic Integrity',
    description: 'Every dataset is hashed and stored with tamper-proof verification to ensure authenticity',
  },
  {
    id: 2,
    icon: DecentralizedStorageIcon.src,
    title: 'Decentralized Storage',
    description: 'Data is stored across multiple secure, decentralized locations for reliability.',
  },
  {
    id: 3,
    icon: CommunityValidationIcon.src,
    title: 'Community Validation',
    description: 'Trusted creators and buyers review and rate datasets, creating transparent marketplace.',
  },
]

export function DatasetValidation() {
  return (
    <section 
      className="w-full relative"
      style={{
        background: '#0A1A2E', // Deep navy blue background
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
              fontSize: 'clamp(28px, 4vw, 48px)',
              lineHeight: '1.2',
              letterSpacing: '-0.02em',
            }}
          >
            A secure, transparent way to validate every dataset.
          </h2>
          <p 
            className="text-white max-w-4xl mx-auto"
            style={{
              fontFamily: 'system-ui, -apple-system, sans-serif',
              fontSize: 'clamp(16px, 1.8vw, 20px)',
              color: 'rgba(255, 255, 255, 0.9)',
              lineHeight: '1.6',
            }}
          >
            DataVerse uses cryptographic verification, decentralized storage, and community trust to ensure quality and integrity.
          </p>
        </div>

        {/* Cards - Stacked Vertically, Centered */}
        <div className="flex flex-col items-center gap-6 md:gap-8 max-w-2xl mx-auto">
          {validationSteps.map((step) => (
            <div
              key={step.id}
              className="rounded-xl w-full transition-all duration-300"
              style={{
                background: '#1d2c3f',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                padding: '32px',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: '24px',
              }}
            >
              {/* Icon in Circular Outline */}
              <div 
                className="flex-shrink-0"
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(0, 0, 0, 0.2)',
                  border: '1px solid #39C6F4',
                }}
              >
                <div style={{ color: '#39C6F4', display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
                  <Image src={step.icon} alt={step.title} width={32} height={32} className="object-contain" />
                </div>
              </div>

              {/* Text Content */}
              <div className="flex-1">
                <h3 
                  className="font-bold text-white mb-2"
                  style={{
                    fontFamily: 'system-ui, -apple-system, sans-serif',
                    fontSize: 'clamp(18px, 2vw, 22px)',
                    lineHeight: '1.3',
                  }}
                >
                  {step.title}
                </h3>
                <p 
                  style={{
                    fontFamily: 'system-ui, -apple-system, sans-serif',
                    fontSize: 'clamp(14px, 1.5vw, 16px)',
                    lineHeight: '1.6',
                    color: 'rgba(255, 255, 255, 0.7)',
                  }}
                >
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
