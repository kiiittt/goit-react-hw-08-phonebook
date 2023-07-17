import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getContacts, getError } from '../../redux/contacts/selectors';
import css from './ContactForm.module.css';

const notify = {
  error: message => toast.error(message),
  success: message => toast.success(message),
};

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setNumber] = useState('');

  const contacts = useSelector(getContacts);
  const error = useSelector(getError);

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;
    name === 'name' ? setName(value) : setNumber(value);
  };

  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    if (name.trim() !== '' && phone.trim() !== '') {
      const isExistingContact = contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      );

      if (isExistingContact) {
        toast.error(`${name} is already in contacts`);
        return;
      }

      if (error) {
        notify.error('problem with server');
        return;
      }

      dispatch(addContact({ name, phone }));
      notify.success(`${name} adding to contacts`);
      reset();
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <div>
      <ToastContainer />
      <form onSubmit={handleSubmit} className={css.form}>
        <label className={css.label}>
          <input
            className={css.input}
            type="text"
            name="name"
            value={name}
            onChange={handleInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="Name"
          />
        </label>
        <label className={css.label}>
          <input
            className={css.input}
            type="tel"
            name="number"
            value={phone}
            onChange={handleInputChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="Phone number"
          />
        </label>
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
