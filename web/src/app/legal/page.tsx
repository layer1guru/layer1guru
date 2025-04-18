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

            <Card.Description>{children}</Card.Description>
        </Card>
    )
}

export const metadata = {
    title: 'Legal',
    description: 'Legal Defense is an unfortunate reality of Living The Crypto Life.',
}

export default function Legal() {
    return (
        <SimpleLayout
            title="Legal Defense"
            intro="Legal Defense is an unfortunate reality of Living The Crypto Life."
        >
            <div className="space-y-20">
                <ToolsSection title="Workstation">
                    <Tool title="16” MacBook Pro, M1 Max, 64GB RAM (2021)">
                        I was using an Intel-based 16” MacBook Pro prior to this and the
                        difference is night and day. I’ve never heard the fans turn on a
                        single time, even under the incredibly heavy loads I put it through
                        with our various launch simulations.
                    </Tool>

                    <Tool title="Apple Pro Display XDR (Standard Glass)">
                        The only display on the market if you want something HiDPI and
                        bigger than 27”. When you’re working at planetary scale, every pixel
                        you can get counts.
                    </Tool>

                    <Tool title="IBM Model M SSK Industrial Keyboard">
                        They don’t make keyboards the way they used to. I buy these any time
                        I see them go up for sale and keep them in storage in case I need
                        parts or need to retire my main.
                    </Tool>

                    <Tool title="Apple Magic Trackpad">
                        Something about all the gestures makes me feel like a wizard with
                        special powers. I really like feeling like a wizard with special
                        powers.
                    </Tool>

                    <Tool title="Herman Miller Aeron Chair">
                        If I’m going to slouch in the worst ergonomic position imaginable
                        all day, I might as well do it in an expensive chair.
                    </Tool>
                </ToolsSection>

                <ToolsSection title="Design">
                    <Tool title="Figma">
                        We started using Figma as just a design tool but now it’s become our
                        virtual whiteboard for the entire company. Never would have expected
                        the collaboration features to be the real hook.
                    </Tool>
                </ToolsSection>
            </div>
        </SimpleLayout>
    )
}
