import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HeaderTop.css';
import { Col, Container, Row } from 'react-bootstrap';

const HeaderTop = () => {
    return (
        <>
            <Container className='py-4'>
                <Row>
                    <Col>1111</Col>

                    <Col className='text-center'>
                        <h1>MiniGiant</h1>
                    </Col>

                    <Col>3333</Col>

                </Row>
            </Container>
        </>
    );
};

export default HeaderTop;