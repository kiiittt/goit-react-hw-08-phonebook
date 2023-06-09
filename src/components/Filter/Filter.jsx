import React from 'react';
import css from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ searchName, onSearchChange }) => {
  const contactId = 'someUniqueId'; 

  return (
    <label htmlFor={contactId} className={css.label}>
      <span className={css.findTitle}>Find contacts by name</span>
      <input
        className={css.input}
        type="text"
        id={contactId}
        value={searchName}
        onChange={onSearchChange}
        placeholder="Please enter a name"
      />
    </label>
  );
};

Filter.propTypes = {
  searchName: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
};

export default Filter;
