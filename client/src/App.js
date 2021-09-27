import React from 'react'
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Navigation from './components/Navbar/Navigation';
const App = () => {
  return (
    <>
    <Navigation />
    <Home />
    <About />
    <Services />
    </>
  )
}

export default App;
