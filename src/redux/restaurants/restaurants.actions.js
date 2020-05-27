import { RestaurantActionTypes } from './restaurants.types';

export const setRestaurants = (results) => ({
  type: RestaurantActionTypes.SET_RESTAURANTS,
  payload: results,
});

export const setSearchTerm = (query) => ({
  type: RestaurantActionTypes.SET_SEARCHTERM,
  payload: query,
});

export const setFilterType = (filter) => ({
  type: RestaurantActionTypes.SET_FILTERTYPE,
  payload: filter,
});
