import useBoolean from "hooks/useBoolean";
import styles from "./styles.module.scss";
import useQuiz from "hooks/useQuiz";
import Item from "./item";
import React from "react";

const Complete = (): JSX.Element => {
  const { open, setToggle } = useBoolean();
  const { quests, division } = useQuiz();
  return (
    <div className={styles.container}>
      <span className={styles.title}>
        You have completed your quiz ({division})
      </span>
      <span
        tabIndex={0}
        onKeyDown={setToggle}
        onClick={setToggle}
        className={styles.show}
      >
        Show details
      </span>
      {open && (
        <div className={styles.questions}>
          {quests.map((value) => {
            return (
              <React.Fragment>
                <Item completedQuestion={value} />
              </React.Fragment>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default Complete;
