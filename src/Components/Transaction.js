import React from "react";
import { useParams } from "react-router-dom";

export const Transaction = () => {
  const { id } = useParams();

  return (
    <div className="container">
      <h1>{id}</h1>
    </div>
  );
};
