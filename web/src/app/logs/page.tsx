import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
    children,
    ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
    return (
        <Section {...props}>
            <ul role="list" className="space-y-16">
                {children}
            </ul>
        </Section>
    )
}

function Tool({
    title,
    href,
    children,
}: {
    title: string
    href?: string
    children: React.ReactNode
}) {
    return (
        <Card as="li">
            <Card.Title as="h3" href={href}>
                {title}
            </Card.Title>

            <Card.Description>
                {children}
            </Card.Description>
        </Card>
    )
}

export const metadata = {
    title: 'Activity Logs',
    description: 'Stay up-to-date on all the activity happening at L1 GÜRŲ.',
}

export default function Uses() {
    return (
        <SimpleLayout
            title="Activity Logs"
            intro="I get asked a lot about the things I use to build software and maximize productivity. Here’s a big list of what I recently did and how I did it:"
        >
            <div className="space-y-20">
                <ToolsSection title="December '24">
                    <Tool title="NodΞRunr v24.12.5 — 1-Click Blockchain Setup &apm; Installation">
                        Proving project teams with the easiest way to setup and deploy their own self-hosted Layer-1 blockchain on Avalanche9000.
                    </Tool>

                    <Tool title="NodΞRunr v24.12.1 — 1st Release">
                        First release for this lightweight, smart daemon.
                        NodΞRunr offers effortless System Operations (SysOps) to Avalanche Founders and Teams.
                        Just a 1st step towards providing a SAFU space for communities to build and grow.
                    </Tool>
                </ToolsSection>

                <ToolsSection title="November '24">
                    <Tool title="Rebrand Subnet Guru">
                        With the announcement of Avalanche’s Retro9000, it’s the perfect time to dust off some old repos and update to the latest tech stack.
                    </Tool>
                </ToolsSection>

                <ToolsSection title="Pre- Avax9000">
                    <Tool title="Moralis Hackathon">
                        Great tool for scheduling meetings while protecting my calendar and
                        making sure I still have lots of time for deep work during the week.
                    </Tool>

                    <Tool title="Subnet Guru">
                        Simple tool for blocking distracting websites when I need to just do
                        the work and get some momentum going.
                    </Tool>
                </ToolsSection>
            </div>
        </SimpleLayout>
    )
}
