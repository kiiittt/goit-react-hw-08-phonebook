import React, { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getContacts } from '../../redux/selectors';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css'

const notify = {
  error: message => toast.error(message),
  success: message => toast.success(message),
};

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (name.trim() !== '' && number.trim() !== '') {
      const isExistingContact = contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      );

      if (isExistingContact) {
        toast.error(`${name} is already in contacts`);
        return;
      }

      const newContact = {
        id: nanoid(),
        name: name.trim(),
        number: number.trim(),
      };

      dispatch(addContact(newContact));
      setName('');
      setNumber('');

      notify.success(`${newContact.name} added to contacts`);
    }
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
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Name"
        />
      </label>
      <label  className={css.label}>
        <input
          className={css.input}
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
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

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
