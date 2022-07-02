import { Component } from 'react';
import { Title, Text, Btn, FormInput, FormContact } from './ContactForm.styled';

import { Box } from 'components/Box';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = evt => {
    const { name, value } = evt.target;

    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    const { name, number } = this.state;
    evt.preventDefault();

    this.props.onSubmit(name, number);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <Box
        as="section"
        mb="20px"
        mx="auto"
        width="400px"
        border="1px solid"
        p="20px"
      >
        <Title>Phonebook</Title>
        <FormContact onSubmit={this.handleSubmit}>
          <label>
            <Text>Name</Text>
            <FormInput
              type="text"
              value={name}
              onChange={this.handleChange}
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            ></FormInput>
          </label>
          <label>
            <Text>Number</Text>
            <FormInput
              type="tel"
              value={number}
              onChange={this.handleChange}
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            ></FormInput>
          </label>
          <Btn type="submit">Add contact</Btn>
        </FormContact>
      </Box>
    );
  }
}
