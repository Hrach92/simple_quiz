import { QuestionType } from "dependencies/types";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

type ButtonTypes = {
  prevPage: () => void;
  nextPage: () => void;
  quests: QuestionType[];
  page: number;
};
const Buttons = ({
  prevPage,
  nextPage,
  quests,
  page,
}: ButtonTypes): JSX.Element => {
  return (
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
  );
};
export default Buttons;
