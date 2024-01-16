import React from 'react';

import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Phonebook from './pages/Phonebook';

function App() {
  return (
    <Router>
    <div className="pt-20">

      <Routes>
        <Route path="/" element={<Phonebook />}/>
      </Routes>
    </div>
    </Router>
  )
}

export default App
