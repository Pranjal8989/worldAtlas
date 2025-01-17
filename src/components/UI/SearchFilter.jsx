/* eslint-disable react/prop-types */
export const SearchFilter = ({
  search,
  setSearch,
  filter,
  setFilter,
  countries,
  setCountries,
}) => {
  const handleInputChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  };
  const handleSelectChange = (event) => {
    event.preventDefault();
    setFilter(event.target.value);
  };

  const sortCountries = (value) => {
    const sortCountries = [...countries].sort((a, b) => {
      return value === "asc"
        ? a.name.common.localeCompare(b.name.common)
        : b.name.common.localeCompare(a.name.common);
    });
    setCountries(sortCountries);
  };

  return (
    <section className="section-searchFilter container">
      {/* First Row: Search Input */}
      <div className="row">
        <input
          type="text"
          placeholder="search..."
          value={search}
          onChange={handleInputChange}
          className="form-control"
        />
      </div>

      {/* Second Row: Buttons and Dropdown */}
      <div className="row actions">
        <button onClick={() => sortCountries("asc")}>Asc</button>
        <button onClick={() => sortCountries("des")}>Desc</button>
        <select
          className="select-section"
          value={filter}
          onChange={handleSelectChange}
        >
          <option value="all">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </section>
  );
};
