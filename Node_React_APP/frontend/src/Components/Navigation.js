import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Container} from 'react-bootstrap';
import logo from './Mesonet.png'
// "#9A1A20"
const Navigation = () => {
  return (
    <Navbar variant="dark" fixed="bottom" style={{"margin-top":"30px",height:"145px",background:"white",color:"black"}}>
      <Container>
        <Navbar.Brand style={{color:"black",fontWeight:"bold"}} href="#home">{<img src={logo} style={{width:"450px",height:"auto"}}alt="Logo" />} Operational Network Overview</Navbar.Brand>
        <Nav className="me-auto" >
          <Nav.Link style={{color:"black"}}href="#home">Central Report</Nav.Link>
          <Nav.Link style={{color:"black"}}href="#features">Images</Nav.Link>
          <Nav.Link style={{color:"black"}}href="#pricing">Maps</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default Navigation;
