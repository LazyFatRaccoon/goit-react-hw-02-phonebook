import React from 'react';
import css from './ContactFilter.module.css';
import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';

const ContactFilter = ({ filter, onFilterChange }) => {
  return (
    <div className={css.div}>
      <input
        className={css.input}
        type="text"
        onChange={e => onFilterChange(e.currentTarget.value)}
        value={filter}
      ></input>
      <FaSearch className={css.icon} size={40} />
    </div>
  );
};

ContactFilter.propTypes = {
    filter: PropTypes.string.isRequired,
    onFilterChange: PropTypes.func.isRequired,
};

export default ContactFilter;
