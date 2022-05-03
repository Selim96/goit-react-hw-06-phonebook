import s from './ContactItem.module.css';
import PropTypes from 'prop-types';
import {  useDispatch } from 'react-redux';
import { deleteItem } from '../../redux/actions';

function ContactItem({contacts}) {
    const dispatch = useDispatch();
    const deleteBtn = (contact) => {dispatch(deleteItem(contact.id))
};

    return <>
        {contacts.map(contact => {
                return <>
                    <li key={contact.id} className={s.item}><p className={s.itemNumber}>{contact.name}: {contact.number}</p>
                    <button className={s.button} onClick={()=> deleteBtn(contact)} >Delete</button>
                    </li>
                </>
            })}
    </>
}

ContactItem.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
}

export default ContactItem;