import React from 'react';
import { Icon, Button } from 'semantic-ui-react';
import '../Home.css';

class Footer extends React.Component {
  render() {
    return(
      <div className='footer'>
        <div className='footnote2'>
          <p>All Rights Reserved</p>
        </div>
        <div className='footnote2'>
          <Button inverted>
            <a href="mailto:graylawncure@gmail.com">
              Contact Us
            </a>
          </Button>
        </div>
      </div>
    )
  }
}

export default Footer;
