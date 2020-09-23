import React, { useContext, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { CustomerContext } from "../Context/CustomerContext";

export const Transaction = () => {
  const { id } = useParams();
  const { customer, selectCustomer, addTransacation } = useContext(
    CustomerContext
  );

  useEffect(() => {
    selectCustomer(id);
  }, []);

  const history = useHistory();

  const clickHandle = () => {
    const totalBill = document.getElementById("bill").value;
    const paid = document.getElementById("paid").value;
    const date = document.getElementById("date").value;
    if (paid === "" || date === "") {
      window.alert("Please Fill In All Fields");
      return;
    }

    if (window.confirm("Are you sure want to add this transaction?")) {
      addTransacation(id, date, totalBill, paid);
      history.push("/account/CustomerAccounts");
    }
  };

  return (
    <div className="row margtop">
      <div className="col-4"></div>
      <div className="col-4">
        <div className="form-group margtopmore">
          <label htmlFor="bill">Total Bill:</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter Total Bill"
            id="bill"
            defaultValue="0"
          />
        </div>
        <br></br>
        <div className="form-group">
          <label htmlFor="paid">Paid:</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter paid amount"
            id="paid"
          />
        </div>
        <div className="form-group">
          <label htmlFor="paid">Date:</label>
          <input type="date" className="form-control" id="date" />
        </div>
        <button type="button" className="btn btn-info" onClick={clickHandle}>
          Add Transaction
        </button>
      </div>
      <div className="col-4"></div>
    </div>
  );
};
