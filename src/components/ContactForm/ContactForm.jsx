import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import css from './ContactForm.module.css';

const initialValues = {
  name: '',
  number: '',
};

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const ContactForm = ({ handleAdd }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    handleAdd({ ...values, id: nanoid() });
    actions.resetForm();
  };

  return (
    <div className={css.form}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={ContactSchema}
      >
        <Form>
          <div className={css.wrapper}>
            <label htmlFor={nameFieldId}>Name</label>
            <Field className="input" type="text" name="name" id={nameFieldId} />
            <ErrorMessage name="name" component="span" className={css.error} />
          </div>

          <div className={css.wrapper}>
            <label htmlFor={numberFieldId}>Number</label>
            <Field
              className="input"
              type="text"
              name="number"
              id={numberFieldId}
            />
            <ErrorMessage
              name="number"
              component="span"
              className={css.error}
            />
          </div>

          <button className={clsx(css.button, 'button')} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

ContactForm.propTypes = {
  handleAdd: PropTypes.func.isRequired,
};

export default ContactForm;
