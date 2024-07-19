import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import AppRouter from './routes/client/router';
import Header from './layouts/client/component/Header';
import AppRouterAdmin from './routes/admin/router'
function App() {
  return (
    <div className="App">

        {/* <AppRouter/> */}
        <AppRouterAdmin />
    </div>
  );
}

export default App;
