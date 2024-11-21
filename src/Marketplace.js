import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Marketplace.css';

const Marketplace = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [insights, setInsights] = useState(null);  // State to hold AI insights

  // Fetch products from the backend when the component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8000/products/');
        setItems(response.data);
        setFilteredItems(response.data); // Initialize filteredItems with all items
      } catch (error) {
        console.error('Error fetching products:', error);
        alert('Failed to fetch products. Please try again.');
      }
    };

    fetchProducts();
  }, []);

  // Function to handle the search button click
  const handleSearch = () => {
    if (searchTerm === '') {
      setFilteredItems(items);
    } else {
      const results = items.filter(item =>
        item.product_name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredItems(results);
    }
  };

  // Function to generate AI insights by comparing prices
  const handleGenerateAIInsights = async () => {
    try {
      // Call the backend to generate AI insights
      const response = await axios.post('http://localhost:8000/compare_prices', {
        target_products: items,
        trader_joes_products: items
      });
      // Set the insights in the state (expecting a block of HTML text)
      setInsights(response.data);
    } catch (error) {
      console.error('Error generating AI insights:', error);
      alert('Failed to generate insights. Please try again.');
    }
  };

  // Show all items if no search term is entered or show filtered items
  const itemsToDisplay = searchTerm && filteredItems.length > 0 ? filteredItems : items;

  return (
    <div className="marketplace-container">
      <h1>EconoMe Marketplace</h1>

      <div className="search-bar-container">
        <input
          type="text"
          className="search-bar"
          placeholder="Enter item(s)"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>

      {/* Button to generate AI insights */}
      <div className="generate-ai-insights">
        <button onClick={handleGenerateAIInsights}>Generate AI Insights</button>
      </div>

      {/* Display the block of text insights if available */}
      {insights && (
        <div className="ai-insights">
          <h2>AI Insights</h2>
          {/* Use dangerouslySetInnerHTML to render HTML content */}
          <div dangerouslySetInnerHTML={{ __html: insights.summary }} />
        </div>
      )}

      <div className="item-grid">
        {itemsToDisplay.length > 0 ? (
          itemsToDisplay.map((item, index) => (
            <div key={index} className="item">
              <h2>{item.product_name}</h2>
              <p><strong>Store:</strong> {item.store_name}</p>
              <p><strong>Price:</strong> {item.price}</p>
              <p><strong>Last Checked:</strong> {item.last_checked_at}</p>
              <a href={item.url} target="_blank" rel="noopener noreferrer">View Product</a>
            </div>
          ))
        ) : (
          <p>No items found. Try searching for something else!</p>
        )}
      </div>
    </div>
  );
};

export default Marketplace;
