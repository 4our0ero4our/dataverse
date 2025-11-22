'use client'

export function PricingCTA() {
    return (
        <section
            className="w-full relative overflow-hidden"
            style={{
                background: 'linear-gradient(180deg, #000000 0%, #0a1628 100%)',
                paddingTop: 'clamp(60px, 8vw, 100px)',
                paddingBottom: 'clamp(60px, 8vw, 100px)',
            }}
        >
            {/* Background Glow Effect */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-30 pointer-events-none"
                style={{
                    background: 'radial-gradient(circle at 50% 50%, #3b82f6 0%, transparent 70%)',
                    filter: 'blur(100px)',
                }}
            />

            <div
                className="mx-auto relative z-10"
                style={{
                    maxWidth: '1440px',
                    paddingLeft: 'clamp(24px, 5vw, 80px)',
                    paddingRight: 'clamp(24px, 5vw, 80px)',
                }}
            >
                {/* Content Container */}
                <div className="text-center max-w-3xl mx-auto">
                    {/* Heading */}
                    <h2
                        className="font-bold text-white mb-4 md:mb-6"
                        style={{
                            fontSize: 'clamp(28px, 4vw, 48px)',
                            lineHeight: '1.2',
                            letterSpacing: '-0.02em',
                        }}
                    >
                        Ready to access high-quality, verified datasets?
                    </h2>

                    {/* Subheading */}
                    <p
                        className="text-gray-300 mb-8 md:mb-10"
                        style={{
                            fontSize: 'clamp(16px, 1.8vw, 18px)',
                            lineHeight: '1.6',
                        }}
                    >
                        Start your free plan or talk to sales.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        {/* Primary CTA - Start With Free Plan */}
                        <button
                            className="w-full sm:w-auto px-8 py-3.5 rounded-lg font-medium transition-all duration-300 whitespace-nowrap"
                            style={{
                                background: 'linear-gradient(90deg, #3b82f6 0%, #2563eb 100%)',
                                color: '#FFFFFF',
                                border: 'none',
                                fontSize: 'clamp(14px, 1.5vw, 16px)',
                                cursor: 'pointer',
                                boxShadow: '0 4px 14px rgba(59, 130, 246, 0.4)',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'linear-gradient(90deg, #2563eb 0%, #1d4ed8 100%)'
                                e.currentTarget.style.boxShadow = '0 6px 20px rgba(59, 130, 246, 0.5)'
                                e.currentTarget.style.transform = 'translateY(-2px)'
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'linear-gradient(90deg, #3b82f6 0%, #2563eb 100%)'
                                e.currentTarget.style.boxShadow = '0 4px 14px rgba(59, 130, 246, 0.4)'
                                e.currentTarget.style.transform = 'translateY(0)'
                            }}
                        >
                            Start With Free Plan
                        </button>

                        {/* Secondary CTA - Contact Sales */}
                        <button
                            className="w-full sm:w-auto px-8 py-3.5 rounded-lg font-medium transition-all duration-300 whitespace-nowrap"
                            style={{
                                background: 'transparent',
                                border: '1px solid rgba(59, 130, 246, 0.5)',
                                color: '#FFFFFF',
                                fontSize: 'clamp(14px, 1.5vw, 16px)',
                                cursor: 'pointer',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'rgba(59, 130, 246, 0.1)'
                                e.currentTarget.style.borderColor = '#3b82f6'
                                e.currentTarget.style.transform = 'translateY(-2px)'
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'transparent'
                                e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.5)'
                                e.currentTarget.style.transform = 'translateY(0)'
                            }}
                        >
                            Contact Sales
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
