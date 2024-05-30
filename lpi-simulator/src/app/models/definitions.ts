export interface Question {
    questionId: string,
    questionTypeId: string,
    questionText: string,
    answers?: Answer[],
    help?: string
}

// ToDo: was ist givenAnswer?
export interface Answer {
    answerText: string,     // Antwort: A. Bla-bla-bla
    givenAnswer?: boolean,  // ist diese Antwort vom Benutzer als richtige markiert?
    isCorrect: boolean      // ist diese Antwort richtige?
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