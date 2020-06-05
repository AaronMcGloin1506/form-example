import React from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Confirm extends React.Component{
    render() {
        return(

            <div>
                <header>
                    <Container className="border-bottom" fluid ={true} >
                        <Row className="justify-content-center">
                            <h2>
                               Confirm
                            </h2>
                        </Row>
                    </Container>
                </header>

                <Container className="m-4">
                    <h3>First Name</h3>
                    <p>{this.props.firstName}</p>

                <h3>Last Name</h3>
                <p>{this.props.lastName}</p>

                <h3>Email</h3>
                <p>{this.props.email}</p>

                <h3>Occupation</h3>
                <p>{this.props.occupation}</p>

                <h3>Bio</h3>
                <p>{this.props.bio}</p>

                <Button onClick={this.props.onPrev} className="btn btn-info m-4" variant="primary" type="submit" >
                    Previous
                </Button>

                <Button onClick={this.props.onNext} className="btn btn-info m-4" variant="primary" type="submit" >
                    Next
                </Button>

                </Container>
                

            </div>
        );
    }
}

export default Confirm;
