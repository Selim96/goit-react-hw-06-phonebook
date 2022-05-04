import { useSelector, useDispatch } from 'react-redux';
import s from './Filter.module.css';
import { addFilter } from 'redux/contacts/contacts-actions';

function Filter() {
  const filterValue = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
  const filterChange = e => {
    dispatch(addFilter(e.currentTarget.value));
  };

  return (
    <div className={s.filter}>
      <label className={s.labelFilter}>
          Find contacts by name
          <input
            type="text"
            name="filter"
            className={s.input}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            value={filterValue}
            placeholder='Enter name'
            onChange={filterChange}
          />
        </label>
      </div>
        
    )
}

export default Filter;

// Filter.propTypes = {
//   value: PropTypes.string, 
//   onChange: PropTypes.func,
// }