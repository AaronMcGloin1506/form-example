import React from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


class FormPersonalDetails extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div>
                <header>
                    <Container className="border-bottom" fluid ={true} >
                        <Row className="justify-content-center">
                            <h2>
                               Personal Details
                            </h2>
                        </Row>
                    </Container>
                </header>
                <Form className="m-5">
                <Form.Group>
                    <Form.Label htmlFor="occupation">Occupation</Form.Label>
                    <Form.Control id="occupation" name="occupation" type="text" value={this.props.occupation} onChange={this.props.onChange}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label htmlFor="city">city</Form.Label>
                    <Form.Control id="city" name="city" type="text" value={this.props.city} onChange={this.props.onChange}/>                     
                </Form.Group>

                <Form.Group>
                    <Form.Label htmlFor="bio">bio</Form.Label>
                    <Form.Control id="ebio" name="bio" as="textarea"rows="4" value={this.props.bio} onChange={this.props.onChange} />
                </Form.Group>

                <Button onClick={this.props.onPrev} className="btn btn-info m-4" variant="primary" type="submit" >
                    Previous
                </Button>

                <Button onClick={this.props.onNext} className="btn btn-info m-4" variant="primary" type="submit" >
                    Next
                </Button>
            </Form>
        </div>
            
        );
    }
}


export default FormPersonalDetails;

