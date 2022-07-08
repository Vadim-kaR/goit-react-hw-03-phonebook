import { Component } from 'react';
import { ContactsList } from 'components/ContatsList/ContacstsList';
import { ContactForm } from './components/ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import { Filter } from 'components/Filter/Filter';
import { ContactsTitle } from 'components/ContactsTitle/ContactsTitle';
import { Box } from 'components/Box/Box';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  getFiltredContact = () => {
    const { contacts, filter } = this.state;
    const lowerCasedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(lowerCasedFilter)
    );
  };

  setFilterName = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  handelContactSubmit = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    const { contacts } = this.state;
    const alreadyName = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (alreadyName) {
      alert(`${name} is already in contacts.`);
      return;
    }

    this.setState(({ contacts }) => {
      return {
        contacts: [newContact, ...contacts],
      };
    });
  };

  deleteContact = id => {
    this.setState(({ contacts }) => {
      return {
        contacts: contacts.filter(contact => contact.id !== id),
      };
    });
  };

  render() {
    const { filter } = this.state;
    const filtredContacts = this.getFiltredContact();
    return (
      <>
        <Box pt="l" display="flex" justifyContent="center">
          <Box
            width="400px"
            height="400px"
            p="l"
            bg="accent"
            flexDirection="column"
            display="flex"
            alignItems="center"
            overflow="hidden"
          >
            <h1>PhoneBook</h1>
            <ContactForm onSubmit={this.handelContactSubmit} />
            <ContactsTitle />
            <Filter getName={this.setFilterName} value={filter} />
            <ContactsList
              data={filtredContacts}
              onDelete={this.deleteContact}
            />
          </Box>
        </Box>
      </>
    );
  }
}

export { App };
