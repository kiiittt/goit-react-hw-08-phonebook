import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
import css from './Filter.module.css';
import SearchIcon from '@mui/icons-material/Search';

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    const filterValue = event.target.value;
    dispatch(setFilter(filterValue));
  };

  return (
    <label className={css.label}>
      <span className={css.findTitle}>
        <SearchIcon sx={{ marginRight: '10px' }} />
        Find contacts by name
      </span>
      <input
        className={css.input}
        type="text"
        onChange={handleFilterChange}
        placeholder="search..."
      />
    </label>
  );
};

export default Filter;
