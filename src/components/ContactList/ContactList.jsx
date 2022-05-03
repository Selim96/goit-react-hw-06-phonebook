import { useSelector } from 'react-redux';
import ContactItem from '../ContactItem';
import s from './ContactList.module.css';

export default function ContactList() {
    const contactsStore = useSelector(state => state.contacts.items);
    const filterValue = useSelector(state => state.contacts.filter);
    
    const filteredItems = () => {
        if (filterValue.trim() !== '') {
            return contactsStore.filter(contact => contact.name.toLowerCase().includes(filterValue.toLowerCase()));
        }
        return contactsStore;
    };

    return (
        <ul className={s.list}>
            <ContactItem contacts={filteredItems()}/>
        </ul>
    );
}

// ContactList.propTypes = {
//     contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
//     toDelete: PropTypes.func,
// }