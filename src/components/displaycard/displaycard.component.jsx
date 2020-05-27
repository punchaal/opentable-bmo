import React from 'react';
import { connect } from 'react-redux';
import { selectRestaurantsFilter } from '../../redux/restaurants/restaurants.selectors';
import './displaycard.styles.css';

function DisplayCard(props) {
  return (
    <ul id='restaurant-results' aria-live='polite' className='grid-container'>
      {props.setRestaurants &&
        props.setRestaurants.map((restaurant) => (
          <li className='cards' key={restaurant.id}>
            <img src={restaurant.image_url} alt='restaurant' />
            <div className='container'>
              <h3>
                <b>{restaurant.name}</b>
              </h3>
              <p>{restaurant.address}</p>
              <ul className='price' id='price'>
                {[...Array(restaurant.price)].map((e, i) => {
                  return (
                    <li key={i} className='price-list'>
                      $
                    </li>
                  );
                })}
              </ul>
              <p>{restaurant.area}</p>
            </div>
          </li>
        ))}
    </ul>
  );
}

const mapStateToProps = (state) => ({
  setRestaurants: selectRestaurantsFilter(state),
});

export default connect(mapStateToProps)(DisplayCard);
