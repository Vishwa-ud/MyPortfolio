import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Analytics } from "@vercel/analytics/react";

import {Home, About, Contact, Experience, ProExperience , Feedbacks, Hero, Navbar, Tech , LogoShowcase , Works, StarsCanvas, Footer} from './components';

const MainContent = () => {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <ProExperience />
      <Tech />
      <LogoShowcase />
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
      <Toaster 
        position="top-center" 
        reverseOrder={false}
        containerStyle={{
          top: 80,
          zIndex: 99999,
        }}
        toastOptions={{
          style: {
            zIndex: 99999,
          },
        }}
      />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/island" element={
          <div className="relative z-0 bg-primary">
            <Navbar />
            <Home />
          </div>
        } />
      </Routes>
      <Analytics />
    </BrowserRouter>
  )
}

export default App
