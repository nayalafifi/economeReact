import React, { useState } from 'react';
import './Marketplace.css';

const Marketplace = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);

  // List of items
  const items = [
    { id: 1, name: 'Bell Peppers', price1: '$0.75 at Trader Joe\'s', price2: '$0.50 at Target', image: '/images/bell-peppers.jpg' },
    { id: 2, name: 'Green Peppers', price1: '$0.75 at Trader Joe\'s', price2: '$0.50 at Target', image: '/images/green-peppers.jpg' },
    { id: 3, name: 'Tomatoes', price1: '$0.55 at Trader Joe\'s', price2: '$0.70 at Target', image: '/images/tomatoes.jpg' },
    { id: 4, name: 'Apples', price1: '$0.75 at Trader Joe\'s', price2: '$0.50 at Target', image: '/images/apples.jpg' }
  ];

  // Function to handle the search button click
  const handleSearch = () => {
    if (searchTerm === '') {
      // Reset filteredItems if search term is empty (display all items)
      setFilteredItems([]);
    } else {
      // Filter the items based on the search term
      const results = items.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      // Update the filtered items to be displayed
      setFilteredItems(results);
    }
  };

  // Show all items if no search term is entered or show filtered items
  const itemsToDisplay = searchTerm && filteredItems.length > 0 ? filteredItems : items;

  return (
    <div className="landing-page">
      <h1>EconoMe Marketplace</h1>

      {/* Add the search bar */}
      <div className="search-bar-container">
        <input
          type="text"
          className="search-bar"
          placeholder="Enter item(s)"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Update searchTerm on user input
        />
        {/* Search button */}
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>

      {/* Display the filtered items or all items by default */}
      <div className="item-grid">
        {itemsToDisplay.length > 0 ? (
          itemsToDisplay.map(item => (
            <div key={item.id} className="item">
              <img src={item.image} alt={item.name} />
              <h2>{item.name}</h2>
              <p>{item.price1}</p>
              <p>{item.price2}</p>
            </div>
          ))
        ) : (
          <p>No items found. Try searching for something else!</p>
        )}
      </div>

      <button className="see-more">See More!</button>
    </div>
  );
};

export default Marketplace;
