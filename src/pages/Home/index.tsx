import React, { useState } from 'react';
import FilterPanel from '../../components/Home/FilterPanel';
import List from '../../components/Home/List';
import SearchBar from '../../components/Home/SearchBar';
import './styles.css';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedRating, setSelectedRating] = useState(null);
  const [cuisines, setCuisines] = useState([
    {
      id: 1,
      checked: false,
      label: 'American',
    },
    {
      id: 2,
      checked: false,
      label: 'Chinese',
    },
    {
      id: 3,
      checked: false,
      label: 'Italian',
    },
  ]);
  const [searchInput, setSearchInput] = useState('');

  const handleSelectCategory = (_e: { target: { value: React.SetStateAction<string> } }, value: any) => {
    return !value ? null : setSelectedCategory(value);
  };

  const handleSelectRating = (
    _e: { target: { value: React.SetStateAction<string> } },
    value: React.SetStateAction<null>
  ) => {
    return !value ? null : setSelectedRating(value);
  };
  const handleChangeInput = (e: { target: { value: React.SetStateAction<string> } }) => setSearchInput(e.target.value);
  const handleChangeChecked = (id: number) => {
    const cuisinesStateList = cuisines;
    const changeCheckedCuisines = cuisinesStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setCuisines(changeCheckedCuisines);
  };

  return (
    <div className="home">
      {/* Search Bar */}
      <SearchBar
        value={searchInput}
        changeInput={handleChangeInput}
      />
      <div className="home_panelList-wrap">
        <div className="home_panel-wrap">
          {/* Side Panels */}
          <FilterPanel
            selectToggle={handleSelectCategory}
            selectedCategory={selectedCategory}
            selectRating={handleSelectRating}
            selectedRating={selectedRating}
            cuisines={cuisines}
            changeChecked={handleChangeChecked}
          />
        </div>
        {/* List & Empty View*/}
        <div className="home_list-wrap">
          <List />
        </div>
      </div>
    </div>
  );
};

export default Home;
