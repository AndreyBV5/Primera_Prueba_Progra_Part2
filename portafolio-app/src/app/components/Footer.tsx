"use client"
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';


const Footer = () => {
    return (
        <section id = "Contacts">
            <footer className="bg-dark text-center text-white">
                <Container className="p-4 pb-0">
                    <section className="mb-4">
                        <Row>
                            <Col>
                                <a className="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/andrey.barriosvalverde" role="button">
                                    <FaFacebookF />
                                </a>
                                <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                                    <FaTwitter />
                                </a>
                                <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                                    <FaGoogle />
                                </a>
                                <a className="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/andreybv_5/" role="button">
                                    <FaInstagram />
                                </a>
                                <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                                    <FaLinkedinIn />
                                </a>
                                <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                                    <FaGithub />
                                </a>
                            </Col>
                        </Row>
                    </section>
                </Container>
                <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    © 2023, AndreyBV
                </div>
            </footer>
        </section>
    );
};

export default Footer;
