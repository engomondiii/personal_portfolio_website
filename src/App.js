// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import AboutMe from './components/AboutMe/AboutMe';
import Bio from './components/AboutMe/Bio';
import Hobbies from './components/AboutMe/Hobbies';
import ProfessionalBackground from './components/AboutMe/ProfessionalBackground';
import Education from './components/AboutMe/Education';
import Mission from './components/AboutMe/Mission';
import CallToAction from './components/AboutMe/CallToAction';
import Skills from './components/Skills/Skills';
import Testimonials from './components/Testimonials/Testimonials';
import ContactForm from './components/ContactForm/ContactForm';
import Blog from './components/Blog/Blog';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume'; 
import MyServices from './components/MyServices/MyServices'; // New single service page
import './App.css';

// Component to scroll to top on route change
const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <ScrollToTop />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/about-me/bio" element={<Bio />} />
            <Route path="/about-me/hobbies" element={<Hobbies />} />
            <Route path="/about-me/professional-background" element={<ProfessionalBackground />} />
            <Route path="/about-me/education" element={<Education />} />
            <Route path="/about-me/mission" element={<Mission />} />
            <Route path="/about-me/call-to-action" element={<CallToAction />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact-form" element={<ContactForm />} />
            <Route path="/blog-posts" element={<Blog />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} /> 
            <Route path="/my-services" element={<MyServices />} /> {/* Single service page */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
