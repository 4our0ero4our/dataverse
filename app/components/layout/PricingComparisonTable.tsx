'use client'

interface ComparisonRow {
    feature: string
    starter: string
    pro: string
    enterprise: string
    highlight?: boolean
}

interface ComparisonSection {
    title: string
    rows: ComparisonRow[]
}

const comparisonData: ComparisonSection[] = [
    {
        title: 'Marketplace Access',
        rows: [
            { feature: 'Access to marketplace', starter: 'Included', pro: 'Included', enterprise: 'Included', highlight: true },
            { feature: 'Number of download per month', starter: '5', pro: '25', enterprise: 'Unlimited' },
            { feature: 'Number of upload', starter: '0', pro: '10', enterprise: 'Unlimited', highlight: true },
            { feature: 'Access to premium assets', starter: '-', pro: 'Included', enterprise: 'Included' },
            { feature: 'Commercial access', starter: '-', pro: '-', enterprise: 'Included', highlight: true },
        ]
    },
    {
        title: 'Wallet & Earnings',
        rows: [
            { feature: 'Wallet Dashboard', starter: 'Included', pro: 'Included', enterprise: 'Included', highlight: true },
            { feature: 'Withdraw Earnings', starter: '-', pro: 'Included', enterprise: 'Included' },
            { feature: 'Advanced Analytics', starter: '-', pro: '-', enterprise: 'Included', highlight: true },
            { feature: 'Payout Priority', starter: '-', pro: 'Standard', enterprise: 'Fast' },
        ]
    },
    {
        title: 'Support & Security',
        rows: [
            { feature: 'Basic Support', starter: 'Included', pro: 'Included', enterprise: 'Included', highlight: true },
            { feature: 'Priority Support', starter: '-', pro: 'Included', enterprise: 'Included' },
            { feature: 'Dedicated Support Manager', starter: '-', pro: '-', enterprise: 'Included', highlight: true },
            { feature: 'Secure Cloud Storage', starter: '1GB', pro: '10GB', enterprise: 'Unlimited' },
            { feature: 'Backup & Restore', starter: '-', pro: 'Included', enterprise: 'Included', highlight: true },
        ]
    }
]

export function PricingComparisonTable() {
    return (
        <section className="w-full py-12 md:py-20">
            <div className="mx-auto max-w-6xl px-6">

                {/* Desktop Table */}
                <div className="hidden md:block">
                    {comparisonData.map((section, sectionIndex) => (
                        <div key={sectionIndex} className="mb-16 last:mb-0">
                            <h3 className="text-2xl font-bold text-white mb-6">{section.title}</h3>

                            <div className="rounded-xl overflow-hidden border border-gray-800">
                                {/* Header Row */}
                                <div className="grid grid-cols-4 bg-[#2a2e37] p-4 text-gray-300 font-medium">
                                    <div className="pl-4">Features</div>
                                    <div className="text-center">Starter</div>
                                    <div className="text-center">Pro</div>
                                    <div className="text-center">Enterprises</div>
                                </div>

                                {/* Data Rows */}
                                {section.rows.map((row, rowIndex) => (
                                    <div
                                        key={rowIndex}
                                        className={`grid grid-cols-4 p-4 items-center transition-colors ${row.highlight
                                            ? 'bg-[#60a5fa] text-white'
                                            : 'bg-[#1a1d24] text-gray-300 border-t border-gray-800'
                                            }`}
                                    >
                                        <div className="pl-4 font-medium">{row.feature}</div>
                                        <div className="text-center font-medium">{row.starter}</div>
                                        <div className="text-center font-medium">{row.pro}</div>
                                        <div className="text-center font-medium">{row.enterprise}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile View - Stacked Cards */}
                <div className="md:hidden space-y-12">
                    {comparisonData.map((section, sectionIndex) => (
                        <div key={sectionIndex}>
                            <h3 className="text-xl font-bold text-white mb-4">{section.title}</h3>
                            <div className="space-y-4">
                                {section.rows.map((row, rowIndex) => (
                                    <div
                                        key={rowIndex}
                                        className={`rounded-lg p-4 border ${row.highlight
                                            ? 'bg-blue-500 border-blue-400 text-white'
                                            : 'bg-[#1a1d24] border-gray-800 text-gray-300'
                                            }`}
                                    >
                                        <div className="font-bold mb-3 border-b border-white/20 pb-2">{row.feature}</div>
                                        <div className="grid grid-cols-3 gap-2 text-sm">
                                            <div className="flex flex-col items-center">
                                                <span className="text-xs opacity-70 mb-1">Starter</span>
                                                <span className="font-medium text-center">{row.starter}</span>
                                            </div>
                                            <div className="flex flex-col items-center border-l border-white/20">
                                                <span className="text-xs opacity-70 mb-1">Pro</span>
                                                <span className="font-medium text-center">{row.pro}</span>
                                            </div>
                                            <div className="flex flex-col items-center border-l border-white/20">
                                                <span className="text-xs opacity-70 mb-1">Enterprise</span>
                                                <span className="font-medium text-center">{row.enterprise}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}
