import React from "react";

function Card(props) {
  const { name, imgSrc } = props;

  return (
    <div className="card">
      <img src={imgSrc} alt={name} />
      <div className="card-title">{name}</div>
    </div>
  );
}

export default Card;
