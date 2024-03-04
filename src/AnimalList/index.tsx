import React from "react";
import type { Animal } from "../api";
import styles from "./AnimalList.module.css";

const AnimalList: React.FC<{ animals: Animal[] }> = ({ animals }) => {
  return (
    <>
      <table className={styles.root}>
        <thead>
          <tr>
            <th>Animal</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
        {animals.map((el: Animal) => (
          <tr key={el.id}>
            <td>{el.animal}</td>
            <td> {el.amount}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </>
  );
};

export default AnimalList;
