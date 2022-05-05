import React from 'react';

function SearchBar({ searchChange }) {
  return (
    <>
      <input
        style={styles.input}
        className="mb-3"
        placeholder="search name"
        onChange={searchChange}
      ></input>
    </>
  );
}
const styles = {
  input: {
    borderRadius: '18px',
    width: '100%',
    backgroundColor: '#fff',
    outline: 'none',
    margin: 'auto',
    padding: '5px',
    border: '1px solid #cccccc',
  },
};
export default SearchBar;
