import React from "react"
import {  Animal } from "../api";
import styles from './ContentBlock.module.css'

import AnimalList from "../AnimalList";
import InputsBlock from "../InputsBlock";
import SelectBlock from "../SelectBlock";
import PaginationBlock from "../PaginationBlock";
import LoadingBlock from '../LoadingBlock'

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
  animals: Animal[];
  setCurrentAmount: (currentAmount:string ) => void;
  setCurrentNameAnimal: (currentAmount: string)=> void;
  setNameOfAnimal:(nameOfAnimal: string) => void;
  setNameOfAmount: (nameOfAmount: string) => void;
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
  setCurrentAmount,
  setCurrentNameAnimal,
  setNameOfAnimal,
  setNameOfAmount
}) =>{
    return(
        <div
        className={styles.root}
      >
        <InputsBlock
        setCurrentAmount={setCurrentAmount}
        setCurrentNameAnimal={setCurrentNameAnimal}
          seacrhAmount={seacrhAmount}
          seacrhAnimal={seacrhAnimal}
          currentNameAnimal={currentNameAnimal}
          currentAmount={currentAmount}
          setNameOfAnimal={setNameOfAnimal}
          setNameOfAmount={setNameOfAmount}
        />
        <div
          className={styles.content}
        >
          <SelectBlock setLimit={setLimit} limit={limit} />
          <PaginationBlock
            handleMinus={handleMinus}
            page={page}
            handlePlus={handlePlus}
          />
        </div>
        {isLoading ? (
          <LoadingBlock/>
        ) : (
          <AnimalList animals={animals}></AnimalList>
        )}
        {!isLoading && !animals.length && <h3 style={{color:'red'}}>Animals not found</h3>}
      </div>
    )
}

export default ContentBlock