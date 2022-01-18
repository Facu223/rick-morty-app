import React from "react";
import PaginationStyles from './Pagination.module.css'

const Pagination = ({ handlePrevious, handleNext, prev, next }) => {
  const goPrev = () => {
    handlePrevious();
  };

  const goNext = () => {
    handleNext();
  };

  return (
    <div className={PaginationStyles.center}>
      {prev ? <button onClick={goPrev}>Anterior</button> : null}

      {next ? <button onClick={goNext}>Siguiente</button> : null}
    </div>
  );
};

export default Pagination;
