import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../UserContext/UserContext';
import LeftNav from '../LeftNav/LeftNav';
import { FaUser } from "react-icons/fa";

const Header = () => {
    const {user,userLogOut} = useContext(AuthContext)
    console.log(user);
    const navigate= useNavigate()
    const handelSignOut= ()=>{
        userLogOut()
        .then(()=>{
            navigate('/')
        })
        .catch((e)=> console.error(e))
    }
    return (

        <div className='mb-5'>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand ><Link to={'/'} className="text-decoration-none">Dragon News</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">All News</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                         {
                             user?.uid?
                             <>
                                <Nav.Link className='mx-2'>
                                {user?.displayName? user?.displayName:user?.email}
                                </Nav.Link>
                            
                                {
                                    user?.photoURL?
                                    <Image
                                    roundedCircle
                                    src={user?.photoURL}
                                    style={{width:'40px'}}
                                    ></Image>
                                    :
                                     <FaUser style={{width:'40px',fontSize:'30px'}} ></FaUser>
                                }
                                
                                <Button onClick={handelSignOut} className='mx-2' variant="outline-danger">Log Out</Button>
                             </>
                             :
                             <>
                                <Link to={'../login'}><Button  variant="outline-primery">Log In</Button></Link>
                                <Link to={'../resister'}><Button variant="outline-primery">Resister</Button></Link>
                             </>
                         }
                        </Nav>
                        <div className='d-lg-none'>
                            <LeftNav></LeftNav>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;