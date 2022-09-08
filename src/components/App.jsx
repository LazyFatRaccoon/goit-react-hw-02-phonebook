import AddContactForm from './AddContactForm';
import { Component } from 'react';
import ContactList from './ContactList';
import ContactFilter from './ContactFilter';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

class App extends Component {
  state = {
    contacts: [
      { name: 'Rosie Simpson', telephone: '459-12-56' },
      { name: 'Hermione Kline', telephone: '443-89-12' },
      { name: 'Eden Clements', telephone: '645-17-79' },
      { name: 'Annie Copeland', telephone: '227-91-26' },
    ],
    filter: '',
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(
        contact => contact.name !== contactId
      ),
    }));
  };

  addContact = contact => {
    if (
      this.state.contacts.some(
        element => element.name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      Notify.warning('we already got this contact');
      return;
    }
    this.setState(prevState => ({
      contacts: [
        {
          name: contact.name,
          telephone: contact.telephone,
        },
        ...prevState.contacts,
      ],
    }));
  };

  filterContacts = filter => {
    this.setState({ filter: filter });
  };

  filteredContactsList = () => {
    const filteredList = this.state.contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(this.state.filter.toLowerCase()) ||
        contact.telephone.includes(this.state.filter)
    );
    return filteredList;
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
          padding: '0px 50px',
          gap: '20px',
        }}
      >
        <h1 style={{ margin: '0px' }}>Phonebook</h1>
        <AddContactForm onSubmit={this.addContact} />
        <ContactFilter
          filter={this.state.filter}
          onFilterChange={this.filterContacts}
        />
        <h2 style={{ margin: '0px' }}>Contact list</h2>
        <ContactList
          contacts={this.filteredContactsList()}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
