import React from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';



class FormUserDetails extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div >
                <header>
                    <Container className="border-bottom" fluid ={true} >
                        <Row className="justify-content-center">
                            <h2>
                                User Details
                            </h2>
                        </Row>
                    </Container>
                </header>
                    <Form className=" m-5" >
                        <Form.Group>
                            <Form.Label  htmlFor="first-name">First Name</Form.Label>
                            <Form.Control className="Form_input" id="firstName" name="firstName" type="text" value={this.props.firstName} onChange={this.props.onChange}/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="last-name">Last Name</Form.Label>
                            <Form.Control className id="lastname" name="lastname" type="text" value={this.props.lastName} onChange={this.props.onChange}/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="email">Email</Form.Label>
                            <Form.Control id="email" name="email" type="email" value={this.props.email} onChange={this.props.onChange} />
                        </Form.Group>

                        <Button onClick={this.props.onNext} className="btn btn-info m-4" type="submit" >
                            Next
                        </Button>
                    </Form>
            </div>
       
        );
    }
}

export default FormUserDetails;

            