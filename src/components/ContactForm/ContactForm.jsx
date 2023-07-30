import React from 'react';
import { FormContainer, Label, InputForm, Button } from './ContactForm.styled';
import PropTypes from 'prop-types';

const ContactForm = ({ handleInputChange, handleSubmit }) => {
  return (
    <div>
      <FormContainer onSubmit={handleSubmit}>
        <Label>
          Name
          <InputForm
            type="text"
            placeholder="Name"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleInputChange}
          />
        </Label>
        <Label>
          Number
          <InputForm
            type="tel"
            name="number"
            placeholder="123-45-67"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleInputChange}
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </FormContainer>
    </div>
  );
};

ContactForm.propTypes = {
  handleInputChange: PropTypes.func,
  handleSubmit: PropTypes.func,
};

export default ContactForm;
