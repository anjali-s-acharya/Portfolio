import React from 'react';
import Navbar from './section/Navbar';
import Hero from './section/Hero';
import About from './section/About';
import Projects from './section/Projects';
import Experience from './section/Experiences';
import Contact from './section/Contact';

const App = () => {
  return ( 
  <div className="container mx-auto max-w-7xl">
    <Navbar />
    <Hero />
    <About />
    {/*<Projects />*/}
    <Experience />
    <Contact  />
    </div>
  );
};

export default App;