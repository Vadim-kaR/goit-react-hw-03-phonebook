import PropTypes from 'prop-types';
import { Component } from 'react';
import { Form, Field, Formik, ErrorMessage } from 'formik';
import { Box } from 'components/Box/Box';
import { InputTitle, InputField, AddBtn } from './ContactForm.styled';
import * as yup from 'yup';

let schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.number().required().positive().integer(),
});

class ContactForm extends Component {
  render() {
    const { onSubmit } = this.props;

    return (
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={schema}
        onSubmit={onSubmit}
      >
        <Form autoComplete="off">
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            p="l"
          >
            <InputField htmlFor="name">
              <InputTitle>Name</InputTitle>
              <Field
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              />
              <ErrorMessage component="div" name="name" />
            </InputField>
            <InputField htmlFor="number">
              <InputTitle>Phone</InputTitle>
              <Field
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              />
              <ErrorMessage component="div" name="number" />
            </InputField>
            <AddBtn type="submit">Add Contact</AddBtn>
          </Box>
        </Form>
      </Formik>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export { ContactForm };
