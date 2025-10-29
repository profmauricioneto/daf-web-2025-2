import useFavorite from "./stores/favoriteStore";

const ListFavorites = () => {
  const {removeFavorites } = useFavorite();
  const favorites = useFavorite((state) => state.favorites);
  return (
    <div className="favorites-list">
      <h2>Seus Favoritos ({favorites.length})</h2>
      {favorites.length === 0 ? (
        <p>Nenhum item salvo.</p>
      ) : (
        <ul>
          {favorites.map((product) => (
            <li key={product.id}>
              {product.name} - R$ {product.price}
              <button onClick={() => removeFavorites(product.id)}>
                Remover
              </button>
            </li>
          ))}
        </ul>
      )}

      <div>{favorites}</div>
    </div>
  );
};

export default ListFavorites;
