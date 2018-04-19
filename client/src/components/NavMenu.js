import React, { Component } from 'react';
import { Header, Menu } from 'semantic-ui-react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Home.css';

class NavMenu extends Component {
  state = {}

  handleClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
      <div className="navbar">
        <Menu fluid borderless size='huge'>
          <Link to="/">
            <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleClick}>
              Home
            </Menu.Item>
          </Link>
          <Link to="/About">
            <Menu.Item name='about' active={activeItem === 'about'} onClick={this.handleClick}>
              About
            </Menu.Item>
          </Link>
          <Link to='Contact'>
            <Menu.Item name='contact' active={activeItem === 'contact'} onClick={this.handleClick}>
              Contact Us
            </Menu.Item>
          </Link>
          <Link to='Testimonial'>
            <Menu.Item name='testimonial' active={activeItem === 'testimonial'} onClick={this.handleClick}>
              Testimonials
            </Menu.Item>
          </Link>
        </Menu>
      </div>
    );
  }
}

export default NavMenu;
