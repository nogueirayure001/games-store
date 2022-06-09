import React from "react";
import { Routes, Route } from "react-router-dom";
import SearchPage from "./search-page/search-page";

function Search() {
  return (
    <Routes>
      <Route path=':searchTerm' element={<SearchPage />} />
    </Routes>
  );
}

export default Search;
