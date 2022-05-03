import ContactItem from '../ContactItem';
import s from './ContactList.module.css';
import PropTypes from 'prop-types';

export default function ContactList () {
    return (
        <ul className={s.list}>
            <ContactItem />
        </ul>
    );
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
    toDelete: PropTypes.func,
}