import React from 'react';
import Header from './components/Header';
import Hero from './sections/Hero';
import Features from './sections/Features';
import Maps from './sections/Maps';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero id="hero" />
        <Features id="features" />
        <Maps id="maps" />
        <Contact id="contact" />
      </main>
      <Footer />
    </div>
  );
}

export default App;
