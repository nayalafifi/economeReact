import React, { useState, useEffect } from 'react';

function DataDisplay() {
  const [data, setData] = useState([]);

  // Mock API data for testing
  useEffect(() => {
    const mockData = [
      { category: 'Groceries', amount: 120 },
      { category: 'Entertainment', amount: 50 },
      { category: 'Transportation', amount: 30 },
    ];
    setData(mockData);
  }, []);

  return (
    <div>
      <h3>Data</h3>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            {item.category}: ${item.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DataDisplay;
