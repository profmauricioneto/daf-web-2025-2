import React from "react";
import ListFavorites from "./ListFavorites";
import CardProduct from "./CardProduct";

const AppFavorite = () => {
  const products = [
    { id: 1, name: "paçoquita", price: 5 },
    { id: 2, name: "beijinho", price: 10 },
    { id: 3, name: "goibada", price: 25 },
    { id: 4, name: "doce de leite", price: 15 },
  ];

  return (
    <>
      <div className="app">
        <h1>Loja Online</h1>
        <div className="products">
          {products.map((product) => (
            <CardProduct key={product.id} product={product} />
          ))}
        </div>
        <ListFavorites />
      </div>
    </>
  );
};

export default AppFavorite;
