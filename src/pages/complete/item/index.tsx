import styles from "./styles.module.scss";
import { QuestionType } from "dependencies/types";
import cn from "classnames";
import { useMemo } from "react";

type ItemTypes = {
  completedQuestion: QuestionType;
};

const Item = ({ completedQuestion }: ItemTypes): JSX.Element => {
  const { question, answers } = completedQuestion;
  const unAnswered = useMemo(() => {
    return answers.every(({ answered }) => !answered);
  }, [answers]);

  return (
    <div className={styles.container}>
      <span className={styles.question}>
        {question}

        {`${unAnswered ? " (Not Answered)" : ""}`}
      </span>
      {answers.map(({ answered, isRight, text }) => {
        return (
          <div
            className={cn(
              styles.answer,
              `${isRight ? styles.right : ""}`,
              `${answered ? styles.answered : ""}`
            )}
          >
            {text}
          </div>
        );
      })}
    </div>
  );
};
export default Item;
