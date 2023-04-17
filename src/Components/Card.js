import React from "react";

function Card(props) {
  const { name, imgSrc, id, handleClick } = props;

  return (
    <button type="button" className="card" onClick={() => handleClick(id)}>
      <img src={imgSrc} alt={name} />
      <div className="card-title">{name}</div>
    </button>
  );
}

export default Card;
