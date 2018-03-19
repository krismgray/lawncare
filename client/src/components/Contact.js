import React, { Component } from 'react';
import { Header, Menu, Grid } from 'semantic-ui-react';
import NavMenu from './NavMenu';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import '../Contact.css';

class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <NavMenu />
        </div>
        <div className='boxtop'>
          <p className='box1p'>Contact us for Pricing or scheduling</p>
          <p className='box1p'>Call us at (801)-706-7057</p>
          <p className='box1p'>Or</p>
          <p className='box1p'>Email us at graylawncure@gmail.com or click the button on the bottom</p>
          <p className='box1p'>Ask us about our referal program for a discount!</p>
          <br />
        </div>
        <div className='box1'>
        </div>
        <div className='boxbottom'>
          <Grid>
            <Grid.Row columns={2}>
              <Grid.Column>
                <p className='boxbp1'>
                  We appreciate your business and hope to hear from you soon! We also
                  work in the fall so contact us after the summer!
                </p>
              </Grid.Column>
              <Grid.Column>
                <iframe src="https://giphy.com/embed/atHI7U3aP3kl2" width="480" height="285" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/cool-lazy-atHI7U3aP3kl2">via GIPHY</a></p>
                <p className='boxbp'>Enjoy your lawn this summer!</p>
            </Grid.Column>
            </Grid.Row>
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
