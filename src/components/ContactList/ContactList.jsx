import PropTypes from 'prop-types';
import Contact from '../Contact/Contact';

import css from './ContactList.module.css';

const ContactList = ({ contactsData, handleDelete }) => {
  const contactCards = contactsData.map(({ id, name, number }) => (
    <Contact
      key={id}
      id={id}
      name={name}
      number={number}
      handleDelete={handleDelete}
    />
  ));

  return <div className={css.list}>{contactCards}</div>;
};

ContactList.propTypes = {
  contactsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default ContactList;
