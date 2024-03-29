import React from "react";
import styles from "./InputsBlock.module.css";

interface Props {
  seacrhAnimal: (event: React.ChangeEvent<HTMLInputElement>) => void;
  seacrhAmount: (event: React.ChangeEvent<HTMLInputElement>) => void;
  currentNameAnimal: string;
  currentAmount: string;
  setCurrentAmount: (currentAmount: string) => void;
  setCurrentNameAnimal: (currentNameAnimal: string) => void;
  setNameOfAnimal:(nameOfAnimal: string) => void;
  setNameOfAmount: (nameOfAmount: string) => void;
}


const InputsBlock: React.FC<Props> = ({
  seacrhAnimal,
  seacrhAmount,
  currentNameAnimal,
  currentAmount,
  setCurrentAmount,
  setCurrentNameAnimal,
  setNameOfAnimal,
  setNameOfAmount
}) => {

  const animalRef=React.useRef<HTMLInputElement>(null)
  const amountRef=React.useRef<HTMLInputElement>(null)

  const clearAnimal=()=>{
    setCurrentNameAnimal('')
    setNameOfAnimal('')
    animalRef.current?.focus()
  }

  const clearAmount=()=>{
    setCurrentAmount('')
    setNameOfAmount('')
    amountRef.current?.focus()
  }

  return (
    <div className={styles.root}>
      <div className={styles.enter}>
        <input
        ref={animalRef}
          onChange={(e) => seacrhAnimal(e)}
          type="text"
          placeholder="Animal"
          value={currentNameAnimal}
        />
        {currentNameAnimal && (
          <svg
          onClick={clearAnimal}
          className={styles.icon}
          width="800px"
          height="800px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z"
            fill="#0F0F0F"
          />
        </svg>
        )}
        
      </div>
      <div className={styles.enter}>
        
        <input
        ref={amountRef}
          onChange={(e) => seacrhAmount(e)}
          type="text"
          placeholder="Amount"
          value={currentAmount}
        />
        { currentAmount && (
          <svg
          onClick={clearAmount}
            className={styles.icon}
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z"
              fill="#0F0F0F"
            />
          </svg>
          )}
        
      </div>
    </div>
  );
};

export default InputsBlock;
