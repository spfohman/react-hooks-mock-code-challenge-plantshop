import React, {useState} from "react";

function PlantCard({plant:{image, price, name}}) {
  const [sold, setSold]= useState(true)
  function onClick(){
    setSold(!sold)
  }
  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {sold ? (
        <button onClick={()=>onClick()} className="primary">In Stock</button>
      ) : (
        <button onClick={()=>onClick()}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
