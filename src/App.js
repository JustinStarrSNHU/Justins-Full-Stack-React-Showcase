import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import Playlist from './components/Playlist';
import SearchAndPlay from './components/SearchAndPlay';
import MyRepositories from './components/MyRepositories';
import GuestBook from './components/GuestBook';
import Todo from './components/Todo';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/playlist" element={<Playlist />} />
          <Route path="/search-and-play" element={<SearchAndPlay />} />
          <Route path="/my-repositories" element={<MyRepositories />} />
          <Route path="/todo-list" element={<Todo />} />
          <Route path="/guest-book" element={<GuestBook />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;