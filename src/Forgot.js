import React, { Component } from 'react';
import './App.css';
import { Button, Form, FormGroup, InputGroup, Card } from 'react-bootstrap';

export default class Forgot extends Component {

    render() {
        
        return (
            <div className="container-fluid">
                <h2 className="text-center mt-3 mb-3">Forgot password?</h2>
                <div className="col-lg-6 col-md-6 col-sm-12 mx-auto align-middle">
                    <Card body>
                        <Form>
                            <FormGroup>
                                <Form.Label htmlFor="name">Enter your Email Address:</Form.Label>
                                <InputGroup.Text type="email" name="fullname" id="email" required/>
                            </FormGroup>
                            <Button type="submit" className="btn btn-danger pull-right">Send Email</Button>
                        </Form>
                    </Card>
                </div>
            </div>
        );
    }
}