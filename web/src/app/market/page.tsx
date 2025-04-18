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
    title: 'Marketplace',
    description: 'Mint & Trade Your Specials',
}

export default function Market() {
    return (
        <SimpleLayout
            title="Marketplace"
            intro="Mint & Trade Your Specials and Gurus from this convenient marketplace."
        >
            <div className="space-y-20">
                <ToolsSection title="MINTING Season One">
                    <Tool title="The GURUS">
                        Buy Now is 1.00 $AVAX for the 1st 60 minutes.
                        The price is reduced by 1/2 every 60 minutes afterwards.
                        The minimum price is 0.01 $AVAX.

                        <p className="flex mt-5 text-base text-rose-400 italic">
                            NOTE: Purchases made during the &rdquo;Buy Now&ldquo; phase
                            will automatically DOUBLE the &rdquo;Buy Now&ldquo; price.
                        </p>
                    </Tool>

                    <Tool title="The SPECIALS">
                        You can purchase Specials directly from the Cloud or ANY GÜRŲ client.
                        Add one or more Specials to ANY of your personal, team and project profiles to enable GÜRŲ PRO features.

                        <p className="flex mt-5 text-base text-fuchsia-400 italic">
                            Registered profiles get a 75% DISCOUNT during Retro9000!
                        </p>
                    </Tool>
                </ToolsSection>

                <ToolsSection title="ASSET TRADING">
                    <Tool title="JoePegs">
                        Easily find buyers & sellers in https://joepegs.com/.
                    </Tool>
                </ToolsSection>
            </div>
        </SimpleLayout>
    )
}
