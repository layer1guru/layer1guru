import glob from 'fast-glob'

interface Answer {
    title: string
    description: string
    author: string
    date: string
}

export interface AnswerWithSlug extends Answer {
    slug: string
}

async function importAnswer(
    answerFilename: string,
): Promise<AnswerWithSlug> {
    const { answer } = (await import(`../app/qa/${answerFilename}`)) as {
        default: React.ComponentType
        answer: Answer
    }

    return {
        slug: answerFilename.replace(/(\/page)?\.mdx$/, ''),
        ...answer,
    }
}

export async function getAllAnswers() {
    const answerFilenames = await glob('*/page.mdx', {
        cwd: './src/app/qa',
    })

    const answers = await Promise.all(answerFilenames.map(importAnswer))

    return answers.sort((a, z) => +new Date(z.date) - +new Date(a.date))
}
