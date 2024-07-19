// Trong file router.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import BrowserRouter từ react-router-dom
import Header from '../../layouts/client/component/Header'; // Đảm bảo import các component khác cũng đúng
import Home from '../../pages/home/Home';
import About from '../../pages/about/About';
const AppRouter = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>}/>
        {/* Định nghĩa các Route khác tại đây */}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
