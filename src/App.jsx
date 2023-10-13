import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import ContactMe from './components/ContactMe';
import Resume from './components/Resume';
import Navigation from './components/Navigation';
import Portfolio from './components/Portfolio';

function App() {
  const [selectedSection, setSelectedSection] = useState('aboutMe'); // Set the initial section to "aboutMe"

  const handleNavigationClick = (section) => {
    setSelectedSection(section);
  };

  useEffect(() => {
  }, [selectedSection]);

  return (
    <div className="App">
      <Header />
      <Navigation onNavigationClick={handleNavigationClick} />
      <main>
        {selectedSection === 'aboutMe' && <AboutMe />}
        {selectedSection === 'contactMe' && <ContactMe />}
        {selectedSection === 'resume' && <Resume />}
        {selectedSection === 'portfolio' && <Portfolio />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
