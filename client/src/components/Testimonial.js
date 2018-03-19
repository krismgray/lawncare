import React from 'react';
import NavMenu from './NavMenu';
import '../Testimonial.css';
import { Button, Segment, Container, Header, Form, Input, List, TextArea } from 'semantic-ui-react';
import axios from 'axios';

class Testimonial extends React.Component {
  state = { name: '', posts: [] }

  componentDidMount() {
    axios.get('/api/posts')
      .then( ({ data: posts }) => this.setState({ posts }) )
  }

  handleSubmit = e => {
    const { name, posts } = this.state;
    e.preventDefault();
    axios.post('/api/posts', { name, body: this.state.name })
      .then( res => {
        this.setState({ posts: [name, ...posts], name: '' })
      })
  }

  handleChange = (type, val) => {
    this.setState({ [type]: val});
  }

  setMessage = (e) => {
    this.setState({ name: e.target.value });
  }

  render() {
    const { name, posts } = this.state;
    return(
      <div>
        <div>
          <NavMenu />
        </div>
        <div className='background'>
          <div className='testTitle'>
            <p>How Was Our Service?</p>
          </div>
          <div className='content'>
            <Container>
              <Segment textalign='center'>
                <Form onSubmit={this.handleSubmit}>
                  <TextArea
                    placeholder='Tell us about your experience!'
                    required
                    value={name}
                    onChange={this.setMessage}
                  />
                <Form.Button>Submit</Form.Button>
                </Form>
                <List>
                  { posts.map( post =>
                    <List.Item
                      key={post.id}
                    >
                  </List.Item>
                  )}
                </List>
              </Segment>
            </Container>
          </div>
        </div>
      </div>
    )
  }
}

export default Testimonial;
