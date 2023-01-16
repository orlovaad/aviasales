function FilterSuitableElement({ text, callback, isActive }) {
  return (
    <div className={`filter2__element ${isActive ? 'filter2__element_active' : ''}`} onClick={callback}>
      {text}
    </div>
  );
}

export default FilterSuitableElement;
