import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import css from './ContactList.module.css';
import { getContacts, getStatusFilter } from 'redux/selectors';

// const notify = {
//   error: message => toast.error(message),
//   success: message => toast.success(message),
// };

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getStatusFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const [isConfirmingDelete, setIsConfirmingDelete] = useState(false);


  const handleDeleteClick = () => {
    setIsConfirmingDelete(true);
  };


  return (
    <div>
      <ul className={css.ul}>
        {filteredContacts.map(contact => (
          <li key={contact.id} contact={contact} className={css.li}>
            <span className={css.name}>{contact.name}:</span>
            <span className={css.tel}>{contact.number}</span>
            <button
              className={css.btn}
              type="button"
              onClick={() => handleDeleteClick(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
