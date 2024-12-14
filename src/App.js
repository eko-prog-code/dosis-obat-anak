import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LostAcef from './pages/LostAcef';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lostacef" element={<LostAcef />} />
      </Routes>
    </Router>
  );
};

export default App;
