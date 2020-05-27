import { RestaurantActionTypes } from './restaurants.types';

const INITIAL_STATE = {
  restaurants: [],
  query: '',
  filter: 'name',
};

const restaurantsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RestaurantActionTypes.SET_RESTAURANTS:
      return {
        ...state,
        restaurants: action.payload.results,
      };
    case RestaurantActionTypes.SET_SEARCHTERM:
      return {
        ...state,
        query: action.payload.query,
      };
    case RestaurantActionTypes.SET_FILTERTYPE:
      return {
        ...state,
        filter: action.payload.filter,
      };
    default:
      return state;
  }
};

export default restaurantsReducer;
