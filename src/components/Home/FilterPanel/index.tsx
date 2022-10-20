import FilterListToggle from '../../common/FilterListToggle';
import './style.css';
import { categoryList, ratingList } from '../../../constants';
import CheckboxProton from '../../common/Checkbox';
import SliderProton from '../../common/SliderProton';

type Props = {
  selectedCategory: any;
  selectToggle: any;
  selectedRating: any;
  selectRating: any;
  changeChecked: any;
  cuisines: any;
  selectedPrice: any;
  changePrice: any;
};
const FilterPanel = ({
  selectedCategory,
  selectToggle,
  selectedRating,
  selectRating,
  changeChecked,
  cuisines,
  selectedPrice,
  changePrice,
}: Props) => {
  return (
    <div>
      {/* Category */}
      <div className="input-group">
        <p className="label">Category</p>
        <FilterListToggle
          options={categoryList}
          value={selectedCategory}
          selectToggle={selectToggle}
        />
      </div>
      {/* Cuisines */}
      <div className="input-group">
        <p className="label">Cuisines</p>
        {cuisines.map((cuisine: any) => (
          <CheckboxProton
            key={cuisine.id}
            changeChecked={changeChecked}
            cuisine={cuisine}
          />
        ))}
      </div>
      {/* Price Range */}

      <div className="input-group">
        <p className="label-range">Prices</p>
        <SliderProton
          value={selectedPrice}
          changePrice={changePrice}
        />
      </div>
      {/* Star Rating */}
      <div className="input-group">
        <p className="label">Star Rating</p>
        <FilterListToggle
          options={ratingList}
          value={selectedRating}
          selectToggle={selectRating}
        />
      </div>
    </div>
  );
};

export default FilterPanel;
