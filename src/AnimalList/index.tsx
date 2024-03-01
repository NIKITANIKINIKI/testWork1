import React from "react";
import type { Animal } from "./api";
import styles from "./AnimalList.module.css";

const AnimalList: React.FC<{ animals: Animal[] }> = ({ animals }) => {
  return (
    <ul className={styles.root}>
      {animals.map((el: Animal) => (
        <li key={el.id}>
          {el.animal}, {el.amount}
        </li>
      ))}
    </ul>
  );
};

export default AnimalList;
