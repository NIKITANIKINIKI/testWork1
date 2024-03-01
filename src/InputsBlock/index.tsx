import React from "react";
import styles from "./InputsBlock.module.css";

interface Props {
  seacrhAnimal: (event: React.ChangeEvent<HTMLInputElement>) => void;
  seacrhAmount: (event: React.ChangeEvent<HTMLInputElement>) => void;
  currentNameAnimal: string;
  currentAmount: string;
}

const InputsBlock: React.FC<Props> = ({
  seacrhAnimal,
  seacrhAmount,
  currentNameAnimal,
  currentAmount,
}) => {
  return (
    <div className={styles.root}>
      <input
        onChange={(e) => seacrhAnimal(e)}
        type="text"
        placeholder="Animal"
        value={currentNameAnimal}
      />
      <input
        onChange={(e) => seacrhAmount(e)}
        type="text"
        placeholder="Amount"
        value={currentAmount}
      />
    </div>
  );
};

export default InputsBlock;
