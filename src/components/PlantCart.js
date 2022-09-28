import React from "react";

const PlantCart = ({ plant }) => {
  return (
    <li className="plant">
      <div className="cover">
        <img src={plant.cover} alt={plant.name} />
      </div>
      <div>
        <h3 id="plant-name">{plant.name}</h3>
        <span id="price">{plant.price}€</span>
        <input
          type="submit"
          value="Ajouter au panier"
          onClick={(e) => console.log(e.target)}
        />
      </div>
    </li>
  );
};

export default PlantCart;
