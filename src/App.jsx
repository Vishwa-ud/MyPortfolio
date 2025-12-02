import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {Home, About, Contact, Experience, Feedbacks, Hero, Navbar, Tech , Works, StarsCanvas, Footer} from './components';

const MainContent = () => {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      {/* <Feedbacks /> */}
      <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
        <Footer />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/island" element={
          <div className="relative z-0 bg-primary">
            <Navbar />
            <Home />
          </div>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
