import { create } from "zustand";

const useFavorite = create((set, get) => ({
  favorites: [],
  addFavorites: (product) =>
    set((state) => ({
      favorites: [...state.favorites, product]
    })),
  removeFavorites: (id) => 
    set((state) => ({
        favorites: state.favorites.filter((item) => item.id !== id)
    })),
    isFavorite: (id) => {
        return useFavorite.get().favorites.some((item) => item.id === id)
    }
}));

export default useFavorite;