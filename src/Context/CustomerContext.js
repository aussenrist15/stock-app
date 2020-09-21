import React, { createContext, useState } from "react";
import { v4 as uuid } from "uuid";

export const CustomerContext = createContext();

export const CustomerContextProvider = (props) => {
  const obj1 = {
    id: 1,
    date: "25-9-2020",
    totalBal: 1000,
    name: "Ayesha",
  };
  const obj2 = {
    id: 2,
    date: "26-9-2020",
    totalBal: 1000,
    name: "Basit",
  };
  const [customers, setCustomers] = useState([obj1, obj2]);
  const [customer, setCustomer] = useState(null);
  const [tempCustomerforEditing, setTemp] = useState(null);

  const [transactions, setTransactions] = useState([]);

  const addTransacation = (customerID, date, totalBill, paid) => {
    setTransactions([
      ...transactions,
      {
        customerID,
        date,
        totalBill,
        paid,
      },
    ]);

    customers.forEach((item) => {
      if (item.id == customerID) setTemp(item);
    });

    setCustomers(
      customers.filter((item) => {
        return item.id === customerID;
      })
    );
    const diff = totalBill - paid;
    tempCustomerforEditing.totalBal = tempCustomerforEditing.totalBal + diff;
  };

  const addCustomer = (totalBal, name) => {
    const obj = {
      id: uuid(),
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
