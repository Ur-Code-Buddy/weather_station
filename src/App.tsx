import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import DataPage from './pages/DataPage';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/data" element={<DataPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;