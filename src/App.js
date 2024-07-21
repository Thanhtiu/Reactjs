import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppRouter from './routes/client/router';
import AppRouterAdmin from './routes/admin/router';
import { createGlobalStyle } from 'styled-components';

// Import your custom font files if needed

// Define global styles using createGlobalStyle
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
    <BrowserRouter>
      <GlobalStyle />
      <div className="App">
        <Routes>
          <Route path="/*" element={<AppRouter />} />
          <Route path="/admin/*" element={<AppRouterAdmin />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
