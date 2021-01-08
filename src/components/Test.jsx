import React, { Component } from "react";
import { Container, Row, Form } from "react-bootstrap";

export default class Test extends Component {
  render() {
    return (
      <>
        <Container>
          <Row>
            <Form>
              <Form.Group controlId="exampleForm.SelectCustomHtmlSize">
                <Form.Label>first question</Form.Label>
                <Form.Control as="select" htmlSize={4} custom>
                  <option>1 (answer 1)</option>
                  <option>2 (answer 2)</option>
                  <option>3 (answer 3)</option>
                  <option>4 (answer 4)</option>
                </Form.Control>
              </Form.Group>
            </Form>

            <Form>
              <Form.Group controlId="exampleForm.SelectCustomHtmlSize">
                <Form.Label>first question</Form.Label>
                <Form.Control as="select" htmlSize={4} custom>
                  <option>1 (answer 1)</option>
                  <option>2 (answer 2)</option>
                  <option>3 (answer 3)</option>
                  <option>4 (answer 4)</option>
                </Form.Control>
              </Form.Group>
            </Form>

            <Form>
              <Form.Group controlId="exampleForm.SelectCustomHtmlSize">
                <Form.Label>first question</Form.Label>
                <Form.Control as="select" htmlSize={4} custom>
                  <option>1 (answer 1)</option>
                  <option>2 (answer 2)</option>
                  <option>3 (answer 3)</option>
                  <option>4 (answer 4)</option>
                </Form.Control>
              </Form.Group>
            </Form>

            <Form>
              <Form.Group controlId="exampleForm.SelectCustomHtmlSize">
                <Form.Label>first question</Form.Label>
                <Form.Control as="select" htmlSize={4} custom>
                  <option>1 (answer 1)</option>
                  <option>2 (answer 2)</option>
                  <option>3 (answer 3)</option>
                  <option>4 (answer 4)</option>
                </Form.Control>
              </Form.Group>
            </Form>
          </Row>
        </Container>
      </>
    );
  }
}
