import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Tracking from './components/Tracking';
import Support from './components/Support';
import NotificationCenter from './components/NotificationCenter';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tracking" element={<Tracking />} />
            <Route path="/support" element={<Support />} />
            <Route path="/notifications" element={<NotificationCenter />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
