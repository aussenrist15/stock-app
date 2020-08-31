import React, { useContext } from "react";
import { CalculatorContext } from "../Context/CalculatorContext";

const Calculator = () => {
  const {
    sum,
    addSum,
    metersList,
    addNumToList,
    removeNumFromList,
    clearAll,
  } = useContext(CalculatorContext);

  const listValues = metersList.map((listItem) => {
    return (
      <li
        className="list-group-item"
        key={listItem.id}
        onClick={() => {
          removeNumFromList(listItem);
        }}
      >
        {listItem.num}
      </li>
    );
  });

  function alert(message) {
    document.getElementById("alert-msg").innerHTML = message; // set message text
    if (document.getElementById("alert").classList.contains("d-none"))
      document.getElementById("alert").classList.remove("d-none"); // Display alert-box
  }

  const closeAlert = () => {
    document.getElementById("alert").classList.add("d-none"); // hide alert-box
    document.getElementById("alert-msg").innerHTML = ""; // reset message
  };

  const handleButtonPress = () => {
    if (document.getElementById("number").value === "") {
      alert("Please Enter A Number");
      return;
    }
    const num = document.getElementById("number").value;
    addSum(num);
    addNumToList(num);
    document.getElementById("number").value = null;
  };

  const clearStuff = () => {
    clearAll();
  };

  return (
    <div className="tilebg">
      <div className="container ">
        <div className="row">
          <div className="col">
            <div className="form-group ">
              <label className="margtopmore">Meters:</label>
              <input
                type="number"
                className="form-control inpt"
                placeholder="Enter number"
                id="number"
              />
              <div
                className="alert alert-danger clearfix d-none margtop"
                role="alert"
                id="alert"
              >
                <span id="alert-msg"></span>
                <button
                  type="button"
                  className="btn btn-sm btn-danger float-right"
                  onClick={closeAlert}
                >
                  X
                </button>
              </div>
            </div>

            <button className="btn btn-primary" onClick={handleButtonPress}>
              ADD
            </button>

            <div className="card margtopmore width50">
              <div className="card-header">SUM</div>
              <div className="card-body">
                <h1>{sum}</h1>
              </div>
            </div>
          </div>

          <div className="col">
            <h2 className="margtop">List of meters added</h2>

            <ul className="list-group list-group-flush margtop">
              {listValues}
            </ul>

            <button className="btn btn-success margtop" onClick={clearStuff}>
              Clear ALL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
