import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Explore } from './pages/Explore';
import { HeritageDetails } from './pages/HeritageDetails';
import { ArtworkDetails } from './pages/ArtworkDetails';

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/login" element={
            isAuthenticated ? 
              <Navigate to="/explore" /> : 
              <Login onLogin={handleLogin} />
          } />
          <Route path="/register" element={
            isAuthenticated ? 
              <Navigate to="/explore" /> : 
              <Register onRegister={handleLogin} />
          } />
          <Route
            path="/*"
            element={
              isAuthenticated ? (
                <>
                  <Navbar onSearch={setSearchTerm} />
                  <Routes>
                    <Route path="/" element={<Navigate to="/explore" />} />
                    <Route path="/explore" element={<Explore />} />
                    <Route path="/heritage/:id" element={<HeritageDetails />} />
                    <Route path="/artwork/:id" element={<ArtworkDetails />} />
                  </Routes>
                </>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;