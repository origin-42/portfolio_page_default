import './App.css';
import React, { useState } from 'react';

// Import pages
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

// Import header and footer
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  // Set state to about page. Update as page is changed.
  const [currentPage, changePage] = useState('about');

  // Change page rendered on state change
  const pageFormat = () => {
    if (currentPage === 'about') {
      return <About changePage={changePage} />
    } else if (currentPage === 'portfolio') {
      return <Portfolio changePage={changePage} />
    } else if (currentPage === 'resume') {
      return <Resume changePage={changePage} />
    } else if (currentPage === 'contact') {
      return <Contact changePage={changePage} />
    }
  }

  // Render the given page
  return (
    <div className="App">
      <Header currentPage={currentPage} />
      {pageFormat}
      <Footer />
    </div>
  );
}

export default App;
