import { InputTitle } from './Filter.styled';

const Filter = ({ getName, value }) => {
  return (
    <label>
      <InputTitle>Filter</InputTitle>
      <input type="text" value={value} onChange={getName} />
    </label>
  );
};

export { Filter };
