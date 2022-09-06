import React from 'react';
import css from './ContactList.module.css';
import Contact from './Contact';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, filter, onDeleteContact }) => {
  return (
    <ul className={css.ul}>
      {contacts.map(contact => {
        if (
          contact.name.toLowerCase().includes(filter.toLowerCase()) ||
          contact.telephone.includes(filter)
        ) {
          return (
            <Contact
              key={contact.id}
              contact={contact}
              onDeleteContact={onDeleteContact}
            />
          );
        }
        return '';
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      telephone: PropTypes.string.isRequired,
    })
  ),
  filter: PropTypes.string,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
