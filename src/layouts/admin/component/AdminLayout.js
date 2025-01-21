import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from '../../../auth/login';
import OTPForm from '../../../auth/OtpForm';

const AdminLayout = () => {
  return (

      <Routes>
      <Route path='/login' element={<Login/>}> </Route>
      
      </Routes>

  );
};

export default AdminLayout;
