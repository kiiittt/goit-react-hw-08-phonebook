import React from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { deleteContact } from 'redux/contacts/operations';
import css from './DeleteConfirmation.module.css';

const DeleteConfirmation = ({ contact, onCancel }) => {
  const dispatch = useDispatch();

  const handleConfirmDelete = () => {
    dispatch(deleteContact(contact.id));
    if (deleteContact) {
      toast.success(`${contact.name} deleted`);
    }
    onCancel();
  };

  return (
    <div className={css.backdrop}>
      <div className={css.modal}>
        <p className={css.text}>
          Are you sure you want to delete this contact?
        </p>
        <div className={css.btnDiv}>
          <button onClick={handleConfirmDelete} className={css.btn}>
            Delete
          </button>
          <button onClick={onCancel} className={css.btn}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmation;
