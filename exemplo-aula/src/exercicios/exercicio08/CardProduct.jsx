import React from "react";
import useFavorite from "./stores/favoriteStore";

const CardProduct = ({ product }) => {
  const { addFavorites, removeFavorites, isFavorite } = useFavorite();
  const favorite = isFavorite(product.id);

  return (
    <>
      <div className="m-2 p-3 border-2">
        <h3>{product.name}</h3>
        <p>R$: {product.price}</p>
        <button
          onClick={() =>
            favorite ? removeFavorites(product.id) : addFavorites(product.id)
          }
        >
          {favorite ? "remover dos favores" : "adicionar dos favoritos"}
        </button>
      </div>
    </>
  );
};

export default CardProduct;
