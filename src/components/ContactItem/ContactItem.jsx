import s from './ContactItem.module.css';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { deleteItem } from '../../redux/actions';

function ContactItem() {
    const contactsStore = useSelector(state => state.contacts.items);
    const dispatch = useDispatch();
    const deleteBtn = (contact) => {dispatch(deleteItem(contact.id))
};

    return (
        contactsStore.map(contact => {
                return (
                    <li key={contact.id} className={s.item}><p className={s.itemNumber}>{contact.name}: {contact.number}</p>
                    <button className={s.button} onClick={deleteBtn(contact)} >Delete</button>
                    </li>
                );
            })
        );
}

ContactItem.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
    toDelete: PropTypes.func,
}

export default ContactItem;