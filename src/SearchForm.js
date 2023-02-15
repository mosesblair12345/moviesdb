import { useCallback } from "react";
import { useGlobalContext } from "./context";
const SearchForm = () => {
  const { query, setQuery, error } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const movieInput = useCallback((inputElement) => {
    if (inputElement) {
      inputElement.focus();
    }
  }, []);
  return (
    <form onSubmit={handleSubmit} className="search-form">
      <h2>Search Movies</h2>
      <input
        type="text"
        className="form-input"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        ref={movieInput}
      />
      {error.show && <div className="error">{error.msg}</div>}
    </form>
  );
};

export default SearchForm;
