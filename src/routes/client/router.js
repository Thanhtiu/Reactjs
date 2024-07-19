import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import BrowserRouter từ react-router-dom
import Header from '../../layouts/client/component/Header'; // Đảm bảo import các component khác cũng đúng
import Home from '../../pages/client/home/Home';
import About from '../../pages/client/about/About';
const AppRouter = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/client" element={<Home />} />
        <Route path="/client/about" element={<About/>}/>
        {/* Định nghĩa các Route khác tại đây */}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
