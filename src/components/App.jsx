import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import { nanoid } from 'nanoid';
import { addContact, addFilter } from '../redux/actions';
// импорт тестового списка контактов
// import defaultData from './data/data';


function App() {
  const [contacts, setContacts] = useState(() => (JSON.parse(window.localStorage.getItem('contacts')) ?? []));

  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const dispatch = useDispatch();

  const formSubmitData = (data) => {
    const objName = {
        id: nanoid(),
        name: data.name,
        number: data.number,
        }
    // setContacts(prev => [objName, ...prev]);
    dispatch(addContact(objName));
  }

  const filterChange = e => {
    // setFilter(e.currentTarget.value);
    dispatch(addFilter(e.currentTarget.value));
  }

  const toDoFilter = () => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  }

  const checkFunction = (name) => (contacts.some(v => v.name.toLowerCase() === name.toLowerCase())); 

  return <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={formSubmitData} check={checkFunction} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={filterChange}/>
        <ContactList contacts={toDoFilter()} />
    </div>
}

// ===============================================
// class App extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   }

//   componentDidMount() {
//     // запись тестового списка в локал сторедж
//     // localStorage.setItem('contacts', JSON.stringify(defaultData));

//     const savedContacts = localStorage.getItem('contacts');
//     const parsedContacts = JSON.parse(savedContacts);

//     if (parsedContacts) {
//       return this.setState({ contacts: parsedContacts });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       console.log('updated!!!!!!');

//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   formSubmitData = (data) => {
//     const objName = {
//         id: nanoid(),
//         name: data.name,
//         number: data.number,
//         }
    
//     this.setState(p => (
//       { contacts: [objName, ...p.contacts], }));
//   }

//   filterChange = e => {
//     this.setState({ filter: e.currentTarget.value });
//   }

//   toDoFilter = () => {
//     const { contacts, filter } = this.state;
//     return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
//   }

//   checkFunction = (name) => {
//     return this.state.contacts.some(v => v.name.toLowerCase() === name.toLowerCase()); 
//   }

//   toDeleteContact = (id) => {
//     this.setState(p => ({
//       contacts: p.contacts.filter(e => e.id !== id)
//     }))
//   };

//   render() {
//     const contactsArr = this.toDoFilter();
    
//     return (
//       <div>
//         <h1>Phonebook</h1>
//         <ContactForm onSubmit={this.formSubmitData} check={this.checkFunction} />
//         <h2>Contacts</h2>
//         <Filter value={this.state.filter} onChange={this.filterChange}/>
//         <ContactList contacts={contactsArr} toDelete={this.toDeleteContact}/>
//     </div>
//     )
    
//   };
// };

export default App;