'use client'

import DevelopersIcon from '../../../public/images/developers_icon.png'
import ResearchersIcon from '../../../public/images/researchers_icon.png'
import AIEngineersIcon from '../../../public/images/AI_ML_engineers.png'
import BusinessesIcon from '../../../public/images/business_startups_image.png'
import Image from 'next/image'

interface UseCase {
  id: number
  icon: string
  title: string
  description: string
}

const useCases: UseCase[] = [
  {
    id: 1,
    icon: DevelopersIcon.src,
    title: 'Developers',
    description: 'Easily integrate datasets into apps, workflows, and APIs to power new features',
  },
  {
    id: 2,
    icon: ResearchersIcon.src,
    title: 'Researchers',
    description: 'Access structured, verified datasets for academic experiments and innovation',
  },
  {
    id: 3,
    icon: AIEngineersIcon.src,
    title: 'AI & ML Engineers',
    description: 'Find training-ready datasets for computer vision, NLP, forecasting, and generative models.',
  },
  {
    id: 4,
    icon: BusinessesIcon.src,
    title: 'Businesses & Startups',
    description: 'Acquire specialized datasets to support KPIs, insights, automation, and decision making',
  },
]

export function UseCases() {
  return (
    <section 
      className="w-full relative"
      style={{
        background: '#1e2c40',
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
              fontSize: 'clamp(32px, 5vw, 56px)',
              lineHeight: '1.2',
              letterSpacing: '-0.02em',
            }}
          >
            Built for everyone who works with data.
          </h2>
          <p 
            className="max-w-4xl mx-auto"
            style={{
              fontFamily: 'system-ui, -apple-system, sans-serif',
              fontSize: 'clamp(16px, 2vw, 22px)',
              color: '#5895d2',
              lineHeight: '1.6',
            }}
          >
            From AI engineers to product teams, DataVerse powers discovery, validation, and acquisition of high-quality datasets.
          </p>
        </div>

        {/* Cards Grid - Responsive: 1 column on mobile, 2 columns on tablet and desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 max-w-6xl mx-auto">
          {useCases.map((useCase) => (
            <div
              key={useCase.id}
              className="rounded-xl transition-all duration-300 hover:scale-[1.02]"
              style={{
                background: '#2a405c',
                paddingTop: 'clamp(40px, 6vw, 70px)',
                paddingBottom: 'clamp(40px, 6vw, 70px)',
                paddingLeft: 'clamp(20px, 3vw, 32px)',
                paddingRight: 'clamp(20px, 3vw, 32px)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                minHeight: 'clamp(260px, 40vw, 300px)',
              }}
            >
              {/* Icon - Centered at top */}
              <div 
                className="flex justify-center items-center relative"
                style={{ 
                  width: '100%',
                  height: 'clamp(60px, 8vw, 80px)',
                  marginBottom: 'clamp(16px, 2vw, 24px)',
                }}
              >
                <div className="relative">
                  <Image src={useCase.icon} alt={useCase.title} width={30} height={30} className="object-contain" />
                </div>
              </div>

              {/* Title */}
              <h3 
                className="font-bold text-white text-center"
                style={{
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  fontSize: 'clamp(18px, 2.2vw, 22px)',
                  lineHeight: '1.3',
                  marginBottom: 'clamp(8px, 1vw, 12px)',
                }}
              >
                {useCase.title}
              </h3>

              {/* Description */}
              <p 
                className="text-center"
                style={{
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  fontSize: 'clamp(14px, 1.6vw, 16px)',
                  lineHeight: '1.5',
                  color: '#5895d2',
                }}
              >
                {useCase.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

