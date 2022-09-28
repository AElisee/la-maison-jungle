import React, { useState } from "react";

const Cart = () => {
  const [isClose, setIsClose] = useState(false);
  return (
    <div className="cart">
      {isClose ? (
        <button
          onClick={() => {
            setIsClose(false);
          }}
        >
          Ouvrir le panier
        </button>
      ) : (
        <button
          onClick={() => {
            setIsClose(true);
          }}
        >
          Fermer le panier
        </button>
      )}
    </div>
  );
};

export default Cart;
