import React, { Component } from 'react';
import { Header, Container, Segment, Button, Menu, Divider } from 'semantic-ui-react';
import '../Home.css';
import NavMenu from './NavMenu';
import Footer from './Footer';
import { Fade } from 'react-slideshow-image';
import { Link } from 'react-router-dom';

import image1 from '../images/01.jpg';
import image2 from '../images/02.1.jpg';
import image3 from '../images/03.1.jpg';
import image4 from '../images/04.jpg';

class Home extends Component {
  render() {
    return (
      <div>
        <NavMenu />
        <div className='slide-container'>
          <Fade
            images={[ image1, image2, image3, image4 ]}
            duration={4000}
            transitionDuration={2000}
            />
        </div>
        <div className='body1'>
          <Segment>
          <div>
            <p className='body1p'>Don't know much about lawn aeration? Don't worry! We can explain
              the benefits and get you scheduled today for a healthier lawn!
            </p>
          </div>
          <br />
            <div className='body1b'>
              <Link to='/About'>
                <Button primary size='huge'>Learn More!</Button>
              </Link>
            </div>
            <br />
          </Segment>
        </div>
        <div className='body2'>
          <p className='body2p'>
            Gray Lawn Care has been a local business for over 4 years. We provide a fast service and accomodate to your schedule.
            We offer flags to mark sprinklers and clean up after oursleves. We pride ourselfs in providing an overall pleasent
            experience and appreciate your business. Let us help you get the lawn that you want this summer!
          </p>
        </div>
        <div className='body3'>
          <p className='body2p'>Contact Us for pricing and scheduling</p>
          <div className='body2p'>
            <Link to='/Contact'>
              <Button size='huge' color='yellow'>Click here!</Button>
            </Link>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Home;
