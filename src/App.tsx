// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
// import { Main } from "./pages/main/main";
import { Login } from "./pages/login";
import { Meditation } from "./pages/meditation";
import { About } from "./pages/about";
import {Contact } from "./pages/contact";
import { Navbar } from "./components/navbar";
import { CreatePost } from "./pages/create-post/create-post";
import { Home } from './pages/home';

import { ThemeProvider } from 'styled-components';


const theme1 = {
  colors: {
    header:'green',
    body: 'violet',
    footer: 'light-blue'
  }
}


function App() {
  return (
    <ThemeProvider theme={theme1}>
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/createpost" element={<CreatePost/>}/>
          <Route path="/meditation" element={<Meditation/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Router>
    </div>
    </ThemeProvider>
  );
}

export default App;
