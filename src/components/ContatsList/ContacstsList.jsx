import PropTypes from 'prop-types';
import { Box } from 'components/Box/Box';
import { ContactItem, ContactText } from './ContactsList.styled';

const ContactsList = ({ data, onDelete }) => {
  return (
    <Box pt="l" pb="l">
      <ul>
        {data.map(({ id, name, number }) => (
          <ContactItem key={id}>
            <ContactText>
              {name}: {number}
            </ContactText>
            <button onClick={() => onDelete(id)}>Delete</button>
          </ContactItem>
        ))}
      </ul>
    </Box>
  );
};

ContactsList.prototype = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    })
  ),
};

export { ContactsList };
