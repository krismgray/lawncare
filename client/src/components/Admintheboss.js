import React from 'react';
import NavMenu from './NavMenu';
import '../Testimonial.css';
import { Button, Segment, Container, Header, Form, Input, List, TextArea, Icon, Loader, Rating } from 'semantic-ui-react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroller';

const styles = {
  scroller: { height: '45vh', overflow: 'auto', width: '102%' }
}

class Admintheboss extends React.Component {
  state = { name: '', body: '', value: '', posts: [], page: 1, totalPages: 0 }

  componentDidMount() {
    axios.get('/api/posts')
      .then( ({ data: posts }) => this.setState({ posts }) )
  }

  handleSubmit = e => {
    const { name, posts, body, value } = this.state;
    e.preventDefault();
    axios.post('/api/posts', { name, body, value })
      .then( ({ data }) => {
        this.setState({ posts: [name, ...posts], name: '' })
      })
  }

  handleChange = (type, val) => {
    this.setState({ [type]: val});
  }

  setMessage = (e) => {
    this.setState({ body: e.target.value });
  }

  setMessager = (e) => {
    this.setState({ name: e.target.value });
  }

  setRate = (e, { value }) => this.setState({ value })

  deleteReview = id => {
  const { name, rating, body } = this.state;
  axios.delete(`/api/posts/${id}`)
    .then( ({ data }) => {
      this.setState({ posts: [name, body, rating], name: '' })
    })
}

  render() {
    const { name, posts, body, page, totalPages, value } = this.state;
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
                  <Input
                    required
                    placeholder='Name'
                    value={name}
                    onChange={this.setMessager}
                    />
                  <br />
                  <Form.Group inline>
                    <Form.Radio label='1 star' value='1 star' checked={value === '1 star'} onChange={this.setRate} />
                    <Form.Radio label='2 star' value='2 star' checked={value === '2 star'} onChange={this.setRate} />
                    <Form.Radio label='3 star' value='3 star' checked={value === '3 star'} onChange={this.setRate} />
                    <Form.Radio label='4 star' value='4 star' checked={value === '4 star'} onChange={this.setRate} />
                    <Form.Radio label='5 star' value='5 star' checked={value === '5 star'} onChange={this.setRate} />
                  </Form.Group>
                  <TextArea
                    placeholder='Tell us about your experience!'
                    required
                    rows={5}
                    value={body}
                    onChange={this.setMessage}
                  />
                <br />
                <Form.Button>Submit</Form.Button>
                </Form>
              </Segment>
            </Container>
              <div>
                  <Container>
                    <br />
                    <br />
                    <List size='huge' style={styles.scroller}>
                      <InfiniteScroll
                        pageStart={page}
                        loadMore={this.loadMore}
                        hasMore={page < totalPages}
                        loader={<Loader />}
                        >
                      { posts.map( post =>
                        <Segment>
                          <Container>
                            <List.Item key={post.id}>
                                <List.Content>
                                  <div className='name/ratin'>
                                    <List.Header className='listName'>{post.name}</List.Header>
                                    <List.Header className='listRate'>{post.value}</List.Header>
                                  </div>
                                  <br />
                                  {post.body}
                                  <Button basic onClick={ () => this.deleteReview(post.id)}>Delete</Button>
                                </List.Content>
                            </List.Item>
                          </Container>
                        </Segment>
                      )}
                      </InfiniteScroll>
                    </List>
                </Container>

              </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Admintheboss;
