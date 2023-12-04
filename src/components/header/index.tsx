import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import { questions } from "dependencies/constants";
import useQuiz from "hooks/useQuiz";

const Header = () => {
  const { setQuests } = useQuiz();

  return (
    <div className={styles.header}>
      <Link to="/">
        <button className={styles.home} onClick={() => setQuests(questions)}>
          Home
        </button>
      </Link>
    </div>
  );
};
export default Header;
