import { useId } from 'react';
import PropTypes from 'prop-types';

import css from './SearchBox.module.css';

const SearchBox = ({ value, handleChange }) => {
  const searchFieldId = useId();

  return (
    <div className={css.wrapper}>
      <label htmlFor={searchFieldId}>Find contacts by name</label>
      <input
        className="input"
        type="text"
        value={value}
        onChange={handleChange}
        id={searchFieldId}
      />
    </div>
  );
};

SearchBox.SearchBox = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default SearchBox;
