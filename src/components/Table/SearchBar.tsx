import React from "react";
import type { Props } from "../../types/User";



const SearchBar:React.FC<Props> = ({query,setQuery}) => {
  return (
    <input
      type="text"
      placeholder="Search by name, email or role"
      className="form-control mb-3"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
};

export default SearchBar;
