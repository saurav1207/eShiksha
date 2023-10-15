import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Service/Service';
import Navigation from './components/Navbar/Navigation';
import GlobalProvider from './GlobalProvider';
import Login from './components/Authentication/Login';
import Signup from './components/Authentication/Signup';
import Course from './components/Course/Course';
import Content from './components/CourseContent/Content';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <Router>
      <GlobalProvider>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/course" element={<Course />} />
          <Route path="/course/:id" element={<PrivateRoute><Content/></PrivateRoute>} />
          <Route path="/service" element={<Services />} />
          <Route path="/signin" element={<Signup />} />
        </Routes>
        <Footer />
      </GlobalProvider>
    </Router>
  );
};

function PrivateRoute({ children }) {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  const redirectURL = '/login';

  if (isLoggedIn === 'true') { 
    return children;
  } else {
    return <Navigate to={redirectURL} />;
  }
}


export default App;
