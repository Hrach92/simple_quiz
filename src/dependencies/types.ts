export type AnswerType = {
  text: string;
  isRight: boolean;
  answered: boolean;
};

export type QuestionType = {
  question: string;
  answers: AnswerType[];
  number: number;
};
