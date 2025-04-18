import { type Metadata } from 'next'
import Script from 'next/script'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
    title: {
        template: '%s - L1 GÜRŲ',
        default:
            'L1 GÜRŲ - Software designer, founder, and amateur astronaut',
    },
    description:
        'I’m Shomari, I spend most of my time inAtlanta Georgia writing UNSTOPPABLE C0d3',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="h-full antialiased" suppressHydrationWarning>
            <body className="flex h-full bg-zinc-50 dark:bg-black">
                <Providers>
                    <div className="flex w-full">
                        <Layout>
                            {children}
                        </Layout>
                    </div>
                </Providers>
            </body>
            <Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
        </html>
    )
}
