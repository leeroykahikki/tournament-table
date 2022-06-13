import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import AdminPage from 'Pages/AdminPage';
import HomePage from 'Pages/HomePage';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/admin" element={<AdminPage />} />
    </Routes>
  );
}

export default App;
