import React, { createContext, useState } from "react";
import { v4 as uuid } from "uuid";

export const CustomerContext = createContext();

export const CustomerContextProvider = (props) => {
  const obj1 = {
    id: 1,
    date: "25-9-2020",
    credit: 100,
    debit: 400,
    totalBal: 1000,
    name: "Ayesha",
  };
  const obj2 = {
    id: 2,
    date: "26-9-2020",
    credit: 1000,
    debit: 400,
    totalBal: 1000,
    name: "Basit",
  };
  const [customers, setCustomers] = useState([obj1, obj2]);
  const [customer, setCustomer] = useState(obj1);

  const addCustomer = (date, credit, debit, totalBal, name) => {
    const obj = {
      id: uuid(),
      date,
      credit,
      debit,
      totalBal,
      name,
    };
    setCustomers([...customers, obj]);
    customers.sort((a, b) => a.name.localeCompare(b.name));
  };

  const selectCustomer = (id) => {
    const obj = customers.forEach((item) => {
      if (item.id == id) setCustomer(item);
    });
  };

  return (
    <CustomerContext.Provider
      value={{ customer, customers, addCustomer, selectCustomer }}
    >
      {props.children}
    </CustomerContext.Provider>
  );
};
