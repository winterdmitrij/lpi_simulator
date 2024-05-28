export interface Question {
    questionId: string,
    questionTypeId: string,
    questionText: string,
    answers?: Answer[],
    answer?: FIanswer,  // ToDo: Löschen
    help?: string
}

// ToDo: was ist givenAnswer?
export interface Answer {
    answerText: string,
    givenAnswer?: boolean,
    isCorrect: boolean
}

// ToDo: Löschen
export interface FIanswer {
    answerText: string[],
    givenAnswer?: string
}

export interface UserAnswer {
    questionId: string,
    isAnswered?: boolean,
    isCorrect: boolean
}

export interface QuestionType {
    name: string,
    id: string
}