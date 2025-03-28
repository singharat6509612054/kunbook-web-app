import React from 'react';
import Home from './pages/Home';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
      <BrowserRouter>
        <div className="min-h-screen bg-kunbook-background">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;