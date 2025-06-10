// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import './App.css';
// import { Main } from "./pages/main/main";
import { Login } from "./pages/login/login";
import { Meditation } from "./pages/meditation/meditation";
import { About } from "./pages/about";
import {Contact } from "./pages/contact";
// import { Navbar } from "./components/header/navbar";

import { Home } from './pages/home/home';

import { ThemeProvider } from 'styled-components';
import { Header } from './components/header/header';
import { GlobalStyles } from './styles/GlobalStyles';
import { Footer } from './components/footer/footer';
import { theme } from './styles/theme';




function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          
          <Route path="/meditation" element={<Meditation/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
    </ThemeProvider>
  );
}

export default App;
