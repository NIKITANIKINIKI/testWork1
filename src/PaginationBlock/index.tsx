import React from "react";
import styles from "./PaginationBlock.module.css";

interface Props {
  handleMinus: () => void;
  page: number;
  handlePlus: () => void;
}

const PaginationBlock: React.FC<Props> = ({
  handleMinus,
  page,
  handlePlus,
}) => {
  return (
    <div className={styles.root}>
      <button onClick={handleMinus}>prev</button>
      <label>{page}</label>
      <button onClick={handlePlus}>next</button>
    </div>
  );
};

export default PaginationBlock;
