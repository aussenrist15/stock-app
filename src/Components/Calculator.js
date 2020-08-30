import React from "react";

const Calculator = () => {
  return (
    <div className="container">
      <div className="form-group">
        <label>Meters:</label>
        <input
          type="text"
          className="form-control inpt"
          placeholder="Enter number"
          id="number"
        />
      </div>

      <button className="btn btn-primary">ADD</button>
    </div>
  );
};

export default Calculator;
