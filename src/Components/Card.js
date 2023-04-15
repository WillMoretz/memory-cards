import React from "react";

function Card(props) {
  const { name, imgSrc, isLoaded } = props;

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <div className="card">
      <img src={imgSrc} alt={name} />
      <div className="card-title">{name}</div>
    </div>
  );
}

export default Card;
