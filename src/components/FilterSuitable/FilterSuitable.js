import FilterSuitableElement from './FilterSuitableElement.js';
import '../../styles/FilterSuitable.css';
import { CHEAP_FILTER_TYPE, FAST_FILTER_TYPE, OPTIMAL_FILTER_TYPE } from './constsFilterSuitable';

const FILTER_LABELS = {
  [CHEAP_FILTER_TYPE]: 'Самый дешевый',
  [FAST_FILTER_TYPE]: 'Самый быстрый',
  [OPTIMAL_FILTER_TYPE]: 'Оптимальный',
};

function FilterSuitable({ setFilterSuitable, filterSuitable }) {
  // Замыкание
  const handleClickFilterSuitableElement = (filterType) => {
    return () => {
      setFilterSuitable(filterType);
    };
  };

  return (
    <div className="filter2">
      {Object.entries(FILTER_LABELS).map(([type, label]) => (
        <FilterSuitableElement
          text={label}
          callback={handleClickFilterSuitableElement(type)}
          isActive={filterSuitable === type}
        />
      ))}
    </div>
  );
}

export default FilterSuitable;
