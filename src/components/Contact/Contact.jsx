import PropTypes from 'prop-types';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoPerson } from 'react-icons/io5';

import css from './Contact.module.css';

const Contact = ({ name, number, id, handleDelete }) => {
  return (
    <div className={css.card}>
      <div>
        <div className={css.label}>
          <IoPerson />
          <p>{name}</p>
        </div>
        <div className={css.label}>
          <FaPhoneAlt />
          <p>{number}</p>
        </div>
      </div>
      <button className="button" onClick={() => handleDelete(id)}>
        Delete
      </button>
    </div>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default Contact;
