import React, { useState } from 'react';
import { selectRestaurantsFilter } from '../../redux/restaurants/restaurants.selectors';
import { connect } from 'react-redux';
import { setSearchTerm } from '../../redux/restaurants/restaurants.actions';
import { setFilterType } from '../../redux/restaurants/restaurants.actions';
import './filterdropdown.styles.css';

function FilterDropDown(props) {
  const [formData, setFormData] = useState({
    query: '',
  });

  const { query, value } = formData;

  const onChangeSelect = (e) => {
    props.setFilterType({ filter: e });
  };

  const onChange = (e) => {
    setFormData({ query: e.target.value });
    props.setSearchTerm({ query: e.target.value });
  };

  return (
    <div className='center'>
      <h3 className='filter-heading'>Filter by:</h3>

      <div className='filter center'>
        <select
          name='filter'
          id='filter'
          defaultValue={value}
          onChange={(e) => onChangeSelect(e.target.value)}
          aria-label='Select filter by attribute'
        >
          <option value='name'>Name</option>
          <option value='address'>Address</option>
          <option value='area'>Area</option>
        </select>
        <input
          type='text'
          placeholder='Enter keyword...'
          value={query}
          name={query}
          onChange={(e) => onChange(e)}
          className='filter-term'
          aria-label='Refine results which include give keyword'
        />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  filteredResults: selectRestaurantsFilter(state),
});

const mapDispatchToProps = (dispatch) => ({
  setSearchTerm: (query) => dispatch(setSearchTerm(query)),
  setFilterType: (filter) => dispatch(setFilterType(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterDropDown);
