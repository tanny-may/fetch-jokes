import React from "react";

import styles from "./Joke.module.css";

const Joke = (props) => {
  return (
    <li className={styles.joke}>
      <h3>{props.setup}</h3>
      <hr></hr>
      <p>{props.punchline}</p>
    </li>
  );
};

export default Joke;
