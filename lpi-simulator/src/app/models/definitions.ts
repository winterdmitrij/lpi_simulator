// Frage
export interface Question {
    questionId: string,
    questionTypeId: string,
    questionText: string,
    answers?: Answer[],
    answer?: string,
    help?: string
}

// Antwort der Frage
export interface Answer {
    answerText: string,     // Antwort: A. Bla-bla-bla
    givenAnswer?: boolean,  // war diese Antwort vom Benutzer als richtige markiert?
    isCorrect: boolean      // ist diese Antwort tatsächlich richtig?
}

// Benutzer-Antwort
export interface UserAnswer {
    questionNum?: number,   // Nummer der Frage im Fragenpull
    questionId: string,     // Frage-ID
    isAnswered: boolean,    // war diese Frage beantwortet
    isCorrect: boolean      // wenn ja, war die Antwort richtig
}

// Fragentyp -- Brauche ich nicht mehr --
export interface QuestionType {
    name: string,
    id: string
}

// Fragen-Menge
export interface QuestionsPull {
    id: string,     // ID
    name: string,   // von Marc
    count: number   // Anzahl von Fragen
}

// Pages
export interface Page {
    num: number,
    name: string
}