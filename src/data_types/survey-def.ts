export interface Expression {
    name: string;
    data?: any;
}

export const isExpression = (value: Expression | any): value is Expression => {
    return typeof(value) === 'object' && (value as Expression).name !== undefined;
}

export interface SurveyItem {
    key: string;
    follows?: Array<string>;
    condition?: Expression;
}

export interface Question extends SurveyItem {
    // TODO: define question related properties
}

export interface QuestionGroup extends SurveyItem {
    // TODO: define group related properties
    items: Array<QuestionGroup | Question>;
}

export const isQuestionGroup = (item: QuestionGroup | Question): item is QuestionGroup => {
    return (item as QuestionGroup).items !== undefined;
}
