import './App.css';

import SmoothScroll from './context/SmoothScroll';
import About from './sections/About';
import Features from './sections/Features';
import Hero from './sections/Hero';

function App() {
  return (
    <SmoothScroll>
      <Hero />
      <About />
      <Features />
    </SmoothScroll>
  );
}

export default App;
