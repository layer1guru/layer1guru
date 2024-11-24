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
    let { answer } = (await import(`../app/qa/${answerFilename}`)) as {
        default: React.ComponentType
        answer: Answer
    }

    return {
        slug: answerFilename.replace(/(\/page)?\.mdx$/, ''),
        ...answer,
    }
}

export async function getAllAnswers() {
    let answerFilenames = await glob('*/page.mdx', {
        cwd: './src/app/qa',
    })

    let answers = await Promise.all(answerFilenames.map(importAnswer))

    return answers.sort((a, z) => +new Date(z.date) - +new Date(a.date))
}
