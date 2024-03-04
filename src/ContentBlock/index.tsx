import React from "react"
import {  Animal } from "../api";
import styles from './ContentBlock.module.css'

import AnimalList from "../AnimalList";
import InputsBlock from "../InputsBlock";
import SelectBlock from "../SelectBlock";
import PaginationBlock from "../PaginationBlock";

interface Props{
  seacrhAnimal: (event: React.ChangeEvent<HTMLInputElement>) => void;
  seacrhAmount: (event: React.ChangeEvent<HTMLInputElement>) => void;
  currentNameAnimal: string;
  currentAmount: string;
  setLimit: (limit: number) => void;
  limit: number;
  handleMinus: () => void;
  page: number;
  handlePlus: () => void;
  isLoading: Boolean;
  animals: Animal[],
}

const ContentBlock: React.FC<Props>=({
  seacrhAnimal,
  seacrhAmount,
  currentNameAnimal,
  currentAmount,
  setLimit,
  limit,
  handleMinus,
  page,
  handlePlus,
  isLoading,
  animals,
}) =>{
    return(
        <div
        className={styles.root}
      >
        <InputsBlock
          seacrhAmount={seacrhAmount}
          seacrhAnimal={seacrhAnimal}
          currentNameAnimal={currentNameAnimal}
          currentAmount={currentAmount}
        />
        <div
          
          style={{
            display: "flex",
            justifyContent:'space-between',
            gap: "5px",
            marginTop: "10px",
            alignItems: "center",
          }}
        >
          <SelectBlock setLimit={setLimit} limit={limit} />
          <PaginationBlock
            handleMinus={handleMinus}
            page={page}
            handlePlus={handlePlus}
          />
        </div>
        {isLoading ? (
          <span>Loading...</span>
        ) : (
          <AnimalList animals={animals}></AnimalList>
        )}
        {!isLoading && !animals.length && <h3>Animals not found</h3>}
      </div>
    )
}

export default ContentBlock