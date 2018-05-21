import React, { Component } from 'react';
import { Header, Container, Segment, Button, Menu, Divider } from 'semantic-ui-react';
import { Grid, Row, Col, Carousel } from 'react-bootstrap';
import '../Home.css';
import NavMenu from './NavMenu';
import Footer from './Footer';
import { Link } from 'react-router-dom';


class Home extends Component {
  render() {
    return (
      <div>
        <div className="slideshow">
          <NavMenu />
        <div className='header'>
          <Grid>
            <Row>
              <Col xs={12}>
                <p>Gray Lawn Aeration</p>
              </Col>
            </Row>
          </Grid>
        </div>
        <Container>
          <Carousel>
            <Carousel.Item>
              <img src={require('../images/02.1.jpg')} />
              <Carousel.Caption>
                <h1>It's that time of year to Aerate!</h1>
                <h3>Lawn aerating is a great way to break through compacted soil!</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={require('../images/03.1.jpg')} />
            </Carousel.Item>
            <Carousel.Item>
              <img src={require('../images/g1.jpg')} />
            </Carousel.Item>
          </Carousel>
        </Container>
        <br />
        <br />
        </div>
        <div className='body1'>
          <br />
          <div>
            <Grid>
              <Row>
                <Col xs={12}>
                  <p className='body1p'>Don't know much about lawn aeration? We can explain
                    the benefits and get you scheduled today for a healthier lawn!
                  </p>
                </Col>
              </Row>
            </Grid>
          </div>
          <br />
            <div className='body1b'>
              <Grid>
                <Row>
                  <Col xs={12}>
                    <Link to='/About'>
                      <Button primary size='huge'>Learn More!</Button>
                    </Link>
                  </Col>
                </Row>
              </Grid>
            </div>
            <br />
        </div>
        <div className='body2'>
          <Grid>
            <Row>
              <Col xs={12}>
                <p className='body2p'>
                  Gray Lawn Care has been a local business for over 4 years. We provide a fast service and accomodate to your schedule.
                  We offer flags to mark sprinklers and clean up after oursleves. We pride ourselfs in providing an overall pleasent
                  experience and appreciate your business. Let us help you get the lawn that you want this summer!
                </p>
              </Col>
            </Row>
          </Grid>
        </div>
        <br />
        <div className='body3'>
          <p className='body3p'>Contact Us for pricing and scheduling</p>
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
