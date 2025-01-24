import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import TokenLaunch from './components/TokenLaunch';
import Transportation from './components/Transportation';
import Events from './components/Events';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <TokenLaunch />
        <Transportation />
        <Events />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;