'use client'

import { MarketplaceNavbar } from '@/app/components/layout/MarketplaceNavbar'
import { Footer } from '@/app/components/layout/Footer'
import { PricingComparisonTable } from '@/app/components/layout/PricingComparisonTable'
import { PricingCTA } from '@/app/components/layout/PricingCTA'

export default function PricingPage() {
    return (
        <div
            className="min-h-screen w-full flex flex-col"
            style={{
                background: 'linear-gradient(180deg, #000000 0%, #1a1a1a 100%)',
                color: '#FFFFFF'
            }}
        >
            <MarketplaceNavbar />

            <main className="flex-grow relative">
                {/* Background Elements */}
                <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] opacity-20 pointer-events-none"
                    style={{
                        background: 'radial-gradient(circle at 50% 0%, #3b82f6 0%, transparent 70%)',
                        filter: 'blur(80px)',
                    }}
                />

                <div
                    className="mx-auto px-6 py-16 md:py-24"
                    style={{ maxWidth: '1440px' }}
                >
                    {/* Header */}
                    <div className="text-center mb-16 md:mb-24 relative z-10">
                        <h1
                            className="font-bold mb-6"
                            style={{
                                fontSize: 'clamp(32px, 4vw, 56px)',
                                lineHeight: '1.1',
                                letterSpacing: '-0.02em',
                            }}
                        >
                            Simple, transparent pricing.
                        </h1>
                        <p
                            className="text-gray-400 max-w-2xl mx-auto"
                            style={{
                                fontSize: 'clamp(16px, 1.5vw, 18px)',
                                lineHeight: '1.6',
                            }}
                        >
                            Choose a plan that matches how you use data — from exploration to enterprise integrations.
                        </p>
                    </div>

                    {/* Pricing Cards */}
                    <div
                        className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-3 md:overflow-visible gap-4 md:gap-8 lg:gap-10 max-w-6xl mx-auto relative z-10 pt-8 md:pt-0 pb-8 md:pb-0 px-6 md:px-0 -mx-6 md:mx-auto scrollbar-hide"
                        style={{
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',
                        }}
                    >
                        {/* Starter Plan */}
                        <div
                            className="flex-shrink-0 w-[85vw] md:w-auto snap-center rounded-2xl p-8 flex flex-col h-full transition-transform hover:scale-[1.02]"
                            style={{
                                background: '#0A0A0A',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                            }}
                        >
                            <div className="mb-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 rounded-lg bg-blue-500/10">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold">Starter</h3>
                                </div>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-bold">Free</span>
                                    <span className="text-gray-400">/ month</span>
                                </div>
                            </div>

                            <ul className="space-y-4 mb-8 flex-grow">
                                {[
                                    'Access to free datasets',
                                    'Limited paid datasets',
                                    'Basic search & filter tools',
                                    'Save datasets to wishlist',
                                    'No credit card required',
                                    '1 device login'
                                ].map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-300">
                                        <span className="mt-1 text-gray-500">•</span>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button
                                className="w-full py-3 rounded-lg font-medium transition-all hover:opacity-90"
                                style={{
                                    background: 'transparent',
                                    border: '1px solid rgba(255, 255, 255, 0.2)',
                                    color: '#FFFFFF'
                                }}
                            >
                                Get Started
                            </button>
                        </div>

                        {/* Pro Plan - Highlighted */}
                        <div
                            className="flex-shrink-0 w-[85vw] md:w-auto snap-center rounded-2xl p-8 flex flex-col h-full relative transform md:-translate-y-4"
                            style={{
                                background: '#111111',
                                border: '1px solid rgba(59, 130, 246, 0.5)',
                                boxShadow: '0 0 40px rgba(59, 130, 246, 0.15)',
                            }}
                        >
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                                    Most Popular
                                </span>
                            </div>

                            <div className="mb-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 rounded-lg bg-blue-500/20">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M2 17L12 22L22 17" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M2 12L12 17L22 12" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold">Pro</h3>
                                </div>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-bold">$19</span>
                                    <span className="text-gray-400">/ month</span>
                                </div>
                            </div>

                            <ul className="space-y-4 mb-8 flex-grow">
                                {[
                                    'Access to Verified Datasets',
                                    'Download limits: 10 / month',
                                    'API access',
                                    'Priority email support',
                                    'Verified dataset support',
                                    '3 device logins'
                                ].map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-300">
                                        <span className="mt-1 text-blue-400">•</span>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button
                                className="w-full py-3 rounded-lg font-bold transition-all hover:opacity-90"
                                style={{
                                    background: 'linear-gradient(90deg, #3b82f6 0%, #2563eb 100%)',
                                    color: '#FFFFFF',
                                    border: 'none'
                                }}
                            >
                                Subscribe Now
                            </button>
                        </div>

                        {/* Enterprise Plan */}
                        <div
                            className="flex-shrink-0 w-[85vw] md:w-auto snap-center rounded-2xl p-8 flex flex-col h-full transition-transform hover:scale-[1.02]"
                            style={{
                                background: '#0A0A0A',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                            }}
                        >
                            <div className="mb-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 rounded-lg bg-purple-500/10">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3 21H21" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M5 21V7" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M19 21V3" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M9 21V9" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M9 9H19" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold">Enterprise</h3>
                                </div>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-bold">$100</span>
                                    <span className="text-gray-400">/ month</span>
                                </div>
                            </div>

                            <ul className="space-y-4 mb-8 flex-grow">
                                {[
                                    'Dedicated account manager',
                                    'Download limits: 10 / month',
                                    'Custom API access',
                                    'Onboarding & training',
                                    'Custom dataset sourcing',
                                    'Team seats (5–100+)'
                                ].map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-300">
                                        <span className="mt-1 text-gray-500">•</span>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button
                                className="w-full py-3 rounded-lg font-medium transition-all hover:opacity-90"
                                style={{
                                    background: '#3b82f6',
                                    color: '#FFFFFF',
                                    border: 'none'
                                }}
                            >
                                Contact Sales
                            </button>
                        </div>
                    </div>
                </div>

                {/* Comparison Table */}
                <PricingComparisonTable />

                {/* Call to Action */}
                <PricingCTA />
            </main>

            <Footer />
        </div>
    )
}
