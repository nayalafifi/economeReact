import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdditionalInfo = () => {
  const navigate = useNavigate();
  const [dob, setDob] = useState('');
  const [income, setIncome] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:8000/users/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ dob, income: parseFloat(income) }),
      });

      if (!response.ok) {
        throw new Error("Failed to save additional info");
      }

      const data = await response.json();
      console.log("Additional information saved:", data);

      // Redirect to dashboard after submitting additional information
      navigate('/dashboard');
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h2>Additional Information</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Date of Birth:
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
          />
        </label>
        <label>
          Income:
          <input
            type="number"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AdditionalInfo;
