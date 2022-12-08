import { Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';
import Calculator from './components/calculator';
import Home from './components/pages/Home';
import Quotes from './components/pages/Quotes';
import NavBar from './components/NavBar';

const App = () => (
  <>
    <NavBar />
    <Routes>
      <Route
        path="/calculator"
        element={(
          <main className="container">
            <Calculator />
          </main>
        )}
      />
      <Route path="/" element={<Home />} />
      <Route path="/quotes" element={<Quotes />} />
    </Routes>
  </>
);

export default App;
