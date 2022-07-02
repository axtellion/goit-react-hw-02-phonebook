import { FilterInput, Text } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <label>
      <Text>Find contacts by name</Text>
      <FilterInput type="text" value={value} onChange={onChange} />
    </label>
  );
};
