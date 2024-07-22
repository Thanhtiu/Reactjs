import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../../layouts/client/component/Header';
import Home from '../../pages/client/home/Home';
import About from '../../pages/client/about/About';
import Contact from '../../pages/client/contact/Contact';
import Footer from '../../layouts/client/component/Footer';
import Login from '../../pages/client/login/Login';
import Register from '../../pages/client/register/Register';
import '../../assets/client/styles/css/bootstrap.min.css'
import '../../assets/client/styles/css/bootstrap-icons.css'
import '../../assets/client/styles/css/owl.theme.default.min.css'
import '../../assets/client/styles/css/main.css'
import '../../assets/client/styles/css/login.css'
import '../../assets/client/styles/css/templatemo-pod-talk.css'


const AppRouter = () => {
  return (
    <>
  <main>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/contact" element={<Contact />} />
        {/* Add more routes here */}
      </Routes>
      </main>
      <Footer/>
    </>
  );
}

export default AppRouter;
