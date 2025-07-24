import { useState, useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import SearchBox from './SearchBox/SearchBox';
import ContactList from './ContactList/ContactList';

import './App.css';
import initialContactsData from '../contacts.json';

function App() {
  const [contactsData, setContactsData] = useState(() => {
    const savedObject = window.localStorage.getItem('saved-contacts-data');

    if (savedObject !== null) {
      return JSON.parse(savedObject);
    }

    return initialContactsData;
  });
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    window.localStorage.setItem(
      'saved-contacts-data',
      JSON.stringify(contactsData)
    );
  }, [contactsData]);

  const visibleContactsData = contactsData.filter(({ name }) =>
    name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const onChangeSearchValue = evt => {
    setSearchValue(evt.target.value);
  };

  const onAddContact = data => {
    setContactsData(prev => [...prev, data]);
  };

  const onDeleteContact = id => {
    setContactsData(prev => prev.filter(el => id !== el.id));
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm handleAdd={onAddContact} />
      <SearchBox value={searchValue} handleChange={onChangeSearchValue} />
      <ContactList
        contactsData={visibleContactsData}
        handleDelete={onDeleteContact}
      />
    </>
  );
}

export default App;
