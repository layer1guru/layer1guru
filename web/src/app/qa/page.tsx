import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { type AnswerWithSlug, getAllAnswers } from '@/lib/answers'
import { formatDate } from '@/lib/formatDate'

function Answer({ answer }: { answer: AnswerWithSlug }) {
    return (
        <article className="md:grid md:grid-cols-4 md:items-baseline">
            <Card className="md:col-span-3">
                <Card.Title href={`/qa/${answer.slug}`}>
                    {answer.title}
                </Card.Title>

                <Card.Eyebrow
                    as="time"
                    dateTime={answer.date}
                    className="md:hidden"
                    decorate
                >
                    {formatDate(answer.date)}
                </Card.Eyebrow>

                <Card.Description>{answer.description}</Card.Description>

                <Card.Cta>Read the full answer</Card.Cta>
            </Card>

            <Card.Eyebrow
                as="time"
                dateTime={answer.date}
                className="mt-1 hidden md:block"
            >
                {formatDate(answer.date)}
            </Card.Eyebrow>
        </article>
    )
}

export const metadata: Metadata = {
    title: 'Layer1 Questions & Answers',
    description:
        'A collection of my personal picks for the BEST answers to the MOST interesting questions asked by the Layer1 community.',
}

export default async function AnswersIndex() {
    const answers = await getAllAnswers()

    return (
        <SimpleLayout
            title="Questions & Answers"
            intro="Join me for a bit — as I journey through a collection of my personal picks for the BEST answers to the MOST interesting questions asked by the Layer1 community — curated in both chronological order and by popularity, for your convenience."
        >
            <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
                <div className="flex max-w-3xl flex-col space-y-16">
                    {answers.map((answer) => (
                        <Answer key={answer.slug} answer={answer} />
                    ))}
                </div>
            </div>
        </SimpleLayout>
    )
}
