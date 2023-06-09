import React from 'react';
import css from './ContactList.module.css';
import PropTypes from 'prop-types';

const ContactList = ({ filteredContacts, onDeleteContact }) => {
  const handleDelete = contactId => {
    onDeleteContact(contactId);
  };

  return (
    <ul className={css.ul}>
      {filteredContacts.map(contact => (
        <li key={contact.id} className={css.li}>
          <span className={css.name}>{contact.name}:</span>
          <span className={css.tel}>{contact.number}</span>
          <button
            className={css.btn}
            type="button"
            onClick={() => handleDelete(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
