import React, { Component } from 'react';
import { Header, Menu, Button, Segment } from 'semantic-ui-react';
import { Grid, Row, Col } from 'react-bootstrap';
import NavMenu from './NavMenu';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import '../About.css';


class Home extends Component {
  render() {
    return (
      <div>

        <div className='content1'>
          <NavMenu />
          <Grid>
            <Row>
              <Col xs={12}>
          <p className='content1p'>WHAT IS LAWN AERATION?</p>
          <br />
          <p className='content1p1'>
            Lawns need oxygen just like us! When a lawn is able to get more oxygen to the roots,
            it recieves more nutrients and hydration. Lawn aeration removes small plugs of turf and soil from
            your lawn. These will then break down and feed nutrients back into the lawn's roots. Lawn aeration also
            looses the hardened earth which allows fertilizer to move around.
          </p>
          <br />
          <p className='content1p2'>
            Here are some of the benefits of aerating your lawn
          </p>
              </Col>
            </Row>
          </Grid>
          <div className='table'>
            <ul className='list'>
              <li>Enhanced soil water uptake</li>
              <br />
              <li>Reduced water runoff and puddling</li>
              <br />
              <li>Improved fertilizer uptake and use</li>
              <br />
              <li>Stronger turfgrass roots</li>
              <br />
              <li>Reduced soil compaction</li>
              <br />
              <li>Improved resiliency and cushioning</li>
              <br />
              <li>Improved air exchange between the soil and atmosphere</li>
              <br />
              <li>Enhanced heat and drought stress tolerance</li>
            </ul>
            <br />
          </div>
        </div>
        <div className='content2'>
          <Grid>
            <Row>
              <Col xs={12}>

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
