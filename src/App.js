import React from "react";
import Banner from "./components/Banner";
import Cart from "./components/Cart";
import Shop from "./components/Shop";

const App = () => {
  return (
    <div className="app">
      <Banner />
      <main>
        <Cart />
        <Shop />
      </main>
    </div>
  );
};

export default App;
