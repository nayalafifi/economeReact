import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Marketplace.css';

const Marketplace = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [insights, setInsights] = useState(null);  // State to hold AI insights
  const [loading, setLoading] = useState(false);

  // Fetch products from the backend
  const fetchProducts = async (query = '') => {
    setLoading(true); // Show loading indicator
    try {
      const response = await axios.get('http://localhost:8000/products/', {
        params: { search: query }, // Pass search term as a query parameter
      });
      setItems(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
      alert('Failed to fetch products. Please try again.');
    } finally {
      setLoading(false); // Hide loading indicator
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
  // Fetch all products on component mount
  useEffect(() => {
    fetchProducts();
  }, []);

  // Handle the search button click
  const handleSearch = () => {
    fetchProducts(searchTerm.trim());
  };

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
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="item-grid">
          {items.length > 0 ? (
            items.map((item, index) => (
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
      )}
    </div>
  );
};

export default Marketplace;
