import { Navbar, Nav, Container} from 'react-bootstrap';
import logo from './Mesonet.png'

const Navigation = () => {
  return (
    <Navbar variant="dark" fixed="bottom" style={{"margin-top":"30px",height:"12%",background:"white",color:"black"}}>
      <Container>
        <Navbar.Brand style={{color:"black",fontWeight:"bold"}} href="/central-report">{<img src={logo} style={{width:"450px",height:"auto"}} alt="Logo" />} Operational Network Overview</Navbar.Brand>
        <Nav className="me-auto" >
            <Nav.Link style={{color:"black"}} href="/central-report">Central Report</Nav.Link>
            <Nav.Link style={{color:"black"}} href="/images">Images</Nav.Link>
            <Nav.Link style={{color:"black"}} href="/maps">Maps</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default Navigation;
