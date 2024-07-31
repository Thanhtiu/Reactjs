import React, { createContext, useContext, useState, useEffect } from 'react';
import { login as authLogin } from '../services/apis/login'; 
import { jwtDecode } from 'jwt-decode'; // Fixed import for jwt-decode
import { DialogService } from '../services/common/DialogService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const userInfo = localStorage.getItem('userInfo');
    return userInfo ? JSON.parse(userInfo) : null;
  });

  const login = async (form) => {
    try {
      const response = await authLogin(form);
      const { token, userInfo } = response;
      if(response.data[0].role !== `admin`){
        DialogService.error('Chỉ đăng nhập với tài khoản admin')
        return ; 
      }
      

      localStorage.setItem('token', token);
      localStorage.setItem('userInfo', JSON.stringify(userInfo));

      setUser(userInfo);
      return response; 
    } catch (error) {
      DialogService.error('Tài khoản hoặc mật khẩu không chính xác');
      console.log(error);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userInfo');
    setUser(null);
  };

  const isLoggedIn = () => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        const expired = decodedToken.exp < Date.now() / 1000;
        if (expired) {
          logout();
          return false;
        }
        return true;
      } catch (e) {
        console.error('Token không hợp lệ:', e);
        logout();
        return false;
      }
    }
    return false;
  };

  useEffect(() => {

  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
