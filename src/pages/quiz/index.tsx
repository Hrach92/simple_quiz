import { useCallback, useMemo, useState } from "react";
import styles from "./styles.module.scss";
import useQuiz from "hooks/useQuiz";
import { Link } from "react-router-dom";

const Quiz = (): React.JSX.Element => {
  const { quests, setQuests } = useQuiz();
  const [page, setPage] = useState(1);
  console.log(quests);

  const prevPage = useCallback(() => {
    setPage((prev) => prev - 1);
  }, []);

  const nextPage = useCallback(() => {
    setPage((prev) => prev + 1);
  }, []);

  const currentQuiz = useMemo(() => {
    const current = quests.find(({ number }) => number === page) || quests[0];
    const unChecked =
      quests[page - 1].answers.filter(({ answered }) => answered).length === 0;
    return {
      current,
      unChecked,
    };
  }, [page, quests]);

  const chosenAnswer = useCallback(
    (e: any, checkedItem: any) => {
      quests[page - 1].answers.find(
        ({ text }) => text === checkedItem
      )!.answered = e.target.checked;
      setQuests([...quests]);
    },
    [page, quests, setQuests]
  );

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <span className={styles.question}>{currentQuiz?.current.question}</span>
        <div className={styles.answers}>
          {currentQuiz?.current.answers.map((v) => {
            return (
              <label className={styles.label} key={v.text}>
                {v.text}
                <input
                  className={styles.input}
                  type="checkbox"
                  onChange={(e) => chosenAnswer(e, v.text)}
                  disabled={!v.answered && !currentQuiz.unChecked}
                  checked={v.answered}
                />
              </label>
            );
          })}
          <div className={styles.buttons}>
            <button onClick={prevPage} disabled={page === 1}>
              prev
            </button>
            {page === quests.length && (
              <Link to="/complete">
                <button>Complete</button>
              </Link>
            )}

            <button onClick={nextPage} disabled={page === 10}>
              next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Quiz;
