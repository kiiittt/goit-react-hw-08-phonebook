import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/contactsSlice';
import { getFilter } from '../../redux/selectors';
import css from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);

  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <label className={css.label}>
      <span className={css.findTitle}>Find contacts by name</span>
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="search..."
      />
    </label>
  );
};

Filter.propTypes = {
  searchName: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
};

export default Filter;
