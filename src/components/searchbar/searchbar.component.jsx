import React, { useState } from 'react';
import axios from 'axios';
import config from '../../config';
import { connect } from 'react-redux';
import { setRestaurants } from '../../redux/restaurants/restaurants.actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './searchbar.styles.css';

function SearchBar(props) {
  const [formData, setFormData] = useState({
    city: '',
  });

  const [error, setError] = useState({
    error: false,
    msg: '',
  });

  const endpoint = config.API_ENDPOINT;
  const { city } = formData;

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const searchResults = await axios.get(
        `${endpoint}/restaurants?city=${city}`
      );

      props.setRestaurants({
        results: searchResults.data.restaurants,
      });
    } catch (err) {
      console.error(error.message);
      setError({ error: true, msg: error.message });
    }
  };

  const onChange = (e) => {
    setFormData({ city: e.target.value });
  };

  return (
    <div className='searchbox'>
      <form
        role='search'
        onSubmit={(e) => onSubmit(e)}
        id='restaurant-search'
        className='search-form'
      >
        <fieldset name='city-name'>
          <legend className='search-info'>
            Type the name of the city to see available restaurants
          </legend>
          <div className='wrap'>
            <div className='search'>
              <input
                id='searchbycity'
                type='text'
                placeholder='Search by city name...'
                value={city}
                name={city}
                onChange={(e) => onChange(e)}
                className='search-term'
                aria-label='Search Restaurants By City'
              />
              <button
                type='submit'
                className='search-button'
                aria-label='Search'
              >
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setRestaurants: (results) => dispatch(setRestaurants(results)),
});

export default connect(null, mapDispatchToProps)(SearchBar);
