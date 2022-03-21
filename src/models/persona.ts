// @ts-ignore

import { Intent } from "./intent";
import { Questionnaire } from "./questionnaire";

/* eslint-disable */
export interface Persona {
    id: string;
    completed: boolean;
    details: PersonaDetails;
    uuid?: string;
    status?: string;
    intents?: PersonaIntent[];
};

export interface PersonaDetails {
    name: string;
    domain_level?: string;
    ai_level?: string;
}

export interface PersonaIntent {
    id: string;
    completed: boolean;
    name: string;
    uuid?: string;
    ref?: string;
    questions?: string[];
    explanation?: string;
    evaluation: Questionnaire;    //todo?
};