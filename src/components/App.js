import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import ItemDetail from './ItemDetail';
import '../styles/App.css';

function App() {
  const basename = process.env.PUBLIC_URL;

  return (
    <Router basename={basename}>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/item/:id" element={<ItemDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
