import React, { Component } from 'react';
import { Header, Menu } from 'semantic-ui-react';
import { Grid, Row, Col } from 'react-bootstrap';
import NavMenu from './NavMenu';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import '../Contact.css';

class Home extends Component {
  render() {
    return (
      <div>
        <div className='boxtop'>
          <NavMenu />
          <Grid>
            <Row>
              <Col xs={12}>
          <p className='box1p'>Contact us for Pricing or scheduling</p>
          <p className='box1p'>Call or text Kris at (801)-706-7057</p>
          <p className='box1p'>Or</p>
          <p className='box1p'>Email us at graylawncure@gmail.com or click the button on the bottom</p>
          <br />
              </Col>
            </Row>
          </Grid>
        </div>
        <div className='box1'>
        </div>
        <div className='boxbottom'>
          <Grid>
            <Row>
              <Col xs={12}>
                <p className='boxbp1'>
                  We appreciate your business and hope to hear from you soon! We also
                  work in the fall so contact us after the summer!
                </p>
                <div className='giphy'>
                  <iframe src="https://giphy.com/embed/atHI7U3aP3kl2" width="460" height="265" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/cool-lazy-atHI7U3aP3kl2">via GIPHY</a></p>
                </div>
                <p className='boxbp'>Enjoy your lawn this summer!</p>
              </Col>
            </Row>
          </Grid>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Home;
