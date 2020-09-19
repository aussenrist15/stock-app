import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CustomerContext } from "../Context/CustomerContext";

export const Customer = () => {
  const { selectCustomer, customer, customers } = useContext(CustomerContext);
  const { id } = useParams();
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    selectCustomer(id);
    setLoaded(true);
  }, []);

  const retval = isLoaded ? <h1>{customer.name}</h1> : <h1>Loading</h1>;

  return <div className="container">{retval}</div>;
};
