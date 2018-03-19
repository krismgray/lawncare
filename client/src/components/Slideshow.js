import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import { Fade } from 'react-slideshow-image';
import '../Home.css';

const images = [
  '../images/01.jpg',
  '../images/02.1.jpg',
  '../images/03.1.jpg',
  '../images/04.jpg'
];

class Slideshow extends Component {
  render() {
    return (
      <div className='slideshow'>
      <Fade
        images={images}
        duration={5000}
        transitionDuration={1000}
      />
      </div>
    );
  }
}

export default Slideshow;
