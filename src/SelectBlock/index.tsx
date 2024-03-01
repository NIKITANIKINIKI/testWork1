import React from "react";

interface Props {
  setLimit: (limit: number) => void;
  limit: number;
}

const SelectBlock: React.FC<Props> = ({ setLimit, limit }) => {
  return (
    <>
      <label>By page: </label>
      <select onChange={(e) => setLimit(Number(e.target.value))} value={limit}>
        {[...Array(4)].map((el, i) => (
          <option key={i} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>
    </>
  );
};
export default SelectBlock;
