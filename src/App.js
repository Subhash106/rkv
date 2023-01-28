import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Orders from './components/Orders';
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="orders" element={<Orders />} />
    </Routes>
  );
};

export default App;
