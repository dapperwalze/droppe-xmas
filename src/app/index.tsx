import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import styles from "./app.module.scss";
import DroppeXmasLayout from "./layout";

const App = () => {
  return (
    <Router>
      <div className={styles.app}>
        <DroppeXmasLayout />
      </div>
    </Router>
  );
};

export default App;
