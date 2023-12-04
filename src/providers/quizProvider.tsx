import { questions } from "dependencies/constants";
import { QuestionType } from "dependencies/types";
import React, { createContext, useMemo, useState } from "react";

export const QuizContext = createContext({
  quests: questions,
  setQuests: (questions: QuestionType[]) => {},
});

const QuizProvider = ({ children }: { children: React.ReactNode }) => {
  const [quests, setQuests] = useState<QuestionType[]>(questions);
  /*   useEffect(() => {
    console.log("work");
  }, [setQuests]); */
  const value = useMemo(() => {
    return { quests, setQuests };
  }, [quests]);

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
export default QuizProvider;
