import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { deleteContact } from '../../redux/contactsSlice';
import { getContacts, getFilter } from 'redux/selectors';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';


const notify = {
  error: message => toast.error(message),
  success: message => toast.success(message),
};

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContact(id));
    notify.success('Contact deleted');
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <ToastContainer />
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
    </div>
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
