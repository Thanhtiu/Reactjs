import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../../layouts/admin/component/Header';
import Home from '../../pages/admin/home/Home';
import Footer from '../../layouts/admin/component/Footer';
import Menu from '../../layouts/admin/component/Menu';
import InsertCate from '../../pages/admin/categories/InsertCate';
import ListCate from '../../pages/admin/categories/ListCate';

const AppRouterAdmin = () => {
  return (
    <div id="wrapper">
      <Menu />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cate/insert" element={<InsertCate />} />
            <Route path="/cate/list" element={<ListCate />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default AppRouterAdmin;
