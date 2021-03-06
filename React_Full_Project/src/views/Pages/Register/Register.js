import React, {Component} from "react";
import {Container, Row, Col, Card, CardBlock, CardFooter, Button, Input, InputGroup, InputGroupAddon} from "reactstrap";

class Register extends Component {
  handleRegister(e) {
    this.props.register(this.state);
  }
  render() {
    const { auth } = this.props;
    const { fetching, error } = auth;
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="6">
              <Card className="mx-4">
                <CardBlock className="card-body p-4">
                  <h1>Register</h1>
                  <p className="text-muted">Create your account</p>
                  <InputGroup className="mb-3">
                    <InputGroupAddon><i className="icon-user"></i></InputGroupAddon>
                    <Input type="text" placeholder="Username"
                               onChange={(e) => this.setState({
                                       username: e.target.value.trim()
                               })
                               }
                       />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <InputGroupAddon>@</InputGroupAddon>
                    <Input type="text" placeholder="Email"
                               onChange={(e) => this.setState({
                                       email: e.target.value.trim()
                               })
                               }
                       />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <InputGroupAddon><i className="icon-lock"></i></InputGroupAddon>
                    <Input type="password" placeholder="Password"
                               onChange={(e) => this.setState({
                                       password: e.target.value.trim()
                               })
                               }
                       />
                  </InputGroup>
                  <InputGroup className="mb-4">
                    <InputGroupAddon><i className="icon-lock"></i></InputGroupAddon>
                    <Input type="password" placeholder="Repeat password"
                               onChange={(e) => this.setState({
                                       password: e.target.value.trim()
                               })
                               }
                       />
                  </InputGroup>
                  <Button color="success" block
                                  onClick={ this.handleRegister.bind(this) }
                                  disabled={fetching}
                          >Create Account</Button>
                </CardBlock>
                <CardFooter className="p-4">
                  <Row>
                    <Col xs="12" sm="6">
                      <Button className="btn-facebook" block><span>facebook</span></Button>
                    </Col>
                    <Col xs="12" sm="6">
                      <Button className="btn-twitter" block><span>twitter</span></Button>
                    </Col>
                  </Row>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Register;
