import React from 'react';
import SearchBar from '../components/searchbar/searchbar.component';
import DisplayCard from '../components/displaycard/displaycard.component';
import FilterDropDown from '../components/filterdropdown/filterdropdown.component';
import './landing.page.styles.css';

export default function LandingPage() {
  return (
    <div>
      <div className='background-hero'>
        <SearchBar />
        <FilterDropDown />
      </div>
      <DisplayCard />
    </div>
  );
}
