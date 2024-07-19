import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import BrowserRouter từ react-router-dom
import Header from '../../layouts/admin/component/Header'; // Đảm bảo import các component khác cũng đúng
import Home from '../../pages/admin/home/Home';
import Footer from '../../layouts/admin/component/Footer'
import InsertCate from '../../pages/admin/caterories/InsertCate';
import Menu from '../../layouts/admin/component/Menu'
import ListCate from '../../pages/admin/caterories/ListCate'; 
const AppRouterAdmin = () => {
  return (
    <BrowserRouter>
      <div id="wrapper">
    <Menu />
    <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
    <Header/>
      <Routes>
        <Route path="/admin" element={<Home />} />
        <Route path="/admin/insert/cate" element={<InsertCate/>}/>
        <Route path="/admin/list/cate" element={<ListCate/>}/>
      </Routes>
      </div>
      <Footer />
      </div>
      </div>
    </BrowserRouter>
  );
}

export default AppRouterAdmin;
