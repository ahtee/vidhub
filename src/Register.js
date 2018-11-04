import React, { Component } from 'react';
import './App.css';
import { Button, Form, FormGroup, Label, Input, Card } from 'reactstrap';

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
                                    <Label htmlFor="name">Full name:</Label>
                                    <Input type="text" name="fullname" id="fullname" required/>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="username">Username:</Label>
                                    <Input type="text" name="username" id="username" required/>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="email">Email:</Label>
                                    <Input type="email" name="email" id="email" required/>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="email_confirmation">Email confirmation:</Label>
                                    <Input type="email" name="email" id="email" required/>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="password">Password:</Label>
                                    <Input type="password" name="password" id="password" required/>
                                </FormGroup>
                                <div className="terms-and-conditions checkbox mt-3">
                                    <FormGroup className="ml-4">
                                        <Label htmlFor="terms-and-conditions">
                                            <Input type="checkbox" name="terms-and-conditions" id="terms-and-conditions" value="0" required />
                                            <span>I have read and agree to the <a href="/">Terms and Conditions</a></span>
                                        </Label>
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