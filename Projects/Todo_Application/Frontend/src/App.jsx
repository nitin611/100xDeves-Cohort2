import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HomePage from './Components/Home';
import Footer from './Components/Footer';
import AboutUs from './Components/About';
import Signup from './Components/Signup';
import Signin from './Components/Signin';
import Todo from './Components/Todo';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home page */}
        <Route path="/" element={<HomePage />} />
        <Route path="/todo" element={<Todo />} />

        {/* About Us page */}
        <Route path="/about" element={<AboutUs />} />

        {/* signup and signin  */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />

        {/* Add other routes here */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
