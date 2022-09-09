import React from 'react';
import css from './Contact.module.css';
import PropTypes from 'prop-types';
import { FaTrashAlt } from 'react-icons/fa';

const Contact = ({ contact, onDeleteContact }) => {
  return (
    <li className={css.li}>
      <span>
        {contact.name} {contact.telephone}{' '}
      </span>
      <button
        className={css.button}
        type="button"
        onClick={() => onDeleteContact(contact.id)}
      >
        <FaTrashAlt className={css.icon} size={40} />
      </button>
    </li>
  );
};

Contact.propTypes = {
  contact: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    telephone: PropTypes.string.isRequired,
  }).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default Contact;
