import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import css from './ContactList.module.css';
import { getContacts, getStatusFilter } from '../../redux/contacts/selectors';
import DeleteConfirmation from './DeleteConfirmation/DeleteConfirmation';


// const notify = {
//   error: message => toast.error(message),
//   success: message => toast.success(message),
// };

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getStatusFilter);
  // const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const [isConfirmingDelete, setIsConfirmingDelete] = useState(false);

  const handleDeleteClick = () => {
    setIsConfirmingDelete(true);
  };

  const handleCancelDelete = () => {
    setIsConfirmingDelete(false);
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
            {isConfirmingDelete && (
              <DeleteConfirmation
                contact={contact}
                onCancel={handleCancelDelete}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
