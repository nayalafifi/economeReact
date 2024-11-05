import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');

  return (
    <div className="App">
      {currentPage === 'dashboard' && <Dashboard navigateTo={setCurrentPage} />}
      {currentPage === 'profile' && <Profile />}
    </div>
  );
}

export default App;
