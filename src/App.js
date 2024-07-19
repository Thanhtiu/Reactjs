import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import AppRouter from './routes/client/router';
import Header from './layouts/client/component/Header';
function App() {
  return (
    <div className="App">

        <AppRouter/>
    </div>
  );
}

export default App;
