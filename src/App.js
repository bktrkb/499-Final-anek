// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">หน้าหลัก</Link>
        <Link to="/about">แนะนำตัว</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
