import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../../layouts/admin/component/Header';
import Home from '../../pages/admin/home/Home';
import Footer from '../../layouts/admin/component/Footer';
import Menu from '../../layouts/admin/component/Menu';
import InsertCate from '../../pages/admin/categories/InsertCate';
import ListCate from '../../pages/admin/categories/ListCate';
// import ListCate from '../../pages/admin/categories/ListCate';
import '../../assets/admin/styles/vendor/fontawesome-free/css/all.min.css';
import '../../assets/admin/styles/vendor/bootstrap/css/bootstrap.min.css';
import '../../assets/admin/styles/css/ruang-admin.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const AppRouterAdmin = () => {
  return (
    <div id="wrapper">
      <Menu />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/insert/cate" element={<InsertCate />} />
            <Route path="/list/cate" element={<ListCate />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default AppRouterAdmin;
