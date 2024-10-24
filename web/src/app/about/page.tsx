import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
    GitHubIcon,
    InstagramIcon,
    LinkedInIcon,
    XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({
    className,
    href,
    children,
    icon: Icon,
}: {
    className?: string
    href: string
    icon: React.ComponentType<{ className?: string }>
    children: React.ReactNode
}) {
    return (
        <li className={clsx(className, 'flex')}>
            <Link
                href={href}
                className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
            >
                <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
                <span className="ml-4">{children}</span>
            </Link>
        </li>
    )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
            <path
                fillRule="evenodd"
                d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
            />
        </svg>
    )
}

export const metadata: Metadata = {
    title: 'About',
    description:
    'I’m Shomari. I spend most of my time in Atlanta GA writing UNSTOPPABLE code.',
}

export default function About() {
    return (
        <Container className="mt-16 sm:mt-32">
            <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
                <div className="lg:pl-20">
                    <div className="max-w-xs px-2.5 lg:max-w-none">
                        <Image
                            src={portraitImage}
                            alt=""
                            sizes="(min-width: 1024px) 32rem, 20rem"
                            className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                        />
                    </div>
                </div>

                <div className="lg:order-first lg:row-span-2">
                    <h1 className="text-4xl font-light tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                        <span className="block text-amber-400 text-6xl">I’m Shomari</span>
                        I spend most of my time in
                        <span className="px-2 text-rose-500">Atlanta Georgia</span>
                        writing
                        <span className="block font-bold font-mono text-sky-400 tracking-wider">
                            UNSTOPPABLE C0d3
                        </span>
                    </h1>

                    <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                        <p>
                            I LOVE building things that are permissionless and trustless.
                            Avalanche Layer 1 blockchains <em>(formerly Subnets)</em> offer the tools and resource required to power that ambition.
                        </p>

                        <p>
                            This project started about 2 years ago as Layer1Guru, during my 1st Avalanche + Moralis hackathon back in Jan ’22.
                            I dropped the personal effort in favor or working on a SocialFi team.
                            Well.. now I’m back to complete this work and deliver a blast of NEW value to the Avalanche ecosystem.
                        </p>

                        <p>
                            Take a moment to check out the <Link href="javascript://">INTERACTIVE DEMO</Link>.
                            And don’t hesitate to leave some feedback in <Link href="https://arena.social/0xShomari" className="text-sky-500 font-bold hover:text-sky-400" target="_blank">The Arena!</Link>
                        </p>

                    </div>
                </div>

                <div className="lg:pl-20">
                    <ul role="list">
                        <SocialLink href="https://x.com/0xShomari" icon={XIcon}>
                            Follow on X
                        </SocialLink>

                        <SocialLink href="https://github.com/nyusternie" icon={GitHubIcon} className="mt-4">
                            Follow on GitHub
                        </SocialLink>

                        <SocialLink href="https://ethereum.stackexchange.com/users/20276/shomari" icon={LinkedInIcon} className="mt-4">
                            Follow on StackExchange
                        </SocialLink>

                        <div className="mt-8 flex flex-row gap-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40">
                            <SocialLink
                                href="https://sdot.io"
                                icon={MailIcon}
                            >
                                SDOT.io
                            </SocialLink>

                            <SocialLink
                                href="https://apecs.dev"
                                icon={MailIcon}
                            >
                                APECS.dev
                            </SocialLink>
                        </div>

                        <div className="mt-8 flex flex-col gap-4 border-t border-zinc-100 pt-8 dark:border-zinc-700/40">
                            <h3 className="text-xs text-slate-400 uppercase tracking-widest">
                                Donation &amp; Support Address ❤️
                            </h3>

                            <SocialLink
                                href="https://app.avvy.domains/domains/shomari.avax"
                                icon={MailIcon}
                            >
                                shomari.avax
                            </SocialLink>

                            <SocialLink
                                href="https://avascan.info/blockchain/c/address/0x27a9b30DBe015842098F4CD31f0301a1cEE74bfe"
                                icon={MailIcon}
                            >
                                0x27a9b30DBe015842098F4CD31f0301a1cEE74bfe
                            </SocialLink>
                        </div>
                    </ul>
                </div>
            </div>
        </Container>
    )
}
