export interface Frage {
    frageId: string,
    frageTyp?: string,
    frageText: string,
    antworten?: Antworten[],
    antwort?: FIAntwort,
    hilfe?: string
}

export interface Antworten {
    antwortText: string,
    gegebeneAntwort?: boolean,
    istRichtig: boolean
}

export interface FIAntwort {
    antwortText: string[],
    gegebeneAntwort?: string
}

export interface UserAntwort {
    frageId: string,
    istBeantwortet?: boolean,
    istRichtig: boolean
}

export interface FragenTyp {
    name: string,
    id: string
}