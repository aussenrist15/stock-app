import React, { createContext, useState } from "react";
import { v4 as uuid } from "uuid";

export const StockContext = createContext();

const StockContextProvider = (props) => {
  const [StockData, setStockData] = useState([]);

  const addDatatoStock = (metersList, sum, pageNum, type, date, pName) => {
    const obj = {
      id: uuid(),
      pageNum: pageNum,
      type: type,
      list: metersList,
      date: date,
      sum: sum,
      pName: pName,
    };

    setStockData([...StockData, obj]);
  };

  return (
    <StockContext.Provider
      value={{
        StockData,
        addDatatoStock,
      }}
    >
      {props.children}
    </StockContext.Provider>
  );
};

export default StockContextProvider;
