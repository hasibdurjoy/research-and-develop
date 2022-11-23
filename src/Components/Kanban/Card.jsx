import React from "react";

const Card = ({ children: card }) => {
  return (
    <div
      className="card rounded-5 mb-3"
      style={{ width: "18rem", backgroundColor: `rgb(${card.status?.color})` }}
    >
      <div className="card-body">
        <h5 className="card-title">{card?.name}</h5>
        <p className="card-text">{card?.description}</p>
        <p className="card-text">{card?.status?.name}</p>
      </div>
    </div>
  );
};

export default Card;
