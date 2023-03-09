import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import 'yup-phone';
import { addContact } from '../../../redux/contacts/operations';
import { useDispatch } from 'react-redux';
import Button from '../../shared/Button/Button';
import InputName from '../../shared/InputName/InputName';
import {
  Title,
  Label,
  FormAdd,
  ErrorsMessage,
  Section,
} from './ContactForm.styled';

export const schema = Yup.object({
  name: Yup.string().min(2).max(25).required(),
  number: Yup.string().min(6).max(12).required(),
});

const ContactForm = ({ contacts }) => {
  const dispatch = useDispatch();
  const handleaddContact = (values, { resetForm }) => {
    const { name, number } = values;
    console.log(name.value, number.value);

    let addedContact = {
      name: name,
      number: number,
      id: nanoid(),
    };

    let isAdded = true;

    contacts.map(contact => {
      if (contact.name === name) {
        alert(`${name} is already in contacts`);
        return (isAdded = false);
      }
      return isAdded;
    });

    if (isAdded === true) {
      dispatch(addContact(addedContact));
      console.log(addedContact);
    }

    resetForm();
  };

  const initialValue = {
    name: '',
    number: '',
  };

  return (
    <>
      <Section>
        <Title>Phonebook</Title>
        <Formik
          validationSchema={schema}
          initialValues={initialValue}
          onSubmit={handleaddContact}
        >
          {({ errors, touched }) => (
            <FormAdd autoComplete="off">
              <Label htmlFor="name">
                <InputName text={'Name'} />
                <Field
                  id="name"
                  type="text"
                  name="name"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                />
              </Label>
              {errors.name && touched.name ? (
                <ErrorsMessage>{errors.name}</ErrorsMessage>
              ) : null}
              <Label htmlFor="number">
                <InputName text={'Number'} />
                <Field
                  id="number"
                  type="tel"
                  name="number"
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                />
              </Label>
              {errors.name && touched.number ? (
                <ErrorsMessage>{errors.number}</ErrorsMessage>
              ) : null}
              <Button type={'submit'} text={'Add contact'} />
            </FormAdd>
          )}
        </Formik>
      </Section>
    </>
  );
};

export default ContactForm;

ContactForm.propType = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
};
