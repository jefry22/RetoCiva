import React from 'react';

const SearchBar = ({ searchId, setSearchId, searchBusById }) => {
  return (
    <div className="flex items-center mb-4">
      <input
        type="text"
        placeholder="Buscar por ID"
        value={searchId}
        onChange={(e) => setSearchId(e.target.value)}
        className="border p-2 rounded-md w-1/3 mr-2"
      />
      <button
        onClick={searchBusById}
        className="bg-purple-800 text-white px-4 py-2 rounded-md hover:bg-purple-700"
      >
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;
