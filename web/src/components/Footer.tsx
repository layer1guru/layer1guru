import Link from 'next/link'

import { ContainerInner, ContainerOuter } from '@/components/Container'

function NavLink({
    href,
    children,
}: {
    href: string
    children: React.ReactNode
}) {
    return (
        <Link
            href={href}
            className="transition hover:text-teal-500 dark:hover:text-teal-400"
        >
            {children}
        </Link>
    )
}

function NavLinkBlank({
    href,
    children,
}: {
    href: string
    children: React.ReactNode
}) {
    return (
        <Link
            href={href}
            target="_blank"
            className="transition hover:text-teal-500 dark:hover:text-teal-400"
        >
            {children}
        </Link>
    )
}

export function Footer() {
    return (
        <footer className="mt-32 flex-none">
            <ContainerOuter>
                <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
                    <ContainerInner>
                        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                            <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                                <NavLink href="/market">Market</NavLink>
                                <NavLinkBlank href="https://cloud.layer1.guru">Cloud</NavLinkBlank>
                                <NavLink href="/downloads">Downloads</NavLink>
                                {/* <NavLink href="/showcase">Showcase</NavLink> */}
                                <NavLink href="/qa">Q & A</NavLink>
                                <NavLink href="/about">About</NavLink>
                            </div>

                            <p className="text-sm text-zinc-400 dark:text-zinc-500">
                                &copy; {new Date().getFullYear()} L1 GÜRŲ.
                                All rights reserved.
                            </p>
                        </div>
                    </ContainerInner>
                </div>
            </ContainerOuter>
        </footer>
    )
}
