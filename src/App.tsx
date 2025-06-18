import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import { Home } from './pages/home/home';
import { Login } from "./pages/login/login";
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Suspense, lazy } from 'react';

function App() {

const About = lazy(() => import("./pages/about"));
const Contact = lazy(() => import("./pages/contact"));
const Meditation = lazy(() => import('./pages/meditation/meditation'));


  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/meditation" element={
            <Suspense fallback={<div>Loading...</div>}>
              <Meditation />
            </Suspense>}
        />
          <Route path="/about" element={
            <Suspense fallback={<div>Loading...</div>}>
              <About />
            </Suspense>}
        />
          <Route path="/contact" element={
            <Suspense fallback={<div>Loading...</div>}>
              <Contact />
            </Suspense>}
        />
        </Routes>
        <Footer/>
      </Router>
    </div>
    </ThemeProvider>
  );
}

export default App;
