import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../../layouts/admin/component/Header';
import Home from '../../pages/admin/home/Home';
import Footer from '../../layouts/admin/component/Footer';
import InsertCustomers from '../../pages/admin/customers/InsertCustomers';
import EditCustomer from '../../pages/admin/customers/EditCustomer';
import CustomerList from '../../pages/admin/customers/CustomerList';
import Menu from '../../layouts/admin/component/Menu';
import InsertCate from '../../pages/admin/categories/InsertCate';
import ListCate from '../../pages/admin/categories/ListCate';
import EditCate from '../../pages/admin/categories/EditCate';
import CommentList from '../../pages/admin/comments/CommentList';
import '../../assets/admin/styles/vendor/fontawesome-free/css/all.min.css';
import '../../assets/admin/styles/vendor/bootstrap/css/bootstrap.min.css';
import '../../assets/admin/styles/css/ruang-admin.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import InsertPost from '../../pages/admin/post/InsertPost';
import ListPost from '../../pages/admin/post/ListPost';

import EditPost from '../../pages/admin/post/EditPost';
import Info from '../../pages/admin/info/Info';
import CommentDeatail from '../../pages/admin/comments/CommentDetail';

const AppRouterAdmin = () => {
  return (
    <div id="wrapper">
      <Menu />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
        <Header />
        <Routes>
        
            <Route path="/"  element={<Home />} />
            <Route path="/cate/insert" element={<InsertCate />} />
            <Route path="/cate/list" element={<ListCate />} />
            <Route path="/cate/edit/:id" element={<EditCate />} />
            <Route path="/customers/insert" element={<InsertCustomers />} />
            <Route path="/customers/edit/:id" element={<EditCustomer />} />
            <Route path="/customers/list" element={<CustomerList />} />
            <Route path="/comment/list" element={<CommentList />} />
            <Route path="/comment/edit/:id" element={< CommentDeatail />} />
            <Route path="/insert/post" element={<InsertPost />} />
            <Route path="/list/post" element={<ListPost />} />
            <Route path="/edit/post/:id" element={<EditPost />} />
            <Route path="/info/:id" element={< Info />} />
          </Routes>
      
        </div>
        <Footer />
      </div>
    </div>
        
      
  
  );

}

export default AppRouterAdmin;
