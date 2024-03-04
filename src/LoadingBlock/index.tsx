import React from "react";
import styles from './LoadingBlock.module.css'


const App:React.FC= () => {
  return (
    <>
      <div className={styles.loading}>Loading&#8230;</div>
    </>
  );
};

export default App;
