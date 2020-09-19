import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CustomerContext } from "../Context/CustomerContext";

const CustomerAccount = () => {
  const { customers, addCustomer } = useContext(CustomerContext);

  const retval =
    customers.length === 0 ? (
      <h1>No Data Found</h1>
    ) : (
      customers.map((item) => {
        const data =
          item.totalBal < 0 ? (
            <tr className="table-danger">
              <td>{item.name}</td>
              <td>{item.totalBal}</td>
              <td>
                <Link
                  to={`/Accounts/SingleCustomer/${item.id}`}
                  className="btn btn-dark"
                >
                  View Details
                </Link>
              </td>
            </tr>
          ) : (
            <tr className="table-info">
              <td>{item.name}</td>
              <td>{item.totalBal}</td>
              <td>
                <Link
                  to={`/Accounts/SingleCustomer/${item.id}`}
                  className="btn btn-dark"
                >
                  View Details
                </Link>
              </td>
            </tr>
          );
        return data;
      })
    );

  return (
    <div className="container con">
      <table className="table table-hover ">
        <thead className="thead-dark">
          <tr>
            <th>Customer Name</th>
            <th>Total Balance</th>
            <th>*</th>
          </tr>
        </thead>
        <tbody>{retval}</tbody>
      </table>
    </div>
  );
};

export default CustomerAccount;
