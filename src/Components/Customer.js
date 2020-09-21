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

  const table = (
    <table classNameName="table table-hover ">
      <thead classNameName="thead-dark">
        <tr>
          <th>Date</th>
          <th>Total Balance</th>
          <th>*</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  );

  const retval = isLoaded ? (
    <div className="page-content page-container" id="page-content">
      <div className="padding">
        <div className="row container d-flex justify-content-center">
          <div className="col-md-5">
            <div className="card">
              <div className="card-body text-center">
                <div>
                  {" "}
                  <img
                    src="https://img.icons8.com/bubbles/100/000000/administrator-male.png"
                    className="img-lg rounded-circle mb-4"
                    alt="profile image"
                  />
                  <h4>{customer.name}</h4>
                  <h5 className="text-muted">Total Balance:</h5>
                  <h4>{customer.totalBal}</h4>
                </div>
              </div>
            </div>
            <h1>Test</h1>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <h1>Loading</h1>
  );

  return <div classNameName="container">{retval}</div>;
};
