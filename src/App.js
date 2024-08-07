import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import AppRouter from './routes/client/router';
import AppRouterAdmin from './routes/admin/router';
import Login from './auth/login';
import ProtectedRoute from './utils/ProtectedRoute';
import { AuthProvider } from './auth/AuthContext'; 
import OTPForm from './auth/OtpForm';
import Emailer from './auth/Emailer';
import ChangePassword from './auth/ChangePassword';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { AuthProviderClient } from './pages/client/login/AuthContext';
const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    font-family: 'Roboto', Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
    width: 100%;
  }

  code {
    font-family: 'Courier New', monospace;
  }
`;

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <GlobalStyle />
        <div className="App">
          <Routes>
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/emailer" element={< Emailer />} />
            <Route path='/auth/otp' element={<OTPForm/>}> </Route>
            <Route path='/auth/changepassword' element={<ChangePassword/>}> </Route>
            <Route
              path="/admin/*"
              element={<ProtectedRoute element={<AppRouterAdmin />} />}
            />
                <Route
            path="/*"
            element={
              <AuthProviderClient>
                <AppRouter />
              </AuthProviderClient>
            }
          />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
