import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logout } = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky="top" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">Car App</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#experts">Experts</Nav.Link>
                        {
                            user?.email ? <Button onClick={logout} className='me-3' variant="dark">Logout</Button>
                                :
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }
                        <Navbar.Text>
                            Welcome: <Link as={HashLink} to="#login">{user?.displayName}</Link>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;