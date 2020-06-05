import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Success extends React.Component{
    render() {
        return(
            <div>
                <header>
                    <Container className="border-bottom" fluid ={true} >
                        <Row className="justify-content-center">
                            <h2>
                                Success
                            </h2>
                        </Row>
                    </Container>
                </header>
                <Container className=" m-5">
                    <h1>Form Completed</h1>
                    <p>Thanks for using Aaron's form, this form was created using React demonstrating the use of React Bootstap, State and Props</p>
                </Container>
             </div>
        );
    }
}

export default Success;