import React, { useState } from 'react';
import contactform from './ContactForm.module.css';

function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return new Error(`Something went wrong in ContactForm`);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({
      name,
      number,
    });
    setName('');
    setNumber('');
  };

  return (
    <form className={contactform.form} action="submit" onSubmit={handleSubmit}>
      <div className={contactform.container}>
        <label className={contactform.label}>
          <span className={contactform.label__title}>Name</span>
          <input
            className={contactform.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleInputChange}
          />
        </label>
        <label className={contactform.label}>
          <span className={contactform.label__title}>Number</span>
          <input
            className={contactform.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleInputChange}
          />
        </label>
        <button className={contactform.button} type="submit">
          Add contact
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
