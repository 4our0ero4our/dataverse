'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'

interface Step {
  id: number
  number: string
  icon: string
  title: string
  description: string
}

const steps: Step[] = [
  {
    id: 1,
    number: '01',
    icon: '/images/upload_dataset_icon.png',
    title: 'Upload Your Dataset',
    description: 'Submit your dataset with clear metadata. DataVerse verifies integrity automatically.',
  },
  {
    id: 2,
    number: '02',
    icon: '/images/mint_and_secure_icon.png',
    title: 'Mint & Secure',
    description: 'Your dataset becomes a verified digital asset stored on decentralized infrastructure.',
  },
  {
    id: 3,
    number: '03',
    icon: '/images/sell_and_earn_icon.png',
    title: 'Sell & Earn',
    description: 'List your dataset on the marketplace, set your price, and start earning from buyers.',
  },
]

export function HowItWorks() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft
      const containerWidth = scrollContainerRef.current.offsetWidth
      // Card width is calc(100vw - 80px) with -60px overlap, so effective scroll distance is cardWidth - 60
      const cardWidth = Math.min(containerWidth - 80, 320)
      const overlap = 60
      const scrollDistance = cardWidth - overlap
      const newIndex = Math.round(scrollLeft / scrollDistance)
      setCurrentIndex(Math.min(newIndex, steps.length - 1))
    }
  }

  return (
    <section
      id="how-it-works"
      className="w-full relative"
      style={{
        background: '#000000', // Black background
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
            A simple and secure way to trade
            <br />
            verified data.
          </h2>
          <p
            className="text-gray-300"
            style={{
              fontFamily: 'system-ui, -apple-system, sans-serif',
              fontSize: 'clamp(16px, 1.8vw, 20px)',
              color: '#FFFFFF',
              lineHeight: '1.5',
            }}
          >
            Built for creators, developers, and businesses.
          </p>
        </div>

        {/* Desktop/Tablet Grid - 3 columns on desktop, 2 on tablet */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 xl:gap-12">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="flex flex-col items-center"
            >
              {/* Number Badge */}
              <div
                className="rounded-full flex items-center justify-center mb-4 md:mb-6"
                style={{
                  width: 'clamp(48px, 5vw, 64px)',
                  height: 'clamp(48px, 5vw, 64px)',
                  backgroundColor: '#404040',
                  color: '#FFFFFF',
                  border: '1px solid #505050',
                  fontSize: 'clamp(18px, 2vw, 24px)',
                  fontWeight: 'bold',
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                }}
              >
                {step.number}
              </div>

              {/* Card */}
              <div
                className="rounded-xl w-full transition-all duration-300 hover:transform hover:scale-[1.02]"
                style={{
                  background: '#2a2a2a',
                  padding: '24px',
                  minHeight: '344px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              >
                {/* Icon */}
                <div
                  className="relative mb-6 md:mb-8 mt-8"
                  style={{
                    width: 'clamp(64px, 8vw, 80px)',
                    height: 'clamp(64px, 8vw, 80px)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Image
                    src={step.icon}
                    alt={step.title}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>

                {/* Title */}
                <h3
                  className="font-bold text-white mb-3 md:mb-4"
                  style={{
                    fontFamily: 'system-ui, -apple-system, sans-serif',
                    fontSize: 'clamp(20px, 2.2vw, 24px)',
                    lineHeight: '1.3',
                  }}
                >
                  {step.title}
                </h3>

                {/* Description */}
                <p
                  className="text-gray-300"
                  style={{
                    fontFamily: 'system-ui, -apple-system, sans-serif',
                    fontSize: 'clamp(14px, 1.5vw, 16px)',
                    color: '#FFFFFF',
                    lineHeight: '1.6',
                    maxWidth: '100%',
                  }}
                >
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel - Overlapping Cards */}
        <div className="md:hidden relative">
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              paddingLeft: '24px',
              paddingRight: '24px',
              scrollPaddingLeft: '24px',
              scrollPaddingRight: '24px',
            }}
            onScroll={handleScroll}
          >
            {steps.map((step, index) => {
              const isActive = index === currentIndex
              return (
                <div
                  key={step.id}
                  className="flex-shrink-0 snap-center"
                  style={{
                    width: 'calc(100vw - 80px)',
                    maxWidth: '320px',
                    marginRight: index < steps.length - 1 ? '-60px' : '0',
                    zIndex: isActive ? 10 : 5 - index,
                    transform: isActive ? 'scale(1)' : 'scale(0.95)',
                    transition: 'transform 0.3s ease-out',
                  }}
                >
                  <div className="flex flex-col items-center">
                    {/* Number Badge */}
                    <div
                      className="rounded-full flex items-center justify-center mb-4"
                      style={{
                        width: '48px',
                        height: '48px',
                        backgroundColor: '#12344d',
                        color: '#FFFFFF',
                        border: '1px solid #164561',
                        fontSize: '18px',
                        fontWeight: 'bold',
                        fontFamily: 'system-ui, -apple-system, sans-serif',
                      }}
                    >
                      {step.number}
                    </div>

                    {/* Card */}
                    <div
                      className="rounded-xl w-full transition-all duration-300"
                      style={{
                        background: '#2a2a2a',
                        padding: '24px',
                        minHeight: '344px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        opacity: isActive ? 1 : 0.7,
                        boxShadow: isActive
                          ? '0 10px 30px rgba(0, 0, 0, 0.3)'
                          : '0 4px 15px rgba(0, 0, 0, 0.2)',
                      }}
                    >
                      {/* Icon */}
                      <div
                        className="relative mb-6 mt-8"
                        style={{
                          width: '64px',
                          height: '64px',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                      >
                        <Image
                          src={step.icon}
                          alt={step.title}
                          width={40}
                          height={40}
                          className="object-contain"
                        />
                      </div>

                      {/* Title */}
                      <h3
                        className="font-bold text-white mb-3"
                        style={{
                          fontFamily: 'system-ui, -apple-system, sans-serif',
                          fontSize: '20px',
                          lineHeight: '1.3',
                        }}
                      >
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p
                        className="text-gray-300"
                        style={{
                          fontFamily: 'system-ui, -apple-system, sans-serif',
                          fontSize: '14px',
                          color: '#FFFFFF',
                          lineHeight: '1.6',
                          maxWidth: '100%',
                        }}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {steps.map((_, index) => (
              <button
                key={index}
                className="rounded-full transition-all duration-300"
                style={{
                  width: index === currentIndex ? '12px' : '8px',
                  height: '8px',
                  background: index === currentIndex ? '#FFFFFF' : 'rgba(255, 255, 255, 0.4)',
                  cursor: 'pointer',
                }}
                onClick={() => {
                  if (scrollContainerRef.current) {
                    const containerWidth = scrollContainerRef.current.offsetWidth
                    const cardWidth = Math.min(containerWidth - 80, 320)
                    const overlap = 60
                    const scrollDistance = cardWidth - overlap
                    scrollContainerRef.current.scrollTo({
                      left: index * scrollDistance,
                      behavior: 'smooth',
                    })
                  }
                  setCurrentIndex(index)
                }}
                aria-label={`Go to step ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}

