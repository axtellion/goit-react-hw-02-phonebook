import { Box } from 'components/Box';
import { List, Text, Item, Btn } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <Box>
      <List>
        {contacts.map(({ id, name, number }) => {
          return (
            <Item key={id}>
              <Text>
                {name}: {number}
              </Text>
              <Btn onClick={() => onDeleteContact(id)}>Delete</Btn>
            </Item>
          );
        })}
      </List>
    </Box>
  );
};
