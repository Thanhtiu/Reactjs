import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppRouter from './routes/client/router';
import AppRouterAdmin from './routes/admin/router';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/client/*" element={<AppRouter />} />
          <Route path="/admin/*" element={<AppRouterAdmin />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
