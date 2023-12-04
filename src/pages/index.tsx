import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

const Main = (): React.JSX.Element => {
  return (
    <div className={styles.main}>
      <Link to="quiz" className={styles.link}>
        <button className={styles.start}>Start Quiz</button>
      </Link>
    </div>
  );
};
export default Main;
