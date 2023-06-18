import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';
import { Label, Input } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <div>
      <Label>
        Find contacts by name
        <Input
          type="text"
          name="filter"
          id="filter"
          value={filter}
          onChange={e => dispatch(filterContacts(e.target.value))}
        />
      </Label>
    </div>
  );
};

export default Filter;