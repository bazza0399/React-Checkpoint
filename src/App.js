import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Form,Button} from 'react-bootstrap';
function App() {
  return (
    <Form>
      <Form.Group controlId="formBasicName">
    <Form.Label>User Name</Form.Label>
    <Form.Control type="text" placeholder="Enter userName" />
    
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="remeber user" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
  );
}

export default App;
