export interface Question {
    questionId: string,
    questionType?: string,
    questionText: string,
    answers?: Answer[],
    answer?: FIanswer,
    help?: string
}

export interface Answer {
    answerText: string,
    givenAnswer?: boolean,
    isRight: boolean
}

export interface FIanswer {
    answerText: string[],
    givenAnswer?: string
}

export interface UserAnswer {
    questionId: string,
    isAnswered?: boolean,
    isRight: boolean
}

export interface QuestionType {
    name: string,
    id: string
}