import { Navbar, Nav, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from './Mesonet.png'
import './Navigation.css'
<link href="https://fonts.googleapis.com/css?family=Archivo+Black|Judson:400,700" rel="stylesheet"></link>
const Navigation = () => {

  return (

    <Navbar fixed="bottom" style={{"margin-top":"30px",height:"12%",background:"#15191C"}}>
      <Container>
        <Navbar.Brand style={{color:"white",fontWeight:"bolder"}} href="/">{<img src={logo} style={{width:"450px",height:"auto"}} alt="Logo" />} Operational Network Overview</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" expand="lg"/>
        <Nav className="me-auto" style={{color:"white"}}>
            <Nav.Link   style={{color:"white"}}activeClassName="active"  href="/">Central Report</Nav.Link>
            <Nav.Link  style={{color:"white"}}activeClassName="active" href="/images">Images</Nav.Link>
            <Nav.Link  style={{color:"white"}}activeClassName="active" href="/maps">Maps</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    
  );
};
export default Navigation;
