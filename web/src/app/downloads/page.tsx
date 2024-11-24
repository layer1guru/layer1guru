import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({
    children,
    ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
    return (
        <Section {...props}>
            <div className="space-y-16">{children}</div>
        </Section>
    )
}

function Appearance({
    title,
    description,
    event,
    cta,
    href,
}: {
    title: string
    description: string
    event: string
    cta: string
    href: string
}) {
    return (
        <Card as="article">
            <Card.Title as="h3" href={href}>
                {title}
            </Card.Title>

            <Card.Eyebrow decorate>
                {event}
            </Card.Eyebrow>

            <Card.Description>
                {description}
            </Card.Description>

            <Card.Cta>
                {cta}
            </Card.Cta>
        </Card>
    )
}

export const metadata: Metadata = {
    title: 'Downloads',
    description:
        'Download the latest releases for your Operating System.',
}

export default function Speaking() {
    return (
        <SimpleLayout
            title="Downloads & Demos"
            intro="Stay up-to-date with the Latest Releases. Download for your Operating System. One of my favorite ways to demonstrate my new ideas is by shipping Nightly releases."
        >
            <div className="space-y-20">
                <SpeakingSection title="Desktop">
                    <Appearance
                        href="#"
                        title="Layer1 for Windows"
                        description="A technical deep-dive into HelioStream, the real-time streaming library I wrote for transmitting live video back to Earth."
                        event="Windows 10+"
                        cta="Click for download"
                    />

                    <Appearance
                        href="#"
                        title="Layer1 for Mac OSX"
                        description="They say that if you’re not embarassed by your first version, you’re doing it wrong. Well when you’re selling DIY space shuttle kits it turns out it’s a bit more complicated."
                        event="Mac OSX 15.x+"
                        cta="Click for download"
                    />

                    <Appearance
                        href="#"
                        title="Layer1 for Ubuntu/Debian"
                        description="They say that if you’re not embarassed by your first version, you’re doing it wrong. Well when you’re selling DIY space shuttle kits it turns out it’s a bit more complicated."
                        event="Linux"
                        cta="Click for download"
                    />
                </SpeakingSection>

                <SpeakingSection title="Mobile">
                    <Appearance
                        href="#"
                        title="Layer1 Nightly Edition"
                        description="How we used world-class visual design to attract a great team, win over customers, and get more press for Planetaria."
                        event="Android APK"
                        cta="Click for download"
                    />

                    <Appearance
                        href="#"
                        title="Layer1 FOSS Edition"
                        description="The story of how we built one of the most promising space startups in the world without taking any capital from investors."
                        event="F-Droid Market"
                        cta="Click for download"
                    />

                    <Appearance
                        href="#"
                        title="Layer1 App Store Edition"
                        description="On the importance of creating systems and processes for running your business so that everyone on the team knows how to make the right decision no matter the situation."
                        event="App Store"
                        cta="Click for download"
                    />

                    <Appearance
                        href="#"
                        title="Layer1 Play Store Edition"
                        description="On the importance of creating systems and processes for running your business so that everyone on the team knows how to make the right decision no matter the situation."
                        event="Play Store"
                        cta="Click for download"
                    />
                </SpeakingSection>
            </div>
        </SimpleLayout>
    )
}
