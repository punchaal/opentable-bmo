import { createSelector } from 'reselect';

const selectResults = (state) => state.results;

export const selectRestaurants = createSelector(
  [selectResults],
  (results) => results.restaurants
);

export const selectQuery = createSelector(
  [selectResults],
  (results) => results.query
);

export const selectFilterType = createSelector(
  [selectResults],
  (results) => results.filter
);

export const selectRestaurantsFilter = createSelector(
  [selectRestaurants, selectQuery, selectFilterType],
  (restaurants, query, filter) =>
    restaurants.filter((restaurant) =>
      restaurant[filter].match(new RegExp(query, 'i'))
    )
);
