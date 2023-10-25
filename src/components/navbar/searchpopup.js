import React, { useState } from 'react';
import { Popup } from 'reactjs-popup';
import './popup.css';

function SearchPopup() {
  const [query, setQuery] = useState('')

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Do something with the search query here
  }

  return (
    <Popup
      trigger={<button className='searchbtu'><i class='fas fa-magnifying-glass'></i></button>}
      modal
      nested
    >
      <div className="search-popup">
        <h1>Search</h1>
        <input type="text" value={query} onChange={handleChange} />
        <button className='searchbtu' onClick={handleSubmit}><i class='fas fa-magnifying-glass'></i></button>
      </div>
    </Popup>
  );
}

export default SearchPopup;
