import { requestAnimals, requestAnimalsWithError, Animal, Query } from "./api";
import "./styles.css";

import ContentBlock from "./ContentBlock";

import React, { useEffect } from "react";
import debounce from "lodash.debounce";

const App:React.FC =() => {
  const [animals, setAnimals] = React.useState<Animal[]>([]);
  const [isLoading, setLoading] = React.useState<boolean>(true);
  const [nameOfAnimal, setNameOfAnimal] = React.useState<string>("");
  const [nameOfAmount, setNameOfAmount] = React.useState<string>("");
  const [currentNameAnimal, setCurrentNameAnimal] = React.useState<string>("");
  const [currentAmount, setCurrentAmount] = React.useState<string>("");
  const [page, setPage] = React.useState<number>(1);
  const [limit, setLimit] = React.useState<number>(4);

  useEffect(() => {
    setLoading(true);
    requestAnimals({
      animal: nameOfAnimal,
      amount: nameOfAmount,
      limit,
      offset: (page - 1) * limit,
    })
      .then((res) => {
        setAnimals(res);
        setLoading(false);
        console.log(res);
        // throw new Error();
      })
      .catch((err) => {
        requestAnimalsWithError().catch((err) => {
          console.log(err);
          setAnimals([
            {
              animal: err.message.split(",")[1],
              id: 0,
              amount: err.message.split(",")[0],
            },
          ]);
          setLoading(false);
        });
      });
  }, [nameOfAnimal, nameOfAmount, limit, page]);

  const debounce_ = React.useCallback(
    debounce((event: React.ChangeEvent<HTMLInputElement>) => {
      setNameOfAnimal(event.target.value);
    }, 500),
    []
  );

  const debounce__ = React.useCallback(
    debounce((event: React.ChangeEvent<HTMLInputElement>) => {
      setNameOfAmount(event.target.value);
    }, 500),
    []
  );

  const handleMinus = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handlePlus = () => {
    console.log(animals.length, page);
    if (animals.length == limit) {
      setPage(page + 1);
    }
  };

  const seacrhAnimal = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPage(1);
    setCurrentNameAnimal(e.target.value);
    debounce_(e);
  };

  const seacrhAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPage(1);
    setCurrentAmount(e.target.value);
    debounce__(e);
  };

  return (
    <>
      <ContentBlock
        seacrhAnimal={seacrhAnimal}
        seacrhAmount={seacrhAmount}
        currentNameAnimal={currentNameAnimal}
        currentAmount={currentAmount}
        setLimit={setLimit}
        limit={limit}
        handleMinus={handleMinus}
        page={page}
        handlePlus={handlePlus}
        isLoading={isLoading}
        animals={animals}
      />
      {/* <Requirements /> */}
    </>
  );
}

export default App