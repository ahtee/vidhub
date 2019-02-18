import React, { Component } from 'react';
import './App.css';
import { Button, Form, FormGroup, InputGroup, Card } from 'react-bootstrap';

export default class Register extends Component {

    render() {
        return (
            <div className="container-fluid">
                <h2 className="text-center mt-3 mb-3">Create an account to get started</h2>
                <div className="row mb-3">
                    <div className="col-md-4 mx-auto">
                        <Card body>
                            <Form>
                                <FormGroup>
                                    <Form.Label htmlFor="name">Full name:</Form.Label>
                                    <InputGroup.Text type="text" name="fullname" id="fullname" required/>
                                </FormGroup>
                                <FormGroup>
                                    <Form.Label htmlFor="username">Username:</Form.Label>
                                    <InputGroup.Text type="text" name="username" id="username" required/>
                                </FormGroup>
                                <FormGroup>
                                    <Form.Label htmlFor="email">Email:</Form.Label>
                                    <InputGroup.Email type="email" name="email" id="email" required/>
                                </FormGroup>
                                <FormGroup>
                                    <Form.Label htmlFor="email_confirmation">Email confirmation:</Form.Label>
                                    <InputGroup.Email type="email" name="email" id="email" required/>
                                </FormGroup>
                                <FormGroup>
                                    <Form.Label htmlFor="password">Password:</Form.Label>
                                    <InputGroup.Password type="password" name="password" id="password" required/>
                                </FormGroup>
                                <div className="terms-and-conditions checkbox mt-3">
                                    <FormGroup className="ml-4">
                                        <Form.Label htmlFor="terms-and-conditions">
                                            <InputGroup.Checkbox type="checkbox" name="terms-and-conditions" id="terms-and-conditions" value="0" required />
                                            <span>I have read and agree to the <a href="/">Terms and Conditions</a></span>
                                        </Form.Label>
                                    </FormGroup>
                                </div>
                                <Button type="submit" className="btn btn-primary" block="true">Create Account</Button>
                            </Form>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }

}