const FilterBar = ({ filters, removeFilter, clearFilters }) => {
  if (filters.length === 0) return null;

  return (
    <div className="bg-white shadow-lg rounded-md p-4 mb-8 -mt-8 relative">
      <div className="flex flex-wrap items-center gap-4">
        {filters.map((filter, index) => (
          <div
            key={index}
            className="flex items-center overflow-hidden rounded-md"
          >
            <span className="bg-filterTablets text-primary font-bold px-3 py-1">
              {filter}
            </span>
            <button
              onClick={() => removeFilter(filter)}
              className="bg-primary text-white px-3 py-1 hover:bg-veryDarkCyan transition-colors"
            >
              ×
            </button>
          </div>
        ))}
        <button
          onClick={clearFilters}
          className="text-darkCyan hover:text-primary hover:underline ml-auto font-bold"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
