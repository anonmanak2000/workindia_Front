import React from 'react';
import './App.css';
import Contact from './Contact';
import Navbar from './Navbar'
import Recharge from './Recharge'
import Features from './Features'
import Footer from './Footer'

function App() {
  return (
<div className="App">
   <Navbar />
    <Contact />
    <Recharge />
    <Features />
    <Footer />
</div>


  );
}

export default App;
