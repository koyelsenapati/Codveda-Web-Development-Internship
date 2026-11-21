
import { Search, SlidersHorizontal, ChevronDown } from "lucide-react";

function SearchBar({ search, setSearch, filter, setFilter }) {
  return (
    <div className="table-tools">
      <div className="table-search">
        <Search />
        <input
          type="search"
          placeholder="Search by name or email..."
          value={search}
          onChange={event => setSearch(event.target.value)}
        />
      </div>

      <div className="filter-wrap">
        <SlidersHorizontal />
        <select value={filter} onChange={event => setFilter(event.target.value)}>
          <option value="All">All Users</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
        <ChevronDown />
      </div>
    </div>
  );
}

export default SearchBar;
