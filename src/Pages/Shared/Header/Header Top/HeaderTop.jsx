import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HeaderTop.css';
import { Col, Container, Row } from 'react-bootstrap';
import { FiFacebook, FiTwitter, FiInstagram, FiSearch } from 'react-icons/fi';
import {CgProfile} from 'react-icons/cg';

const HeaderTop = () => {
    return (
        <div className='header-top py-4'>
            <Container>
                <Row>
                    <Col className='header-top-left d-flex align-items-center justify-content-left'>
                        <div className='header-social'>
                            <span className=''><FiFacebook className='header-icon'/></span>
                            <span className=''><FiTwitter className='header-icon'/></span>
                            <span className=''><FiInstagram className='header-icon'/></span>
                        </div>
                    </Col>

                    <Col className='header-top-middle text-center'>
                        <h1>MiniGiant</h1>
                    </Col>

                    <Col className='header-top-right d-flex align-items-center justify-content-end'>
                    <div className='header-social'>
                            <span className=''><FiSearch className='header-icon'/></span>
                            <span className=''><CgProfile className='header-icon profile-icon'/>
                            </span>
                        </div>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default HeaderTop;