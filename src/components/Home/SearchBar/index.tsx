import React, { ChangeEventHandler } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import './styles.css';
type Props = {
  value: any;
  changeInput: any;
};

const SearchBar = ({ value, changeInput }: Props) => {
  return (
    <div className="searchBar-wrap">
      <SearchIcon className="searchBar-icon" />
      <input
        type="text"
        placeholder="Woodland Hills"
        value={value}
        onChange={changeInput}
      />
    </div>
  );
};

export default SearchBar;
