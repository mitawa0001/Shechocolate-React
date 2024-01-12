import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./style.css";
import logo from "../image/logo.webp"
function Header() {
    return (
        <>
            <div className='sale-wrapper py-2'>Save 25% on your entire purchase, Free worldwide shipping</div>
            <Navbar collapseOnSelect expand="lg" className="navbar-wrapper">

                <Container>
                    <Navbar.Brand href="#home"><img src={logo} alt='logo' width="100%" height="100%"></img></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-auto">
                            <Nav.Link className='active' href="#features">Home </Nav.Link>
                            <Nav.Link href="#features">Size Guide</Nav.Link>
                            <Nav.Link href="#features">Summer</Nav.Link>
                            <Nav.Link href="#features">Casual</Nav.Link>
                            <Nav.Link href="#features">Jacket</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    );
}

export default Header;