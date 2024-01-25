import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import React from "react";
import Aboutus from './pages/aboutus/Aboutus';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import Donate from './pages/donate/Donate';
import Events from './pages/events/Event';
import Project from './pages/project/Project';
import Blog from './pages/blogs/Blog'
import GetInvolved from './pages/getInvolved/GetInvolved'
import Home from './pages/home/Home';
import './App.css';
import ContactUs from './pages/contactus/ContactUs';
import Forms from './pages/forms/Forms';

function App() {
  return (
    <div className='page-container'>
      
      <Router>
      <Navbar />
      <Switch>
         
          <Route exact path="/" >
            <Home />
          </Route>
          <Route exact path="/aboutus" >
            <Aboutus />
          </Route>
          <Route exact path="/donate">
            <Donate />
          </Route>
          <Route exact path="/events">
            <Events />
          </Route>
          <Route exact path="/project">
            <Project />
          </Route>
          <Route exact path="/blog">
            <Blog />
          </Route>
          <Route exact path="/getInvolved">
            <GetInvolved />
          </Route>
          <Route exact path="/contactUs">
            <ContactUs/>
          </Route>
          <Route exact path="/forms">
            <Forms/>
          </Route>
          <Route exact path="/donate">
            <Donate/>
          </Route>
          
        </Switch>
        <Footer />
      </Router>
      
      
    </div>
  );
}

export default App;
