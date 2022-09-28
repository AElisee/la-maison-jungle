import React, { useState } from "react";
import { plantList } from "../data/ShoppingList";
import PlantCart from "./PlantCart";

const categories = ["classique", "extérieur", "plante grasse"];

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState();
  return (
    <div className="shop">
      <div className="sort-container">
        <div>
          <select
            value={activeCategory}
            onChange={(e) => setActiveCategory(e.target.value)}
          >
            <option value="">Toutes les catégories</option>
            {categories.map((category, index) => (
              <option value={category} key={index}>
                {category}
              </option>
            ))}
          </select>
          <input
            type="submit"
            value="Réintinaliser"
            onClick={() => setActiveCategory("")}
          />
        </div>
      </div>
      <ul className="plant-container">
        {activeCategory !== ""
          ? plantList
              .filter((plant) => plant.category === activeCategory)
              .map((plant, index) => <PlantCart plant={plant} key={index} />)
          : plantList.map((plant, index) => (
              <PlantCart plant={plant} key={index} />
            ))}
      </ul>
    </div>
  );
};

export default Shop;
