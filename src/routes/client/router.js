import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../../layouts/client/component/Header';
import Home from '../../pages/client/home/Home';
import About from '../../pages/client/about/About';

const AppRouter = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Add more routes here */}
      </Routes>
    </>
  );
}

export default AppRouter;
