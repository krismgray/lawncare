import React, { Component } from 'react';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Login from './Login';
import Slideshow from './Slideshow';
import About from './About';
import Testimonial from './Testimonial';
import Admintheboss from './Admintheboss';
import Contact from './Contact';
import Footer from './Footer';
import NavMenu from './NavMenu';
import Register from './Register';
import Home from './Home';
import ProtectedRoute from './ProtectedRoute';
import AuthRoute from './AuthRoute';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/About' component={About} />
            <Route exact path='/Contact' component={Contact} />
            <Route exact path='/Testimonial' component={Testimonial} />
            <Route exact path='/Admintheboss' component={Admintheboss} />
            <Route component={NoMatch} />
          </Switch>
      </div>
    );
  }
}

export default App;
