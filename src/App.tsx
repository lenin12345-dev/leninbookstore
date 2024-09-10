import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import BookList from './pages/BookList';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css'

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen w-full  flex flex-col">
        <Navbar />
        <div className="flex-grow w-full"> {/* Main content */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<BookList />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
