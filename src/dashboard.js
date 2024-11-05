import React from 'react';

const Dashboard = () => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Sidebar */}
      <aside style={{ width: '250px', borderRight: '1px solid #e5e7eb', padding: '1rem' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '2rem' }}>EconoMe</h1>
        <nav>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="#" style={{ display: 'block', padding: '0.5rem', backgroundColor: '#3b82f6', color: 'white', borderRadius: '0.25rem', textDecoration: 'none' }}>Dashboard</a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="#" style={{ display: 'block', padding: '0.5rem', color: '#6b7280', textDecoration: 'none' }}>Your Profile</a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="#" style={{ display: 'block', padding: '0.5rem', color: '#6b7280', textDecoration: 'none' }}>MarketPlace</a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="#" style={{ display: 'block', padding: '0.5rem', color: '#6b7280', textDecoration: 'none' }}>Settings</a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, padding: '1rem' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 'semibold' }}>Dashboard</h2>
          <button style={{ padding: '0.5rem 1rem', backgroundColor: '#3b82f6', color: 'white', border: 'none', borderRadius: '0.25rem', cursor: 'pointer' }}>Add widget</button>
        </header>

        {/* Progress Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
          {['Budget', 'Goal 1', 'Goal 2'].map((title, index) => (
            <div key={index} style={{ border: '1px solid #e5e7eb', borderRadius: '0.5rem', padding: '1rem' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 'semibold', marginBottom: '0.5rem' }}>{title}</h3>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '150px' }}>
                <span style={{ fontSize: '2rem', fontWeight: 'bold' }}>{[25, 79, 52][index]}%</span>
              </div>
            </div>
          ))}
        </div>

        {/* Expenses Chart */}
        <div style={{ border: '1px solid #e5e7eb', borderRadius: '0.5rem', padding: '1rem', marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 'semibold', marginBottom: '0.5rem' }}>Expenses</h3>
          <div style={{ height: '200px', backgroundColor: '#f3f4f6', borderRadius: '0.25rem' }}></div>
        </div>

        {/* Weekly Expenses Table */}
        <div style={{ border: '1px solid #e5e7eb', borderRadius: '0.5rem', padding: '1rem' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 'semibold', marginBottom: '0.5rem' }}>Weekly Expenses</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={{ textAlign: 'left', padding: '0.5rem', borderBottom: '1px solid #e5e7eb' }}>Week</th>
                <th style={{ textAlign: 'left', padding: '0.5rem', borderBottom: '1px solid #e5e7eb' }}>Type</th>
                <th style={{ textAlign: 'left', padding: '0.5rem', borderBottom: '1px solid #e5e7eb' }}>Dates</th>
                <th style={{ textAlign: 'right', padding: '0.5rem', borderBottom: '1px solid #e5e7eb' }}>Edit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '0.5rem', borderBottom: '1px solid #e5e7eb' }}>Week 12</td>
                <td style={{ padding: '0.5rem', borderBottom: '1px solid #e5e7eb' }}>
                  <span style={{ display: 'inline-block', padding: '0.25rem 0.5rem', backgroundColor: '#fee2e2', color: '#dc2626', borderRadius: '9999px', fontSize: '0.75rem' }}>Overdue</span>
                </td>
                <td style={{ padding: '0.5rem', borderBottom: '1px solid #e5e7eb' }}>01 Dec 2023</td>
                <td style={{ padding: '0.5rem', borderBottom: '1px solid #e5e7eb', textAlign: 'right' }}>
                  <button style={{ padding: '0.25rem 0.5rem', backgroundColor: 'transparent', border: 'none', cursor: 'pointer', color: '#3b82f6' }}>Edit</button>
                </td>
              </tr>
              <tr>
                <td style={{ padding: '0.5rem' }}>Week 11</td>
                <td style={{ padding: '0.5rem' }}>
                  <span style={{ display: 'inline-block', padding: '0.25rem 0.5rem', backgroundColor: '#dcfce7', color: '#16a34a', borderRadius: '9999px', fontSize: '0.75rem' }}>Completed</span>
                </td>
                <td style={{ padding: '0.5rem' }}>11 Dec 2024</td>
                <td style={{ padding: '0.5rem', textAlign: 'right' }}>
                  <button style={{ padding: '0.25rem 0.5rem', backgroundColor: 'transparent', border: 'none', cursor: 'pointer', color: '#3b82f6' }}>Edit</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;