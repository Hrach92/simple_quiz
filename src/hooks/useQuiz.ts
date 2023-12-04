import { QuestionType } from "dependencies/types";
import { QuizContext } from "providers/quizProvider";
import { useContext } from "react";
type QuizTypes = {
  quests: QuestionType[];
  division: string;
  setQuests: (questions: QuestionType[]) => void;
};
const useQuiz = (): QuizTypes => {
  const { quests, setQuests } = useContext(QuizContext);

  const completedCount =
    quests.filter(({ answers }) => {
      return answers.find(({ isRight, answered }) => isRight && answered);
    }).length || 0;

  const division = `${completedCount} / ${quests.length}`;

  return {
    quests,
    division,
    setQuests,
  };
};
export default useQuiz;
