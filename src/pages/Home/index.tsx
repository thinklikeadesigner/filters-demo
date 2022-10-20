import React, { SetStateAction, useEffect, useState } from 'react';
import FilterPanel from '../../components/Home/FilterPanel';
import List from '../../components/Home/List';
import SearchBar from '../../components/Home/SearchBar';
import './styles.css';
import { dataList } from '../../constants/index';
import EmptyView from '../../components/common/EmptyView';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState([1000, 5000]);
  const [resultFound, setResultFound] = useState(false);
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
  const [list, setList] = useState(dataList);

  const [searchInput, setSearchInput] = useState('');

  const handleSelectCategory = (_e: { target: { value: any } }, value: any) => {
    return setSelectedCategory((selectedCategory) => (selectedCategory !== selectedCategory ? null : value));
  };

  const handleSelectRating = (_e: any, value: any) => {
    return setSelectedRating((selectedRating) => (selectedRating !== selectedRating ? null : value));
  };

  const handleChangeInput = (_e: { target: { value: any } }) => setSearchInput(_e.target.value);

  const handleChangePrice = (_e: { target: { value: any } }, value: any) => setSelectedPrice(value);

  const handleChangeChecked = (id: number) => {
    const cuisinesStateList = cuisines;
    const changeCheckedCuisines = cuisinesStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setCuisines(changeCheckedCuisines);
  };

  const applyFilters = () => {
    let updatedList = dataList;

    // Rating Filter
    if (selectedRating) {
      updatedList = updatedList.filter((item) => item.rating === parseInt(selectedRating));
    }

    // Category Filter

    if (selectedCategory) {
      updatedList = updatedList.filter((item) => item.category === selectedCategory);
    }

    // Cuisine Filter

    // to make an array of just the labels of each item ['american', 'chinese', 'italian']
    const cuisineChecked = cuisines.filter((item) => item.checked).map((item) => item.label.toLowerCase());

    // check length to see is array is empty, since an empty array isnt falsy
    if (cuisineChecked.length) {
      updatedList = updatedList.filter((item) => cuisineChecked.includes(item.cuisine));
    }

    // Price Filter
    const minPrice = selectedPrice[0];
    const maxPrice = selectedPrice[1];

    updatedList = updatedList.filter((item) => item.price >= minPrice && item.price <= maxPrice);

    if (searchInput) {
      updatedList = updatedList.filter(
        (item) => item.title.toLowerCase().search(searchInput.toLowerCase().trim()) !== -1
      );
    }

    setList(updatedList);

    !updatedList.length ? setResultFound(false) : setResultFound(true);
  };

  useEffect(() => {
    applyFilters();
  }, [selectedRating, selectedCategory, cuisines, selectedPrice, searchInput]);

  const clearFilters = () => setList(dataList);

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
            changePrice={handleChangePrice}
            selectedPrice={selectedPrice}
          />
        </div>
        {/* List & Empty View*/}
        <div className="home_list-wrap">{resultFound ? <List list={list} /> : <EmptyView />}</div>
      </div>
    </div>
  );
};

export default Home;
