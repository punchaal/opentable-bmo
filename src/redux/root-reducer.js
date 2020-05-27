import { combineReducers } from 'redux';

import restaurantsReducer from './restaurants/restaurants.reducer';

export default combineReducers({
  results: restaurantsReducer,
});
