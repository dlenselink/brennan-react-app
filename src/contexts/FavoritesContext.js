import { createContext, useContext, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';

const getInitialState = () => {
  const savedFavorites = localStorage.getItem('favoriteVehicles');
  return savedFavorites ? JSON.parse(savedFavorites) : [];
};

const FavoritesContext = createContext();

const favoritesReducer = (state, { type, payload }) => {
  // payload is a number which corresponds to the id of the resource
  switch (type) {
    case 'toggle':
      return {
        ...state,
        favorites: state.favorites.includes(payload)
          ? [...state.favorites].filter((id) => id !== payload)
          : [...state.favorites, payload],
      };
    default:
      throw new Error(`Unhandled action type: ${type}`);
  }
};

const FavoritesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(favoritesReducer, { favorites: getInitialState() });

  useEffect(() => {
    localStorage.setItem('favoriteVehicles', JSON.stringify(state.favorites));
  }, [state.favorites]);

  const value = { state, dispatch };
  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
};

const useFavorites = () => {
  const context = useContext(FavoritesContext);

  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }

  return context;
};

FavoritesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { FavoritesProvider, useFavorites };
