"use client"
import Container from 'react-bootstrap/Container';
import { Nav, Navbar } from "react-bootstrap"
import Image from "next/image";
import Logo from '../components/Logo Andrey.png'

function NavbarHeader() {
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Image src={Logo} alt="" width={75} height={50} />
            <Container>
                <Navbar.Brand href="#home">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#Proyects">Proyects</Nav.Link>
                        <Nav.Link href="#About">About</Nav.Link>
                        <Nav.Link href="#Hiring">Hiring</Nav.Link>
                        <Nav.Link href="#Contacts">Contacts</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarHeader;