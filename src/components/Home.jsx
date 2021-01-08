import React, { Component } from "react";
import { Container, Row, Form } from "bootstrap";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>Welcome to THE QUIZ</Row>
          <Row>
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>Enter your name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formTestname">
                <Form.Label>Enter a name for your test</Form.Label>
                <Form.Control type="text" placeholder="Enter a test name" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Start
              </Button>
            </Form>
          </Row>
        </Container>
      </div>
    );
  }
}
