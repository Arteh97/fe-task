import React from 'react';

const Filter = ({ filters, onChange }) => {
  return (
    <div className="filter">
      <h3 className="filter__heading">Filters</h3>
      <div className="filter__group">
        <label htmlFor="price">Price:</label>
        <select id="price" name="price" value={filters.price} onChange={onChange}>
          <option value="">All</option>
          <option value="0-99">0-£99</option>
          <option value="100-149">£100 to £149</option>
          <option value="150-199">£150 to £199</option>
          <option value="200-249">£200 to £249</option>
          <option value="250-299">£250 to £299</option>
          <option value="300-349">£300 to £349</option>
          <option value="350-399">£300 to £349</option>
          <option value="400-999">£400 and above</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
