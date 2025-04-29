// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import './App.css';
// import { Main } from "./pages/main/main";
import { Login } from "./pages/login/login";
import { Meditation } from "./pages/meditation/meditation";
import { About } from "./pages/about";
import {Contact } from "./pages/contact";
// import { Navbar } from "./components/header/navbar";
import { CreatePost } from "./pages/create-post/create-post";
import { Home } from './pages/home/home';

import { ThemeProvider } from 'styled-components';
import { Header } from './components/header/header';
import { GlobalStyles } from './styles/GlobalStyles';
import { Footer } from './components/footer/footer';


const theme1 = {
  colors: {
    header:'transparent',
    body: 'violet',
    footer: 'light-blue'
  }
}


function App() {
  return (
    <ThemeProvider theme={theme1}>
      <GlobalStyles/>
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/createpost" element={<CreatePost/>}/>
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
