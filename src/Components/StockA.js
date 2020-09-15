import React, { useContext } from "react";

import { StockContext } from "../Context/StockContext";

export const StockA = () => {
  const { StockData } = useContext(StockContext);
  const retval =
    StockData.length === 0 ? (
      <h1>No Data Found</h1>
    ) : (
      StockData.map((item) => item.pName)
    );
  return (
    <div>
      <h1> {retval} </h1>
    </div>
  );
};
