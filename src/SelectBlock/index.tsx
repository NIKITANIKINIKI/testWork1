import React from "react";
import styles from "./SelectBlock.module.css";

interface Props {
  setLimit: (limit: number) => void;
  limit: number;
}

const SelectBlock: React.FC<Props> = ({ setLimit, limit }) => {
  return (
    <>
      <div className={styles.wrapper}>
        <label className={styles.title}>By page: </label>
        <select
          className={styles.choice}
          onChange={(e) => setLimit(Number(e.target.value))}
          value={limit}
        >
          {[...Array(4)].map((el, i) => (
            <option key={i} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};
export default SelectBlock;
