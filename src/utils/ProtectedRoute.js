import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext'; // Adjust import path as needed

const ProtectedRoute = ({ element }) => {
  const { isLoggedIn } = useAuth();
  
  if (!isLoggedIn()) {
    return <Navigate to="/auth/login" />;
  }

  return element;
};

export default ProtectedRoute;
