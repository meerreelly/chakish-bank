import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Button from './button';

function NavBar(props) {
  function RedirectToLogin(){
    window.location.href = '/login';
  }
  return (
    <>
    <div className='NavBar'>
    <Navbar collapseOnSelect expand="lg" className='navBlock'>
      <Container>
        <div className='LogoBlock'>
        <img className="LogoImg" src='/logo.png'></img>
        <Navbar.Brand as={Link} className='navBrand'  to="/">Chakish Bank</Navbar.Brand>
      </div>
      {props.isLogged ?(
       <div className='NavElements'>
       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} className='NavLink' to="/">Cards</Nav.Link>
                        <Nav.Link as={Link} className='NavLink' to="/">Service</Nav.Link>
                        <Nav.Link as={Link} className='NavLink' to="/">Setings</Nav.Link>
                    </Nav>
            </Navbar.Collapse>
       </div>)
       :(
        <div className='NavElements'>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                      <Link to="/login" className='NavLink'>
                        <Button>Log in</Button>
                      </Link>
                    </Nav>
            </Navbar.Collapse>
          
       </div>)
       }
      </Container>
    </Navbar>
  </div>
  <Outlet />
    </>
  );
}

export default NavBar;