import { Navbar, Nav, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from './Mesonet.png'
import './Navigation.css'

const Navigation = () => {

  return (

    <Navbar fixed="bottom" style={{"margin-top":"30px",height:"12%",background:"white"}}>
      <Container>
        <Navbar.Brand style={{color:"black",fontWeight:"bolder"}} href="/">{<img src={logo} style={{width:"450px",height:"auto"}} alt="Logo" />} Operational Network Overview</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" expand="lg"/>
        <Nav className="me-auto" >
            <Nav.Link   activeClassName="active"  href="/">Central Report</Nav.Link>
            <Nav.Link  activeClassName="active" href="/images">Images</Nav.Link>
            <Nav.Link  activeClassName="active" href="/maps">Maps</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    
  );
};
export default Navigation;
