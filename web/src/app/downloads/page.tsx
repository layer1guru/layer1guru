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
        'Download the latest L1 GÜRŲ releases for your operating system.',
}

export default function Speaking() {
    return (
        <SimpleLayout
            title="Downloads & Demos"
            intro="Stay up-to-date with the latest L1 GÜRŲ releases. One of my favorite ways to demonstrate my new ideas is by shipping Nightly releases."
        >
            <div className="space-y-20">
                <SpeakingSection title="For Your SERVER">
                    <Appearance
                        href="https://layer1.run"
                        title="NodΞRunr for Ubuntu/Debian"
                        description="NodΞRunr is a lightweight, smart daemon delivering effortless SysOps to Founders and Teams — assure your community of a SAFU space by maintaining your mission-critical nodes from anywhere, at any time."
                        event="Ubuntu/Debian"
                        cta="Click to learn more..."
                    />

                    <Appearance
                        href="https://layer1.run"
                        title="NodΞRunr for Redhat/CentOS"
                        description="NodΞRunr is a lightweight, smart daemon delivering effortless SysOps to Founders and Teams — assure your community of a SAFU space by maintaining your mission-critical nodes from anywhere, at any time."
                        event="Redhat"
                        cta="Click to learn more..."
                    />
                </SpeakingSection>

                <SpeakingSection title="For Your DESKTOP">
                    <Appearance
                        href="javascript://"
                        title="GÜRŲ for Windows"
                        description="Take control of your Layer-1 operations from your Windows computer."
                        event="Windows 10+"
                        cta="Click to learn more..."
                    />

                    <Appearance
                        href="javascript://"
                        title="GÜRŲ for Mac OSX"
                        description="Take control of your Layer-1 operations from your Macbook."
                        event="Mac OSX 15.x+"
                        cta="Click to learn more..."
                    />

                    <Appearance
                        href="javascript://"
                        title="GÜRŲ for Ubuntu/Debian"
                        description="Take control of your Layer-1 operations from your Linux computer."
                        event="Linux"
                        cta="Click to learn more..."
                    />
                </SpeakingSection>

                <SpeakingSection title="For Your MOBILE">
                    <Appearance
                        href="javascript://"
                        title="GÜRŲ Nightly Edition"
                        description="Take control of your Layer-1 operations from your mobile."
                        event="Android APK"
                        cta="Click to learn more..."
                    />

                    <Appearance
                        href="javascript://"
                        title="GÜRŲ FOSS Edition"
                        description="Take control of your Layer-1 operations from your mobile."
                        event="F-Droid Market"
                        cta="Click to learn more..."
                    />

                    <Appearance
                        href="javascript://"
                        title="GÜRŲ App Store Edition"
                        description="Take control of your Layer-1 operations from your mobile."
                        event="App Store"
                        cta="Click to learn more..."
                    />

                    <Appearance
                        href="javascript://"
                        title="GÜRŲ Play Store Edition"
                        description="Take control of your Layer-1 operations from your mobile."
                        event="Play Store"
                        cta="Click to learn more..."
                    />
                </SpeakingSection>
            </div>
        </SimpleLayout>
    )
}
